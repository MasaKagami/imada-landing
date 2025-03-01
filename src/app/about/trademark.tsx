const Trademark = () => {
    return(
        <div className="relative w-full h-full sm:py-16 ">

            <div className="hidden sm:block absolute w-1/2 inset-0 bg-[url('/about1.jpg')] bg-cover bg-center"></div>
            <div className="hidden sm:block absolute w-1/2 inset-0 left-1/2 "></div>

            <div className="sm:hidden flex w-full h-[300px] bg-[url('/about1.jpg')] bg-cover bg-center"></div>
            <div className="relative w-full h-full flex sm:flex-row flex-col  sm:py-0 py-10 justify-between items-center max-w-[90%] sm:max-w-[75%] m-auto">
                <div className="sm:w-1/2 w-full"></div>
                <div className="sm:w-1/2 w-full flex flex-col gap-8 px-1 sm:px-8 lg:px-10 xl:px-16">
                    <h1 className="text-start text-4xl sm:text-5xl font-bold">Trademark and Companies</h1>
                    <p>Imada, in response to the protection of trademarks and patents of each product, the establishment of this comprehensive limited company began in the 1950s with more than 70 years of history to date. Products are marketed around the world with the trust and love from foreign people, young to elderly, and they are advised to use safely as home and travel medicine.</p>
                </div>

            </div>
        </div>
    )
};

export default Trademark;