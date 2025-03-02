const Objective = () => {
    return(
        <div className="relative w-full h-full sm:py-16 ">

            <div className="hidden sm:block absolute w-1/2 inset-0 bg-[url('/about3.jpg')] bg-cover bg-center"></div>
            <div className="hidden sm:block absolute w-1/2 inset-0 left-1/2 "></div>

            <div className="sm:hidden flex w-full h-[300px] bg-[url('/about3.jpg')] bg-cover bg-center"></div>
            <div className="relative w-full h-full flex sm:flex-row flex-col  sm:py-0 py-10 justify-between items-center max-w-[90%] sm:max-w-[80%] m-auto">
                <div className="sm:w-1/2 w-full"></div>
                <div className="sm:w-1/2 w-full flex flex-col gap-8 px-1 sm:px-8 lg:px-10 xl:px-12">
                    <h1 className="text-start text-4xl sm:text-4xl lg:text-5xl font-bold">Objective</h1>
                    <p>Good Manufacturing Practice (GMP) is a quality assurance system widely used in the pharmaceutical manufacturing industry around the world. GMP ensures that pharmaceutical manufacturers can continuously and stably manufacture high-quality pharmaceuticals to meet the requirements of safety and quality standards through hardware and software guidelines for raw materials, plant, equipment, sanitation, personnel training and quality management. Imada has since adopted with these standard specifications for each of the production process, which must comply with the requirements of the scope of its regulatory standards, including sanitation, factory facilities, production control, quality control, staff training, document management and file records, etc. ,in order to provide highest quality products to the general public as the goal. From sourcing of raw materials , production to packaging which are all with a prudent and careful operation code of procedure. Luen Wah (HK) Medicine Limited to be sure to achieve the company’s promises: Safety, Efficacy and Highest Quality.</p>
                </div>

            </div>
        </div>
    )
};

export default Objective;