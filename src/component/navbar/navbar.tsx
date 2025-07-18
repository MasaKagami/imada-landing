import Image from "next/image";
import Link from "next/link";

const Navbar = () => {
    return(
        <nav className="w-screen border-b-2 border-gray-300">
            <div className="w-full max-w-[95%] md:m-auto flex justify-between items-center">
                {/* Logo Section */}
                <Link href='/'>
                    <Image src="/imada.webp" alt="imada logo" width={200} height={0} className="py-2 hidden md:block" style={{height: "auto"}}/>
                </Link>
                <Link href='/'>    
                    <Image src="/imada.webp" alt="imada logo" width={150} height={0} className="py-2 md:hidden block" style={{height: "auto"}}/>
                </Link>
                
                {/* Navigation Links and Social Media */}
                <div className="flex items-center gap-4 md:gap-6">
                    {/* Navigation Links */}
                    <div className="gap-2 md:gap-6 text-black font-semibold justify-center items-center flex">
                        <Link href='/'>
                            <p className="border-b-4 hover:border-red-600 hover:border-b-4 border-white my-3 py-1 px-2 md:px-4">Home</p>
                        </Link>
                        <Link href='/about'>
                            <p className="border-b-4 hover:border-red-600 hover:border-b-4 border-white my-3 py-1 px-2 md:px-4">About Us</p>
                        </Link>
                    </div>
                    
                    {/* Social Media Icons */}
                    <div className="flex items-center gap-3">
                        {/* Instagram */}
                        <Link 
                            href="https://www.instagram.com/imada.hk/" 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="hover:scale-110 transition-transform duration-200"
                        >
                            <svg 
                                width="24" 
                                height="24" 
                                viewBox="0 0 24 24" 
                                fill="none" 
                                xmlns="http://www.w3.org/2000/svg"
                                className="hover:fill-red-600 fill-gray-600 transition-colors duration-200"
                            >
                                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                            </svg>
                        </Link>
                        
                        {/* Facebook */}
                        <Link 
                            href="https://www.facebook.com/p/%E4%BE%9D%E9%A6%AC%E6%89%93-IMADA-100085457961391/" 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="hover:scale-110 transition-transform duration-200"
                        >
                            <svg 
                                width="24" 
                                height="24" 
                                viewBox="0 0 24 24" 
                                fill="none" 
                                xmlns="http://www.w3.org/2000/svg"
                                className="hover:fill-red-600 fill-gray-600 transition-colors duration-200"
                            >
                                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                            </svg>
                        </Link>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;