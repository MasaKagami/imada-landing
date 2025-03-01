import Image from "next/image";

const Footer = () => {
    return(
        <footer className="w-screen flex flex-col items-center bg-red-600 text-white py-6">
            <div className="w-full max-w-[95%] m-auto space-y-8">
                <div className="flex flex-col gap-4 sm:flex-row w-full">
                    <div className="flex w-full gap-2">
                        <Image src="/footer-logo-1.webp" alt="footer logo 1" height={0} width={220} style={{height: "auto"}} className="hidden sm:block"/>
                        <Image src="/footer-logo-2.webp" alt="footer logo 2" height={0} width={150} style={{height: "auto"}} className="hidden sm:block"/>
                        <Image src="/footer-logo-1.webp" alt="footer logo 1" height={0} width={140} style={{height: "auto"}} className="sm:hidden block"/>
                        <Image src="/footer-logo-2.webp" alt="footer logo 2" height={0} width={100} style={{height: "auto"}} className="sm:hidden block"/>

                    </div>
                    <div className="sm:flex flex-col text-xs hidden">
                        <p>Phone：(852)2527 9202</p>
                        <p>Fax：(852)2865 7529</p>
                        <p>E-mail：info@imada.com.hk luenwah@gmail.com</p>
                        <p>Address：Room 406-412, Paramount Building, 12 Kai Yip St, Chai Wan, Hong Kong</p>
                    </div>
                </div>
                <div className="w-full text-center text-xs font-medium">
                    <p>Copyright © LUEN WAH (H.K.) MEDICINE LTD. All Rights Reserved</p>
                </div>
            </div>
        </footer>
    );
};
export default Footer;