import Featured from "@/pages/site/components/Featured";
import Navbar from "@/pages/site/components/Navbar";
import NewProducts from "@/pages/site/components/NewProducts";
import Image from "next/image";

export default function Home() {
  return (
    <main>
      <Navbar />
      <Featured />
      <NewProducts />
    </main>
  );
}
