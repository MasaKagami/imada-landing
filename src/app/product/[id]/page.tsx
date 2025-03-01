"use client";

import { useParams } from "next/navigation";
import Image from "next/image";
import Navbar from "@/component/navbar/navbar";
import Footer from "@/component/footer/footer";
import { useEffect, useState } from "react";
import Link from "next/link";
import Carousel from "@/component/product-page/carousel";

type Product = {
    id: number;
    name: string;
    image: string;
    usage: string;
    function: string;
    info: string;
    ingredients: string;
    notes: string;
    capacity: string;
    url: string;
}

const products = [
    { id: 1, name: "Imada Seasons Safe Oil", image: "/imada-1.webp", 
        usage: "For fractures and injuries and external pain, rub the oil on the affected area will bring immediate relief. For burns and cuts, continuous bleeding, quickly apply cotton wool soaked with this oil to cover the injured part. It will insatnatly stop bleeding and inflamation.", 
        function: "Headache, Stomach-Ache, Mental Tiredness, Sun-Stroke, Sea-Sickness, Swelling Limbs, Rheumatism, Spasm, Colds, Mosquito Bites, Flea Bites, Measles etc.", 
        info:"This medicated oil is prepared from precious Chinese herbs and is processed under traditional method. Its powerful medicinal ingredients provide efficient treatment for many diseases with remarkable results.", 
        ingredients: "Menthol, Camphora, Clove Leaf Oil, Cinnamon Leaf Oil, Cinnamic Aldehyde, Radix Angelicae Sinensis, Herba Patchouli, Radix Glycyrrhizae, Sanguis Draconis, Peppermint Oil. Most ingredients are natural substances and in line with international standards.", 
        notes: "For External Use Only. Not to be Taken. Pregnant women and infants should avoid using this product. Use with caution on damaged or allergic skin.", 
        capacity :"2ml/12ml/25ml",
        url : "https://www.watsons.com.hk/en/imada-red-flower-oil-50ml/p/BP_807119"
    },
    { id: 2, name: "Imada Seasons Safe Oil", image: "/imada-2.webp", 
        usage: "For fractures and injuries and external pain, rub the oil on the affected area will bring immediate relief. For burns and cuts, continuous bleeding, quickly apply cotton wool soaked with this oil to cover the injured part. It will insatnatly stop bleeding and inflamation.", 
        function: "Headache, Stomach-Ache, Mental Tiredness, Sun-Stroke, Sea-Sickness, Swelling Limbs, Rheumatism, Spasm, Colds, Mosquito Bites, Flea Bites, Measles etc.", 
        info:"This medicated oil is prepared from precious Chinese herbs and is processed under traditional method. Its powerful medicinal ingredients provide efficient treatment for many diseases with remarkable results.", 
        ingredients: "Menthol, Camphora, Clove Leaf Oil, Cinnamon Leaf Oil, Cinnamic Aldehyde, Radix Angelicae Sinensis, Herba Patchouli, Radix Glycyrrhizae, Sanguis Draconis, Peppermint Oil. Most ingredients are natural substances and in line with international standards.", 
        notes: "For External Use Only. Not to be Taken. Pregnant women and infants should avoid using this product. Use with caution on damaged or allergic skin.", 
        capacity :"3g/20g",
        url : "https://www.watsons.com.hk/en/imada-red-flower-oil-50ml/p/BP_807119"
    },
    { id: 3, name: "Imada Red Flower Oil", image: "/imada-3.webp", 
        usage: "Apply appropriate amount on the affected area.", 
        function: "Reduce inflammation and pain. Improve circulation and fend off coldness. Reduce swelling and pain. Reduce muscle pain and joint pain. Temporarily relieves pain caused by bruise and impact injury.", 
        info:"Reduce inflammation and pain. Improve circulation and fend off coldness. Reduce swelling and pain. Reduce muscle pain and joint pain. Temporarily relieves pain caused by bruise and impact injury.", 
        ingredients: "Methyl Salicylate, Cinnamon Leaf Oil, Sanguis Draconis, Flos Carthami. Most ingredients are natural substances and in line with international standards.", 
        notes: "For External Use Only. Not to be Taken. Children suffering from Influenza, Chickenpox, or fever should avoid using products containing methyl salicylate and if persons allergic to salicylic acid should consult your doctor before using thie product. Pregnant women and infants should avoid using this product. Use with caution on damaged or allergic skin.", 
        capacity :"12ml/25ml/50ml/100ml",
        url : "https://www.watsons.com.hk/en/imada-red-flower-oil-50ml/p/BP_807119"
    },
    { id: 4, name: "Imada Hotdrug Oil", image: "/imada-4.webp", 
        usage: "Apply Imada Hotdrug Oil to the affected area. Rub or massage or use finger pressure on the affected area to enhance blood circulation for 10-25 minutes. Repeat applcation as needed.", 
        function: "To dissipate bruise, to promote blood circulation, to relax and relieve stiffness, to act as an analgesic. Temporary relieft of minor aches and pains associated with sprains, stiff joints, bruises, headache, lumbago, contusion and sore muscles.", 
        info: "Imada Hotdrug Oil is a comprehensive of Chinese herbs and natural essences specially for the relief of all kinds of muscle aches and pains caused by fatigue or physical exercise.", 
        ingredients: "Oil of Clove, Oil of Citronellal, Camphor, Menthol Crystals, Eucalyptus Oil, Oil of Turpentine, Oil of White, Menthyl Salicylate. Most ingredients are natural substances and in line with international standards.", 
        notes: "For External Use Only. Not to be Taken. Pregnant women and infants should avoid using this product. Use with caution on damaged or allergic skin.", 
        capacity :"20ml/40ml",
        url : "https://www.watsons.com.hk/en/imada-red-flower-oil-50ml/p/BP_807119"
    },
    { id: 5, name: "Imada Sze Chi Healing Oil", image: "/imada-5.webp", 
        usage: "For external use only. Rub on or wet with a cotton pad and then apply to the affected part.", 
        function: "It gives muscle relaxing, blood activating, bruise dispelling and analgesic effects. It is indicated for joint and bone pain, acute sprain, contusion, muscular and rheumatic pain, and pain around the hepatic area.", 
        info: "This oil out of trauma emergency, home to visit relatives, boat and car back and forth, sports, hiking, suburban walking, hope to have no trouble, can be safe.", 
        ingredients: "Camphor, Eucalyptus Oil, Oil of Citronellal, Tea oil, Menthol. Most ingredients are natural substances and in line with international standards.", 
        notes: "For External Use Only. Not to be Taken. Avoid touching eyes.", 
        capacity :"25ml",
        url : "https://www.watsons.com.hk/en/imada-red-flower-oil-50ml/p/BP_807119"
    },
    { id: 6, name: "Imada Gold Dragon Oil", image: "/imada-6.webp", 
        usage: "Headache, Stomach-Ache, Mental Tiredness, Sea-Sickness, Drunkenness, Swelling Limbs, Rheumatism, Spasm, Colds, Mosquito Bites, Flea Bites, Measles, Burns & Scald.", 
        function: "Headache, Stomach-Ache, Mental Tiredness, Sun-Stroke, Sea-Sickness, Swelling Limbs, Rheumatism, Spasm, Colds, Mosquito Bites, Flea Bites, Measles etc.", 
        info: "This embrocation is prepared by the pharmaceutical processes by combining different kinds of plant extracts from different parts of the world. It is pure in colour with pleasant smell, and is entirely free from drastic substances. It does not grease clothes and at the same time, is neutral to the skin so as to produce osmotic effect on the cells to promote the regularity of blood circulation. It is recuperative to pains and preventive against epidemics and contagious diseases. It is the first aid to all emergencies and is suited for all external ailments without any side effect.", 
        ingredients: "Methyl Salicyate, Eucalyptus Oil, Menthol Crystals, Peppermint, Camphor and Essential Oil. Most ingredients are natural substances and in line with international standards.", 
        notes: "For External Use Only. Not to be Taken. Children suffering from Influenza, Chickenpox, or fever should avoid using products containing methyl salicylate and if persons allergic to salicylic acid should consult your doctor before using thie product. Pregnant women and infants should avoid using this product. Use with caution on damaged or allergic skin.", 
        capacity :"2ml/5ml/10ml/20ml",
        url : "https://www.watsons.com.hk/en/imada-red-flower-oil-50ml/p/BP_807119"
    },
    { id: 7, name: "Snake Porous Capsicum Plaster", image: "/imada-7.webp", 
        usage: "Cut plaster into the size as needed. Apply tightly on clean and dry affected area. Each application can last for 2 to 3 days. Re-apply a new plaster on the same area if is needed.", 
        function: "Lambago, Backache, Muscle Fatigue, Bruises, Sprain.", 
        info:"Snake Porous Capsicum Plaster is designed with holes on the back of the cloth to provide excellent penetrating effect after application. It stickes on body for good ventilation to prevent the so-called dermatitis. It is a comfortable remedy for all kinds of body aches.", 
        ingredients: "Capsicum, Natural Resin, Zinc Oxide, White Wax, Soybean Oil, Beeswax. Most ingredients are natural substances and in line with international standards.", 
        notes: "For external use only. Please do not apply plaster on wounds or damaged allergic skin. Pregnant women and children, please use plaster with cautions. If you have sensitive skin, consult a doctore before use.", 
        capacity :"5pcs/box  24pcs/box",
        url : "https://www.watsons.com.hk/en/imada-red-flower-oil-50ml/p/BP_807119"
    },
];

export default function ProductPage() {
    const params = useParams();
    const [product, setProduct] = useState<Product | null>(null); // Initially null to prevent hydration issues

    useEffect(() => {
        if (params.id) {
          const foundProduct = products.find((p) => p.id.toString() === params.id) || null;
          setProduct(foundProduct);
        }
      }, [params.id]);
  
    if (!product) return <p className="text-center mt-10">Loading product...</p>; // Prevents hydration mismatch
  
    return (
        <div className="w-screen min-h-screen">
            <Navbar/>
            <main className="w-full max-w-[90%] sm:max-w-[80%] mt-10 mb-20 m-auto flex flex-col items-center ">
                <div className="flex sm:flex-row flex-col justify-center w-full mb-6">
                    <Image src={product.image} alt={product.name} width={500} height={500} className=""/>
                    <div className="flex flex-col w-full sm:w-1/2 gap-8">
                        <div className="flex flex-col gap-2">
                            <h1 className="text-4xl font-bold">{product.name}</h1>
                            <p className="text-sm text-gray-700">{product.capacity}</p>
                            <h1 className="text-lg font-semibold">Function:</h1>
                            <p className="text-sm font-normal">{product.usage}</p>
                            <h1 className="text-lg font-semibold">Notes:</h1>
                            <h1 className="text-sm font-normal">{product.notes}</h1>
                        </div>
                        <Link href={product.url} target="_blank" rel="noopener noreferrer">
                            <button className="bg-red-600 text-white cursor-pointer text-center rounded-lg py-2 px-4 font-medium hover:bg-red-700 transition duration-100">
                                <p>Check Product</p>
                            </button>
                        </Link>
                    </div>
                </div>
                <div className="flex flex-col gap-3 border-t-2 border-b-2 pt-6 pb-6">
                    <h1 className="text-2xl font-bold">Product Details</h1>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-5">
                        <div className="flex flex-col gap-1">
                            <h1 className="font-semibold">Pharmacological Function</h1>
                            <p className="text-base">{product.function}</p>
                        </div>
                        <div className="flex flex-col gap-1">
                            <h1 className="font-semibold">Information</h1>
                            <p className="text-base">{product.info}</p>
                        </div>
                        <div className="flex flex-col gap-1">
                            <h1 className="font-semibold">Main Ingredients</h1>
                            <p className="text-base">{product.ingredients}</p>
                        </div>
                        <div className="flex flex-col gap-1">
                            <h1 className="font-semibold">Capacity</h1>
                            <p className="text-base">{product.capacity}</p>
                        </div>
                    </div>
                </div>
                {/* component to show other product */}
                <Carousel currentProductId={product.id} />

                
            </main>
            <Footer/>
        </div>
    );
  }