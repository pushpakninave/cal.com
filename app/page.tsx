import Image from "next/image";
import Navbar from "./components/NavBar/Navbar";
import { auth } from "./utils/auth";
import { redirect } from "next/navigation";

export default async function Home() {
  const session = await auth();

  if (session?.user) {
    return redirect("/dashboard");
  }
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"></div>
  );
}
