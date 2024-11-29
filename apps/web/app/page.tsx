import { getSession } from "@/lib/session";
import Landing from "@/components/organisms/Landing/landing";

export default async function Home() {
  const session = await getSession();
  console.log("session: ", { session });

  return <Landing />;
}
