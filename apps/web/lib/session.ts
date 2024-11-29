"use server";

import { jwtVerify, SignJWT } from "jose";

import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import { Role } from "./type";

export type Session = {
  user: {
    id: string;
    name: string;
    role: Role;
  };
  accessToken: string;
  refreshToken: string;
};

const secretKey = process.env.SESSION_SECRET_KEY!;
const encodedKey = new TextEncoder().encode(secretKey);

export async function createSession(payload: Session) {
  //7 days from now
  const expiredAt = new Date(
    Date.now() + 7 * 24 * 60 * 60 * 1000
  );

  const session = await new SignJWT(payload)
    .setProtectedHeader({ alg: "HS256" })
    .setIssuedAt()
    .setExpirationTime("7d")
    .sign(encodedKey);

  cookies().set("session", session, {
    httpOnly: true, //saves cookie on the server
    secure: true, // ensures cookies is sent only over https connections
    expires: expiredAt,
    sameSite: "lax", // sends cookies to top level navigational pages
    path: "/", //valid for the entire site
  });
}

export async function getSession() {
  const cookie = cookies().get("session")?.value;
  if (!cookie) return null;

  try {
    const { payload } = await jwtVerify(
      cookie,
      encodedKey,
      {
        algorithms: ["HS256"],
      }
    );

    return payload as Session;
  } catch (err) {
    console.error("Failed to verify the session", err);
    redirect("/auth/sigin");
  }
}

export async function deleteSession() {
  await cookies().delete("session");
}

export async function updateTokens({
  accessToken,
  refreshToken,
}: {
  accessToken: string;
  refreshToken: string;
}) {
  const session = await cookies().get("session")?.value; //undefined;
  if (!session) {
    throw new Error("Session session not found");
  }

  const { payload } = await jwtVerify<Session>(
    session,
    encodedKey
  );

  if (!payload) throw new Error("Session  verify failed");

  const newPayload: Session = {
    user: {
      ...payload.user,
    },
    accessToken,
    refreshToken,
  };

  const newSession = await new SignJWT(newPayload)
    .setProtectedHeader({ alg: "HS256" })
    .setIssuedAt()
    .setExpirationTime("7d")
    .sign(encodedKey);
  const expires = new Date(
    Date.now() + 7 * 24 * 60 * 60 * 1000
  );
  const cookieStore = await cookies();
  console.log("adding cookie store");
  cookieStore.set("session1", newSession, {
    httpOnly: true,
    secure: true,
    expires: expires,
    sameSite: "lax",
    path: "/",
  });

  // await createSession(newPayload);
}
