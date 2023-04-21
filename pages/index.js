import Image from "next/image";
import { Inter } from "next/font/google";
import Resume from "@/components/resume";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <Resume />
    </>
  );
}
