// import Image from "next/image";

import Footer from "@/component/footer/footer";
import Landing from "@/component/landing/landing";
import Navbar from "@/component/navbar/navbar";

export default function Home() {
  return (
    <div className="w-screen h-screen overflow-x-hidden">
      <Navbar/>
      <Landing/>
      <Footer/>
    </div>
  );
}
