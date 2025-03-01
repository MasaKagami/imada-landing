import Footer from "@/component/footer/footer";
import Navbar from "@/component/navbar/navbar";
import Trademark from "./trademark";
import Agencies from "./agencies";
import Objective from "./objective";
import { JSX } from "react";

const quality = [
    { id: 1, name: "Select", desc:"Perform research, data analysis and carefully evaluate to define its reliability, practicality, and safety standards."},
    { id: 2, name: "Source", desc:"Survey for potential resources and quality assessments, complete integrated plants and ensure the highest quality of raw materials through chemical testing."},
    { id: 3, name: "Standardization", desc:"Require specific important marks in each production process, strictly standardization development and professional production methods to ensure product consistency and effectiveness."},
    { id: 4, name: "Structure", desc:"Establish the structural integrity of each production process, and to strengthen research of each program."},
    { id: 5, name: "Safety", desc:"According to existing research results, do standard safety evaluation for drug testing, and other safety testing against chemical toxins, heavy metals and pesticides."},
    { id: 6, name: "Proofs", desc:"Implement and comply with GMP guidelines for production quality management standards, meets with regulatory requirements to ensure product quality, and requires further IMADA product development and research projects when needed."}
]

const qualityIcons: { [key: string]: JSX.Element } = {
    Select: (
        <svg xmlns="http://www.w3.org/2000/svg" height="48px" viewBox="0 -960 960 960" width="48px" fill="oklch(0.577 0.245 27.325)" className="border-2 border-red-600 rounded-full p-1"><path d="M382-240 154-468l57-57 171 171 367-367 57 57-424 424Z"/></svg>

    ),
    Source: (
        <svg xmlns="http://www.w3.org/2000/svg" height="48px" viewBox="0 -960 960 960" width="48px" fill="oklch(0.577 0.245 27.325)" className="border-2 border-red-600 rounded-full p-1"><path d="M172-120q-41.78 0-59.39-39T124-230l248-280v-270h-52q-12.75 0-21.37-8.68-8.63-8.67-8.63-21.5 0-12.82 8.63-21.32 8.62-8.5 21.37-8.5h320q12.75 0 21.38 8.68 8.62 8.67 8.62 21.5 0 12.82-8.62 21.32-8.63 8.5-21.38 8.5h-52v270l248 280q29 32 11.39 71T788-120H172Zm70-90h476L558-395H402L242-210Zm-82 30h640L528-488v-292h-96v292L160-180Zm320-300Z"/></svg>

    ),
    Standardization: (
        <svg xmlns="http://www.w3.org/2000/svg" height="48px" viewBox="0 -960 960 960" width="48px" fill="oklch(0.577 0.245 27.325)" className="border-2 border-red-600 rounded-full p-2"><path d="M160-120q-33 0-56.5-23.5T80-200v-560q0-33 23.5-56.5T160-840h640q33 0 56.5 23.5T880-760v560q0 33-23.5 56.5T800-120H160Zm0-80h640v-560H160v560Zm40-80h200v-80H200v80Zm382-80 198-198-57-57-141 142-57-57-56 57 113 113Zm-382-80h200v-80H200v80Zm0-160h200v-80H200v80Zm-40 400v-560 560Z"/></svg>
    ),
    Structure: (
        <svg xmlns="http://www.w3.org/2000/svg" height="48px" viewBox="0 -960 960 960" width="48px" fill="oklch(0.577 0.245 27.325)" className="border-2 border-red-600 rounded-full p-1"><path d="m388-80-20-126q-19-7-40-19t-37-25l-118 54-93-164 108-79q-2-9-2.5-20.5T185-480q0-9 .5-20.5T188-521L80-600l93-164 118 54q16-13 37-25t40-18l20-127h184l20 126q19 7 40.5 18.5T669-710l118-54 93 164-108 77q2 10 2.5 21.5t.5 21.5q0 10-.5 21t-2.5 21l108 78-93 164-118-54q-16 13-36.5 25.5T592-206L572-80H388Zm48-60h88l14-112q33-8 62.5-25t53.5-41l106 46 40-72-94-69q4-17 6.5-33.5T715-480q0-17-2-33.5t-7-33.5l94-69-40-72-106 46q-23-26-52-43.5T538-708l-14-112h-88l-14 112q-34 7-63.5 24T306-642l-106-46-40 72 94 69q-4 17-6.5 33.5T245-480q0 17 2.5 33.5T254-413l-94 69 40 72 106-46q24 24 53.5 41t62.5 25l14 112Zm44-210q54 0 92-38t38-92q0-54-38-92t-92-38q-54 0-92 38t-38 92q0 54 38 92t92 38Zm0-130Z"/></svg>
    ),
    Safety: (
        <svg xmlns="http://www.w3.org/2000/svg" height="48px" viewBox="0 -960 960 960" width="48px" fill="oklch(0.577 0.245 27.325)" className="border-2 border-red-600 rounded-full p-1"><path d="M440-360h80v-100h100v-80H520v-100h-80v100H340v80h100v100Zm40 279q-140-35-230-162.5T160-523v-238l320-120 320 120v238q0 152-90 279.5T480-81Zm0-62q115-38 187.5-143.5T740-523v-196l-260-98-260 98v196q0 131 72.5 236.5T480-143Zm0-337Z"/></svg>
    ),
    Proofs: (
        <svg xmlns="http://www.w3.org/2000/svg" height="48px" viewBox="0 -960 960 960" width="48px" fill="oklch(0.577 0.245 27.325)" className="border-2 border-red-600 rounded-full p-1"><path d="M563-80 404-239l42-42 117 117 240-240 42 42L563-80ZM120-312l200-527h66l200 527h-67l-54-142H238l-54 142h-64Zm137-200h189l-92-254h-5l-92 254Z"/></svg>
    ),
};

const About = () => {
    return(
        <div className="w-screen min-h-screen">
            <Navbar/>
            <main className="w-full mt-10 m-auto flex flex-col items-center">
                <h1 className="text-6xl font-bold pt-10 pb-20">About Us</h1>
                <Trademark/>
                <Agencies/>
                <Objective/>
                <div className="w-full bg-gray-100">
                    <div className="max-w-[90%] sm:max-w-[80%] mt-10 mb-20 m-auto flex flex-col items-center gap-10">
                        <h1 className="text-3xl font-bold">Quality Assurance</h1>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-4">
                            {quality.map((qual) => (
                                <div key={qual.id} className="flex p-4 gap-4 bg-white items-center">
                                    {/* <Image src={qual.image} alt={qual.name} width={300} height={0} style={{height:"auto"}}/> */}
                                    <div className="flex flex-col">
                                        <p className="font-semibold text-xl">{qual.id}. {qual.name}</p>
                                        <p className="font-normal">{qual.desc}</p>                                        
                                    </div>
                                    <div>
                                        {qualityIcons[qual.name]}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </main>
            <Footer/>
        </div>
    );
}

export default About;