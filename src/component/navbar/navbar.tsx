import Image from "next/image";
import Link from "next/link";

const Navbar = () =>{
    return(
        <nav className="w-screen border-b-2 border-gray-300">
            <div className="w-full max-w-[95%] md:m-auto flex justify-between ">
                <Link href='/'>
                    <Image src="/imada.webp" alt="imada logo" width={200} height={0} className="py-2 hidden md:block" style={{height: "auto"}}/>
                </Link>
                <Link href='/'>    
                    <Image src="/imada.webp" alt="imada logo" width={150} height={0} className="py-2 md:hidden block" style={{height: "auto"}}/>
                </Link>
                <div className="gap-2 md:gap-6 text-black font-semibold justify-center items-end flex">
                    <Link href='/'>
                        <p className=" border-b-4 hover:border-red-600 hover:border-b-4 border-white my-3 py-1 px-2 md:px-4">Home</p>
                    </Link>
                    <Link href='/about'>
                        <p className=" border-b-4 hover:border-red-600 hover:border-b-4 border-white my-3 py-1 px-2 md:px-4">About Us</p>
                    </Link>
                </div>
            </div>
        </nav>)
};

export default Navbar