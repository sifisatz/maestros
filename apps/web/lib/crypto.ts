import { JWTPayload, jwtVerify, SignJWT } from "jose";

// eslint-disable-next-line turbo/no-undeclared-env-vars
const secretKey = process.env.SESSION_SECRET_KEY!;
const key = new TextEncoder().encode(secretKey);

export async function encrypt(
  payload: any
): Promise<string> {
  return await new SignJWT(payload)
    .setProtectedHeader({ alg: "HS256" })
    .setIssuedAt()
    .setExpirationTime("10 sec from now")
    .sign(key);
}

export async function decrypt(
  input: string
): Promise<JWTPayload> {
  const { payload } = await jwtVerify(input, key, {
    algorithms: ["HS256"],
  });
  return payload;
}
