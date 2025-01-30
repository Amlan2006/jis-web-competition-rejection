import Image from "next/image";
import Navbar from "./components/Navbar";
import Link from "next/link";
export default function Home() {
  return (
    <>
    
    <div className="top-0 text-white -z-10">
      <div className="flex flex-col items-center justify-center h-screen bg-[url('/jis_bg.png')] bg-cover bg-center">
        <h1 className="text-8xl font-bold">GEPO</h1>
        <p className="text-xl mt-4 sm:text-2xl text-center">Your Gateway to Global Collaboration and International Opportunities.</p>
        <div className="mt-8 flex justify-around w-2/3 flex-wrap gap-4">
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full">Partner with Us</button>
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full">Join a Program</button>
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full">Contact Us</button>
        </div>
      </div>
      <div className="text-blue-500 h-96 flex justify-center gap-16 flex-wrap items-center">
        <div className="flex flex-col items-center justify-around h-48">
         
        <Link href="/">&rarr;Study Abroad Programs</Link>
        <Link href="/">&rarr;International Admissions</Link>
        <Link href="/">&rarr;Faculty Exchange Programs</Link>
        
        </div>
        
        <div className="flex flex-col items-center justify-around h-48">
         
        <Link href="/">&rarr;Study Abrod Programs</Link>
        <Link href="/">&rarr;Admissions</Link>
        <Link href="/">&rarr;Faculty Exchange Programs</Link>
        
        </div>
      </div>
    </div>
    </>
  );
}
