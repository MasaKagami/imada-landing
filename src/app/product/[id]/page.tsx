"use client";

import { useParams } from "next/navigation";
import Image from "next/image";
import Navbar from "@/component/navbar/navbar";
import Footer from "@/component/footer/footer";
import { JSX, useEffect, useState } from "react";
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
    conditions: string[];
}

const products = [
    { id: 1, name: "Imada Seasons Safe Oil", image: "/imada-1.webp", 
        usage: "For fractures and injuries and external pain, rub the oil on the affected area will bring immediate relief. For burns and cuts, continuous bleeding, quickly apply cotton wool soaked with this oil to cover the injured part. It will insatnatly stop bleeding and inflammation.", 
        function: "Headache, Stomach-Ache, Mental Tiredness, Sun-Stroke, Sea-Sickness, Swelling Limbs, Rheumatism, Spasm, Colds, Mosquito Bites, Flea Bites, Measles etc.", 
        info:"This medicated oil is prepared from precious Chinese herbs and is processed under traditional method. Its powerful medicinal ingredients provide efficient treatment for many diseases with remarkable results.", 
        ingredients: "Menthol, Camphora, Clove Leaf Oil, Cinnamon Leaf Oil, Cinnamic Aldehyde, Radix Angelicae Sinensis, Herba Patchouli, Radix Glycyrrhizae, Sanguis Draconis, Peppermint Oil. Most ingredients are natural substances and in line with international standards.", 
        notes: "For External Use Only. Not to be Taken. Pregnant women and infants should avoid using this product. Use with caution on damaged or allergic skin.", 
        capacity :"2ml/12ml/25ml",
        url : "https://www.watsons.com.hk/en/imada-red-flower-oil-50ml/p/BP_807119",
        conditions: ["inflammation", "blood_circulation", "back_pain"]
    },
    { id: 2, name: "Imada Seasons Safe Balm", image: "/imada-2.webp", 
        usage: "For fractures and injuries and external pain, rub the oil on the affected area will bring immediate relief. For burns and cuts, continuous bleeding, quickly apply cotton wool soaked with this oil to cover the injured part. It will insatnatly stop bleeding and inflammation.", 
        function: "Headache, Stomach-Ache, Mental Tiredness, Sun-Stroke, Sea-Sickness, Swelling Limbs, Rheumatism, Spasm, Colds, Mosquito Bites, Flea Bites, Measles etc.", 
        info:"This medicated oil is prepared from precious Chinese herbs and is processed under traditional method. Its powerful medicinal ingredients provide efficient treatment for many diseases with remarkable results.", 
        ingredients: "Menthol, Camphora, Clove Leaf Oil, Cinnamon Leaf Oil, Cinnamic Aldehyde, Radix Angelicae Sinensis, Herba Patchouli, Radix Glycyrrhizae, Sanguis Draconis, Peppermint Oil. Most ingredients are natural substances and in line with international standards.", 
        notes: "For External Use Only. Not to be Taken. Pregnant women and infants should avoid using this product. Use with caution on damaged or allergic skin.", 
        capacity :"3g/20g",
        url : "https://www.watsons.com.hk/en/imada-red-flower-oil-50ml/p/BP_807119",
        conditions: ["inflammation", "blood_circulation", "pain"]
    },
    { id: 3, name: "Imada Red Flower Oil", image: "/imada-3.webp", 
        usage: "Apply appropriate amount on the affected area.", 
        function: "Reduce inflammation and pain. Improve circulation and fend off coldness. Reduce swelling and pain. Reduce muscle pain and joint pain. Temporarily relieves pain caused by bruise and impact injury.", 
        info:"Reduce inflammation and pain. Improve circulation and fend off coldness. Reduce swelling and pain. Reduce muscle pain and joint pain. Temporarily relieves pain caused by bruise and impact injury.", 
        ingredients: "Methyl Salicylate, Cinnamon Leaf Oil, Sanguis Draconis, Flos Carthami. Most ingredients are natural substances and in line with international standards.", 
        notes: "For External Use Only. Not to be Taken. Children suffering from Influenza, Chickenpox, or fever should avoid using products containing methyl salicylate and if persons allergic to salicylic acid should consult your doctor before using thie product. Pregnant women and infants should avoid using this product. Use with caution on damaged or allergic skin.", 
        capacity :"12ml/25ml/50ml/100ml",
        url : "https://www.watsons.com.hk/en/imada-red-flower-oil-50ml/p/BP_807119",
        conditions: ["inflammation", "blood_circulation", "pain"]
    },
    { id: 4, name: "Imada Hotdrug Oil", image: "/imada-4.webp", 
        usage: "Apply Imada Hotdrug Oil to the affected area. Rub or massage or use finger pressure on the affected area to enhance blood circulation for 10-25 minutes. Repeat applcation as needed.", 
        function: "To dissipate bruise, to promote blood circulation, to relax and relieve stiffness, to act as an analgesic. Temporary relieft of minor aches and pains associated with sprains, stiff joints, bruises, headache, lumbago, contusion and sore muscles.", 
        info: "Imada Hotdrug Oil is a comprehensive of Chinese herbs and natural essences specially for the relief of all kinds of muscle aches and pains caused by fatigue or physical exercise.", 
        ingredients: "Oil of Clove, Oil of Citronellal, Camphor, Menthol Crystals, Eucalyptus Oil, Oil of Turpentine, Oil of White, Menthyl Salicylate. Most ingredients are natural substances and in line with international standards.", 
        notes: "For External Use Only. Not to be Taken. Pregnant women and infants should avoid using this product. Use with caution on damaged or allergic skin.", 
        capacity :"20ml/40ml",
        url : "https://www.watsons.com.hk/en/imada-red-flower-oil-50ml/p/BP_807119",
        conditions: ["mind", "blood_circulation", "joint"]
    },
    { id: 5, name: "Imada Sze Chi Healing Oil", image: "/imada-5.webp", 
        usage: "For external use only. Rub on or wet with a cotton pad and then apply to the affected part.", 
        function: "It gives muscle relaxing, blood activating, bruise dispelling and analgesic effects. It is indicated for joint and bone pain, acute sprain, contusion, muscular and rheumatic pain, and pain around the hepatic area.", 
        info: "This oil out of trauma emergency, home to visit relatives, boat and car back and forth, sports, hiking, suburban walking, hope to have no trouble, can be safe.", 
        ingredients: "Camphor, Eucalyptus Oil, Oil of Citronellal, Tea oil, Menthol. Most ingredients are natural substances and in line with international standards.", 
        notes: "For External Use Only. Not to be Taken. Avoid touching eyes.", 
        capacity :"25ml",
        url : "https://www.watsons.com.hk/en/imada-red-flower-oil-50ml/p/BP_807119",
        conditions: ["pain", "bacteria"]
    },
    { id: 6, name: "Imada Gold Dragon Oil", image: "/imada-6.webp", 
        usage: "Headache, Stomach-Ache, Mental Tiredness, Sea-Sickness, Drunkenness, Swelling Limbs, Rheumatism, Spasm, Colds, Mosquito Bites, Flea Bites, Measles, Burns & Scald.", 
        function: "Headache, Stomach-Ache, Mental Tiredness, Sun-Stroke, Sea-Sickness, Swelling Limbs, Rheumatism, Spasm, Colds, Mosquito Bites, Flea Bites, Measles etc.", 
        info: "This embrocation is prepared by the pharmaceutical processes by combining different kinds of plant extracts from different parts of the world. It is pure in colour with pleasant smell, and is entirely free from drastic substances. It does not grease clothes and at the same time, is neutral to the skin so as to produce osmotic effect on the cells to promote the regularity of blood circulation. It is recuperative to pains and preventive against epidemics and contagious diseases. It is the first aid to all emergencies and is suited for all external ailments without any side effect.", 
        ingredients: "Methyl Salicyate, Eucalyptus Oil, Menthol Crystals, Peppermint, Camphor and Essential Oil. Most ingredients are natural substances and in line with international standards.", 
        notes: "For External Use Only. Not to be Taken. Children suffering from Influenza, Chickenpox, or fever should avoid using products containing methyl salicylate and if persons allergic to salicylic acid should consult your doctor before using thie product. Pregnant women and infants should avoid using this product. Use with caution on damaged or allergic skin.", 
        capacity :"2ml/5ml/10ml/20ml",
        url : "https://www.watsons.com.hk/en/imada-red-flower-oil-50ml/p/BP_807119",
        conditions: ["mind", "inflammation"]
    },
    { id: 7, name: "Snake Porous Capsicum Plaster", image: "/imada-7.webp", 
        usage: "Cut plaster into the size as needed. Apply tightly on clean and dry affected area. Each application can last for 2 to 3 days. Re-apply a new plaster on the same area if is needed.", 
        function: "Lambago, Backache, Muscle Fatigue, Bruises, Sprain.", 
        info:"Snake Porous Capsicum Plaster is designed with holes on the back of the cloth to provide excellent penetrating effect after application. It stickes on body for good ventilation to prevent the so-called dermatitis. It is a comfortable remedy for all kinds of body aches.", 
        ingredients: "Capsicum, Natural Resin, Zinc Oxide, White Wax, Soybean Oil, Beeswax. Most ingredients are natural substances and in line with international standards.", 
        notes: "For external use only. Please do not apply plaster on wounds or damaged allergic skin. Pregnant women and children, please use plaster with cautions. If you have sensitive skin, consult a doctore before use.", 
        capacity :"5pcs/box  24pcs/box",
        url : "https://www.watsons.com.hk/en/imada-red-flower-oil-50ml/p/BP_807119",
        conditions: ["back_pain", "pain"]
    },
];

const conditionIcons: { [key: string]: JSX.Element } = {
    inflammation: (
        <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" className="border-2 border-red-600 rounded-full">
            <path d="M19.6 9.67538V6H21.6V9.75332L21.5973 9.78996C21.5747 10.0972 21.5057 10.4446 21.3497 10.8105C21.8368 10.9856 21.8692 11.5598 21.8851 11.8424C21.8877 11.888 21.8898 11.926 21.8934 11.9535C22.6091 12.2868 23.02 13.1267 22.8269 13.936C22.6337 14.7454 21.903 15.2446 21.1338 15.1341C20.8997 15.4692 20.6188 15.7686 20.2974 16.0207C20.4018 16.8336 19.9307 17.6061 19.1659 17.811C18.4011 18.016 17.6069 17.5825 17.2909 16.8263C16.8866 16.7687 16.4936 16.6498 16.1233 16.4767C15.5124 16.9569 14.63 16.89 14.058 16.2856C13.6374 15.8412 13.4915 15.219 13.624 14.6637C12.5569 14.8924 11.2171 15.3769 10.1198 16.2682C8.93706 17.2289 8 18.685 8 20.9625V32.0556H6V20.9625C6 18.0328 7.24865 16.0237 8.8588 14.7158C10.4317 13.4382 12.312 12.8542 13.6291 12.6258C16.5575 12.118 18.0572 11.4226 18.814 10.8407C19.4819 10.3272 19.5787 9.8996 19.6 9.67538Z" fill="oklch(0.577 0.245 27.325)"/>
            <path d="M29.3716 6V9.98035C29.4158 10.2573 29.5623 10.6689 30.1414 11.1215C30.7986 11.6351 32.0427 12.222 34.371 12.6258C35.6881 12.8542 37.5685 13.4382 39.1414 14.7158C40.7515 16.0237 42.0002 18.0328 42.0002 20.9625V32.0556H40.0002V20.9625C40.0002 18.685 39.0631 17.2289 37.8804 16.2682C36.6604 15.2772 35.1408 14.7892 34.0293 14.5964C31.5338 14.1636 29.9285 13.4935 28.9098 12.6974C27.8518 11.8705 27.4749 10.9444 27.3792 10.1728L27.3716 10.1115V6H29.3716Z" fill="oklch(0.577 0.245 27.325)"/>
            <path d="M34.6859 17.3333C33.2933 17.3333 32.2002 18.455 32.2002 19.8294V20.5974C31.4752 19.9635 30.314 19.803 29.3741 20.2664C28.3593 20.7667 27.9531 21.8215 28.3771 22.7239C28.0123 23.1191 27.7121 23.5597 27.4899 24.0342C26.3636 24.1726 25.498 24.9999 25.498 26.0001C25.498 27.0002 26.3636 27.8275 27.4899 27.9659C27.7121 28.4404 28.0123 28.8809 28.377 29.2761C27.9531 30.1786 28.3594 31.2333 29.3741 31.7336C30.314 32.197 31.4752 32.0365 32.2002 31.4025V41.9999H34.2002V19.8294C34.2002 19.5413 34.4161 19.3333 34.6859 19.3333C34.9197 19.3333 35.0717 19.3772 35.1683 19.4214C35.2652 19.4657 35.3326 19.5223 35.3821 19.5797C35.4341 19.6401 35.4688 19.7046 35.4892 19.757C35.4942 19.7701 35.4978 19.7807 35.5002 19.7886V32.0555H37.5002V19.7372C37.5002 19.3334 37.3117 18.7549 36.8968 18.2737C36.4348 17.7378 35.7043 17.3333 34.6859 17.3333Z" fill="oklch(0.577 0.245 27.325)"/>
            <path d="M11.1033 18.2737C11.5654 17.7378 12.2959 17.3333 13.3143 17.3333C14.9495 17.3333 16 18.7109 16 20.15V32.22C16.3353 31.97 16.8155 31.9221 17.2109 32.1332C17.6793 32.3833 17.8668 32.9107 17.6711 33.3619C17.8395 33.5595 17.978 33.7799 18.0806 34.0171C18.6005 34.0863 19 34.5 19 35C19 35.5001 18.6005 35.9138 18.0806 35.983C17.978 36.2202 17.8395 36.4405 17.6711 36.6381C17.8668 37.0893 17.6793 37.6166 17.2109 37.8668C16.8155 38.0779 16.3353 38.03 16 37.78V41.9999H14V20.15C14 19.6142 13.6539 19.3333 13.3143 19.3333C13.0805 19.3333 12.9285 19.3772 12.8319 19.4214C12.735 19.4657 12.6676 19.5223 12.6181 19.5797C12.566 19.6401 12.5313 19.7046 12.511 19.757C12.506 19.7701 12.5024 19.7807 12.5 19.7886V32.0555H10.5V19.7372C10.5 19.3334 10.6885 18.7549 11.1033 18.2737Z" fill="oklch(0.577 0.245 27.325)"/>
            <path d="M24.9998 15C25.5521 15 25.9998 14.5523 25.9998 14C25.9998 13.4477 25.5521 13 24.9998 13C24.4475 13 23.9998 13.4477 23.9998 14C23.9998 14.5523 24.4475 15 24.9998 15Z" fill="oklch(0.577 0.245 27.325)"/>
            <path d="M22.9998 18C23.5521 18 23.9998 17.5523 23.9998 17C23.9998 16.4477 23.5521 16 22.9998 16C22.4475 16 21.9998 16.4477 21.9998 17C21.9998 17.5523 22.4475 18 22.9998 18Z" fill="oklch(0.577 0.245 27.325)"/>
            <path d="M20.5 32.2251C20.5 32.7774 20.0523 33.2251 19.5 33.2251C18.9477 33.2251 18.5 32.7774 18.5 32.2251C18.5 31.6728 18.9477 31.2251 19.5 31.2251C20.0523 31.2251 20.5 31.6728 20.5 32.2251Z" fill="oklch(0.577 0.245 27.325)"/>
            <path d="M21 36C21.5523 36 22 35.5523 22 35C22 34.4477 21.5523 34 21 34C20.4477 34 20 34.4477 20 35C20 35.5523 20.4477 36 21 36Z" fill="oklch(0.577 0.245 27.325)"/>
            <path d="M27.858 32.1786C28.401 32.2796 28.7593 32.8016 28.6584 33.3446C28.5574 33.8876 28.0354 34.2459 27.4924 34.1449C26.9494 34.044 26.5911 33.522 26.6921 32.979C26.793 32.436 27.315 32.0777 27.858 32.1786Z" fill="oklch(0.577 0.245 27.325)"/>
            <path d="M26.3487 29.3552C26.8917 29.4561 27.25 29.9781 27.1491 30.5211C27.0481 31.0641 26.5261 31.4224 25.9832 31.3215C25.4402 31.2205 25.0818 30.6985 25.1828 30.1555C25.2837 29.6125 25.8057 29.2542 26.3487 29.3552Z" fill="oklch(0.577 0.245 27.325)"/>
            <path d="M26 21C26.5523 21 27 21.4477 27 22C27 22.5523 26.5523 23 26 23C25.4477 23 25 22.5523 25 22C25 21.4477 25.4477 21 26 21Z" fill="oklch(0.577 0.245 27.325)"/>
        </svg>

    ),
    blood_circulation: (
        <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" className="border-2 border-red-600 rounded-full">
            <path fillRule="evenodd" clipRule="evenodd" d="M24 4L23.3098 4.66021L23.3061 4.6638L23.2973 4.67227L23.2648 4.70366C23.2367 4.73095 23.1956 4.7709 23.1426 4.82303C23.0366 4.92728 22.8826 5.08029 22.6874 5.27827C22.297 5.67417 21.7417 6.25029 21.0763 6.97632C19.7465 8.42723 17.9719 10.4826 16.1951 12.8995C12.6815 17.6788 9 24.0809 9 30.0801C9 37.845 15.796 44 24 44C32.204 44 39 37.845 39 30.0801C39 24.0809 35.3185 17.6788 31.8049 12.8995C30.0281 10.4826 28.2535 8.42723 26.9237 6.97632C26.2583 6.25029 25.703 5.67417 25.3126 5.27827C25.1174 5.08029 24.9634 4.92728 24.8574 4.82303C24.8044 4.7709 24.7634 4.73095 24.7352 4.70366L24.7027 4.67227L24.6939 4.6638L24.6902 4.66021L24 4ZM15.4649 31.3985C15.2943 30.8716 14.7301 30.5833 14.2049 30.7545C13.6796 30.9257 13.3922 31.4915 13.5628 32.0183C14.3133 34.3349 15.7757 36.3536 17.7404 37.7853C19.7052 39.217 22.0714 39.9882 24.5 39.9882C25.0523 39.9882 25.5 39.5391 25.5 38.9852C25.5 38.4313 25.0523 37.9822 24.5 37.9822C22.4938 37.9822 20.5391 37.3452 18.916 36.1625C17.293 34.9798 16.0849 33.3121 15.4649 31.3985Z" fill="oklch(0.577 0.245 27.325)"/>
        </svg>

    ),
    back_pain: (
        <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" className="border-2 border-red-600 rounded-full">
            <path d="M33 12C35.2091 12 37 10.2091 37 8C37 5.79086 35.2091 4 33 4C30.7908 4 29 5.79086 29 8C29 10.2091 30.7908 12 33 12Z" fill="oklch(0.577 0.245 27.325)"/>
            <path d="M11.4694 9.66171C10.9817 9.40248 10.3762 9.58766 10.117 10.0753C9.85777 10.563 10.043 11.1685 10.5306 11.4277L14.2449 13.4021L12.574 14.1017C12.2202 14.2498 11.9823 14.5872 11.9616 14.9702C11.9409 15.3532 12.1411 15.7143 12.4769 15.8996L17.4136 18.6243C17.8971 18.8912 18.5054 18.7155 18.7723 18.232C19.0392 17.7485 18.8635 17.1402 18.38 16.8733L15.2539 15.1479L16.9638 14.4321C17.3203 14.2828 17.5588 13.9416 17.5766 13.5557C17.5944 13.1697 17.3882 12.808 17.047 12.6266L11.4694 9.66171Z" fill="oklch(0.577 0.245 27.325)"/>
            <path d="M21.179 17.6861C22.7468 15.1192 25.3262 13.0933 29 13.0933C29.9157 13.0933 30.7144 13.7151 30.9389 14.6028L32.689 21.5215L36.7428 23.143C37.7683 23.5533 38.2672 24.7172 37.8569 25.7428C37.4467 26.7683 36.2828 27.2672 35.2572 26.857L30.2572 24.857C29.6627 24.6192 29.2181 24.1112 29.0611 23.4905L28.3045 20.4994C28.0765 21.0523 27.8522 21.6439 27.6378 22.2691C26.7441 24.8753 26.0743 27.9158 25.999 30.937C25.9997 30.9579 26 30.9789 26 31V42C26 43.1046 25.1046 44 24 44C22.8954 44 22 43.1046 22 42V32.219L21.9478 32.1524C21.6462 31.7659 21.2403 31.2237 20.8305 30.6073C20.4249 29.9974 19.9904 29.2774 19.6507 28.5394C19.3301 27.8428 19 26.9337 19 26C19 23.2998 19.6492 20.1907 21.179 17.6861Z" fill="oklch(0.577 0.245 27.325)"/>
            <path d="M32 30.8333C32 29.1765 33.3431 27.8333 35 27.8333C36.6568 27.8333 38 29.1765 38 30.8333V43C38 43.5523 37.5523 44 37 44C36.4477 44 36 43.5523 36 43V30.8333C36 30.2811 35.5523 29.8333 35 29.8333C34.4477 29.8333 34 30.2811 34 30.8333V31.0556C34 31.6078 33.5523 32.0556 33 32.0556C32.4477 32.0556 32 31.6078 32 31.0556V30.8333Z" fill="oklch(0.577 0.245 27.325)"/>
            <path d="M9.83169 19.9783C9.94247 19.4179 10.4551 19.051 10.9766 19.159L14.6432 19.9181C14.9946 19.9909 15.2755 20.2673 15.3723 20.6357C15.4691 21.004 15.3657 21.4033 15.1041 21.6721L14.3066 22.4913L16.2447 22.9955C16.7604 23.1297 17.069 23.6882 16.9338 24.2429C16.7987 24.7977 16.271 25.1387 15.7553 25.0045L12.1302 24.0614C11.7905 23.9731 11.526 23.6933 11.4394 23.3309C11.3527 22.9685 11.4577 22.5805 11.7134 22.3178L12.4374 21.5741L10.5754 21.1886C10.0539 21.0806 9.72091 20.5388 9.83169 19.9783Z" fill="oklch(0.577 0.245 27.325)"/>
        </svg>

    ),
    bacteria: (
        <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" className="border-2 border-red-600 rounded-full">
            <path fillRule="evenodd" clipRule="evenodd" d="M20.9525 10.4616C19.712 9.08283 17.9626 8.17095 16 8.02165V5H14V8.13723C11.902 8.54591 10.1197 9.83753 9.05552 11.6096L6.5 10.1342L5.5 11.8662L8.26322 13.4616C8.09162 14.0881 8 14.7476 8 15.4286C8 17.4437 8.24257 19.4021 8.7001 21.2763L5.74115 22.0691L6.25879 24.001L9.25381 23.1985C10.1227 25.8074 11.4173 28.2218 13.055 30.3593L10.2929 33.1214L11.7072 34.5356L14.3403 31.9025C15.8901 33.6166 17.6783 35.111 19.6525 36.3337L18.1339 38.9639L19.866 39.9639L21.3944 37.3166C24.0239 38.662 26.9279 39.5476 30 39.8671V43H32V39.9935C32.19 39.9978 32.3804 40 32.5714 40C34.8687 40 36.9225 38.9572 38.2851 37.3191L40.9641 38.8658L41.9641 37.1338L39.3465 35.6225C39.7663 34.6917 40 33.6589 40 32.5714C40 29.8398 38.5256 27.4525 36.3292 26.162L37.8661 23.5L36.134 22.5L34.4672 25.387C33.862 25.2277 33.2266 25.1429 32.5714 25.1429C30.2491 25.1429 28.1171 24.3279 26.4458 22.9685L28.7071 20.7072L27.2928 19.293L25.0316 21.5542C23.6721 19.8829 22.8571 17.7509 22.8571 15.4286C22.8571 14.2508 22.583 13.137 22.0951 12.1475L24.5354 9.70718L23.1212 8.29297L20.9525 10.4616ZM15 15C14.4477 15 14 15.4477 14 16C14 16.5523 14.4477 17 15 17C15.5523 17 16 16.5523 16 16C16 15.4477 15.5523 15 15 15ZM12 16C12 14.3431 13.3431 13 15 13C16.6569 13 18 14.3431 18 16C18 17.6569 16.6569 19 15 19C13.3431 19 12 17.6569 12 16ZM24 29C23.4477 29 23 29.4477 23 30C23 30.5523 23.4477 31 24 31C24.5523 31 25 30.5523 25 30C25 29.4477 24.5523 29 24 29ZM21 30C21 28.3431 22.3431 27 24 27C25.6569 27 27 28.3431 27 30C27 31.6569 25.6569 33 24 33C22.3431 33 21 31.6569 21 30ZM17 26C18.1046 26 19 25.1046 19 24C19 22.8954 18.1046 22 17 22C15.8954 22 15 22.8954 15 24C15 25.1046 15.8954 26 17 26ZM34 32C34 33.1046 33.1046 34 32 34C30.8954 34 30 33.1046 30 32C30 30.8954 30.8954 30 32 30C33.1046 30 34 30.8954 34 32Z" fill="oklch(0.577 0.245 27.325)"/>
        </svg>
    ),
    pain: (
        <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" className="border-2 border-red-600 rounded-full">
            <path fillRule="evenodd" clipRule="evenodd" d="M18.714 43.199C18.1641 43.1483 17.7593 42.6615 17.8099 42.1115L18.6125 33.3949L22.6575 35.5349L23.5881 29.9414C23.6788 29.3967 24.1939 29.0285 24.7387 29.1191C25.2835 29.2098 25.6516 29.7249 25.561 30.2697L24.175 38.6003L20.329 36.5657L19.8015 42.2949C19.7509 42.8448 19.264 43.2496 18.714 43.199Z" fill="oklch(0.577 0.245 27.325)"/>
            <path fillRule="evenodd" clipRule="evenodd" d="M4.70634 29.7526C4.43692 29.2705 4.60934 28.6613 5.09145 28.3918L13.0341 23.9532L13.5827 28.7103L19.0257 26.1708C19.5262 25.9372 20.1212 26.1537 20.3548 26.6542C20.5883 27.1546 20.3718 27.7497 19.8714 27.9832L11.9138 31.696L11.391 27.1626L6.06711 30.1377C5.585 30.4071 4.97576 30.2347 4.70634 29.7526Z" fill="oklch(0.577 0.245 27.325)"/>
            <path fillRule="evenodd" clipRule="evenodd" d="M9.35469 9.55184C9.64124 9.07971 10.2563 8.92926 10.7284 9.21581L18.6951 14.0511L14.7177 16.9543L19.7859 20.5615C20.2359 20.8817 20.341 21.5061 20.0208 21.956C19.7006 22.406 19.0762 22.5112 18.6262 22.1909L11.2973 16.9748L15.0929 14.2043L9.69072 10.9256C9.21859 10.639 9.06814 10.024 9.35469 9.55184Z" fill="oklch(0.577 0.245 27.325)"/>
            <path fillRule="evenodd" clipRule="evenodd" d="M31.2566 5.33763C31.8005 5.43354 32.1636 5.9522 32.0677 6.49609L30.5649 15.0183L26.7623 12.5846L25.3964 17.9879C25.261 18.5233 24.7173 18.8477 24.1818 18.7123C23.6464 18.577 23.322 18.0332 23.4574 17.4978L25.5033 9.40427L29.1163 11.7166L30.0981 6.14877C30.194 5.60488 30.7127 5.24172 31.2566 5.33763Z" fill="oklch(0.577 0.245 27.325)"/>
            <path fillRule="evenodd" clipRule="evenodd" d="M43.8543 19.3632C44.1199 19.8474 43.9427 20.4552 43.4585 20.7208L35.8435 24.8977L35.3596 20.3894L30.2625 22.7187C29.7602 22.9482 29.1669 22.7271 28.9374 22.2248C28.7078 21.7225 28.9289 21.1292 29.4312 20.8996L37.052 17.417L37.5119 21.7015L42.4966 18.9673C42.9808 18.7017 43.5887 18.8789 43.8543 19.3632Z" fill="oklch(0.577 0.245 27.325)"/>
            <path fillRule="evenodd" clipRule="evenodd" d="M38.6642 37.4889C38.3777 37.961 37.7627 38.1114 37.2905 37.8249L29.7722 33.2618L33.489 30.5489L28.8365 27.2376C28.3866 26.9174 28.2814 26.293 28.6016 25.8431C28.9219 25.3931 29.5463 25.288 29.9962 25.6082L36.9093 30.5284L33.3745 33.1086L38.3282 36.1152C38.8003 36.4017 38.9508 37.0167 38.6642 37.4889Z" fill="oklch(0.577 0.245 27.325)"/>
        </svg>
    ),
    mind: (
        <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" className="border-2 border-red-600 rounded-full">
            <path d="M13.3668 4.22607C13.7942 3.87635 14.4242 3.93935 14.774 4.36679L18.774 9.25568C19.0186 9.55473 19.0691 9.96798 18.9037 10.3171C18.7382 10.6663 18.3864 10.8889 18 10.8889H16.4128L17.7674 12.3101C18.1484 12.7099 18.1332 13.3429 17.7334 13.7239C17.3336 14.1049 16.7006 14.0897 16.3196 13.69L13.3544 10.5788C13.0784 10.2892 13.0015 9.86295 13.159 9.49517C13.3166 9.1274 13.6782 8.88892 14.0783 8.88892H15.8898L13.2261 5.63327C12.8763 5.20582 12.9393 4.5758 13.3668 4.22607Z" fill="oklch(0.577 0.245 27.325)"/>
            <path d="M24 23C26.2091 23 28 21.2092 28 19C28 16.7909 26.2091 15 24 15C21.7909 15 20 16.7909 20 19C20 21.2092 21.7909 23 24 23Z" fill="oklch(0.577 0.245 27.325)"/>
            <path fillRule="evenodd" clipRule="evenodd" d="M30 28.3487C30.3757 28.4267 30.7795 28.5095 31.1822 28.5892C31.9257 28.7365 32.7028 28.8812 33.3077 28.9671C33.5969 29.0082 33.9185 29.0466 34.1981 29.0539C34.3144 29.0569 34.5651 29.0603 34.841 29.003C34.9649 28.9773 35.2759 28.9049 35.602 28.6849C35.985 28.4265 36.5 27.8657 36.5 27C36.5 26.7734 36.4594 26.5824 36.4516 26.5456L36.4507 26.5414C36.4357 26.4689 36.4186 26.4005 36.4045 26.3467C36.3756 26.2366 36.3385 26.1095 36.2992 25.9795C36.2193 25.7155 36.1091 25.3713 35.9821 24.9839C35.727 24.2056 35.389 23.2065 35.0535 22.2256C34.7175 21.243 34.3817 20.2718 34.1301 19.5467C34.0043 19.1841 33.8994 18.8827 33.8259 18.6719L33.7102 18.3402C33.3457 17.2975 32.205 16.7477 31.1623 17.1122C30.1196 17.4767 29.5699 18.6177 29.9344 19.6604L29.9347 19.6614L30.0487 19.9881C30.1217 20.1975 30.226 20.4972 30.3512 20.858C30.6016 21.5799 30.9353 22.545 31.2687 23.5199C31.3932 23.8838 31.5172 24.2481 31.6367 24.601C31.0335 24.4794 30.442 24.3549 29.9593 24.2533L29.9291 24.2469C29.646 24.1873 29.3957 24.1347 29.2103 24.097C29.1187 24.0784 29.0319 24.0611 28.96 24.0479C28.9253 24.0415 28.8811 24.0337 28.8357 24.0268C28.8134 24.0234 28.7791 24.0184 28.7389 24.0138L28.7378 24.0137C28.7122 24.0108 28.6179 24 28.5 24C28.0228 24 27.653 24.1793 27.6222 24.1943L27.6203 24.1952C27.5132 24.2437 27.421 24.295 27.3699 24.3239C27.2927 24.3676 27.1924 24.4279 27.1098 24.4775L27.0432 24.5174C26.8278 24.646 26.5683 24.7963 26.2581 24.9437C25.6295 25.2425 24.8529 25.5 24 25.5C23.1468 25.5 22.3689 25.2424 21.7396 24.9435C21.4293 24.7961 21.1697 24.6459 20.9556 24.5178L20.8856 24.4758C20.8043 24.4269 20.7064 24.368 20.632 24.3258C20.5819 24.2973 20.4902 24.2461 20.3847 24.1978C20.3683 24.1896 19.9897 24 19.5 24C19.3772 24 19.2788 24.0117 19.2531 24.0148L19.2516 24.015C19.2106 24.0198 19.1758 24.0251 19.1533 24.0287C19.1076 24.0359 19.0633 24.0441 19.0287 24.0506C18.9571 24.0643 18.8703 24.082 18.7791 24.1012C18.6045 24.1378 18.371 24.1882 18.1071 24.2453L18.0621 24.2551C17.5859 24.358 16.9995 24.4847 16.3994 24.6083C16.5072 24.3047 16.6185 23.9927 16.7307 23.6795C17.0134 22.8906 17.3091 22.0729 17.5608 21.3771L17.5617 21.3745C17.8959 20.4507 18.1523 19.7419 18.1964 19.6021C18.5289 18.5488 17.9446 17.4253 16.8913 17.0928C15.838 16.7602 14.7145 17.3445 14.382 18.3979C14.3839 18.3919 14.3838 18.3921 14.3806 18.4013C14.3766 18.4129 14.3677 18.4389 14.3514 18.485C14.3269 18.5545 14.2933 18.6484 14.2513 18.7653C14.1675 18.9987 14.054 19.3124 13.9202 19.6823L13.8654 19.8337C13.6068 20.5483 13.2842 21.4397 12.9651 22.3306C12.6235 23.284 12.2824 24.2466 12.0257 24.9983C11.8979 25.3722 11.7864 25.7075 11.7052 25.9685C11.6652 26.0969 11.6267 26.2258 11.5964 26.3406C11.5815 26.3969 11.5634 26.4692 11.5476 26.5468L11.5468 26.551C11.5373 26.5975 11.5 26.7799 11.5 27C11.5 27.7596 11.9038 28.31 12.2889 28.6094C12.6124 28.8611 12.9326 28.9544 13.0736 28.9902C13.3725 29.066 13.6441 29.0674 13.7665 29.0664C14.0611 29.064 14.3945 29.026 14.6859 28.9856C15.2983 28.9009 16.0814 28.7536 16.8261 28.6035C17.226 28.5229 17.6267 28.4391 18 28.3597V32.2679C17.9017 32.3247 17.8078 32.3901 17.7196 32.4636L14.7196 34.9636C14.1659 35.425 13.9033 36.1487 14.0322 36.8578L15.0322 42.3578C15.2236 43.4104 16.2095 44.126 17.2696 43.9818C18.3297 43.8375 19.0886 42.8845 18.9917 41.819L18.5955 37.461L18.6707 37.4073C22.8823 36.601 25.2263 36.5959 29.3256 37.4048L29.4043 37.461L29.0081 41.819C28.9112 42.8845 29.6701 43.8375 30.7302 43.9818C31.7903 44.126 32.7762 43.4104 32.9676 42.3578L33.9676 36.8578C34.0965 36.1487 33.834 35.425 33.2802 34.9636L30.2802 32.4636C30.1921 32.3901 30.0983 32.3248 30 32.268V28.3487ZM34.3018 25.0552L34.2952 25.055C34.3121 25.0549 34.3154 25.0556 34.3018 25.0552Z" fill="oklch(0.577 0.245 27.325)"/>
            <path d="M33.226 4.36679C33.5758 3.93935 34.2058 3.87635 34.6332 4.22607C35.0607 4.5758 35.1237 5.20582 34.7739 5.63327L32.1102 8.88892H33.9217C34.3218 8.88892 34.6834 9.1274 34.841 9.49517C34.9985 9.86295 34.9216 10.2892 34.6456 10.5788L31.6804 13.69C31.2994 14.0897 30.6664 14.1049 30.2666 13.7239C29.8668 13.3429 29.8516 12.7099 30.2326 12.3101L31.5872 10.8889H30C29.6136 10.8889 29.2618 10.6663 29.0963 10.3171C28.9309 9.96798 28.9814 9.55473 29.226 9.25568L33.226 4.36679Z" fill="oklch(0.577 0.245 27.325)"/>
            <path d="M23.4874 4.21026C24.0173 3.99677 24.6046 4.22561 24.7992 4.72139L26.1671 8.20692C26.2982 8.54098 26.2202 8.92729 25.9646 9.20963C25.709 9.49197 25.3181 9.62364 24.95 9.55138L23.9998 9.36485L24.7478 11.1102C24.9576 11.5996 24.7028 12.181 24.1787 12.4087C23.6546 12.6364 23.0597 12.4242 22.85 11.9348L21.3499 8.43477C21.2066 8.1004 21.277 7.70694 21.532 7.41734C21.787 7.12775 22.1832 6.99134 22.5564 7.0646L23.5749 7.26452L22.8802 5.49451C22.6857 4.99873 22.9575 4.42375 23.4874 4.21026Z" fill="oklch(0.577 0.245 27.325)"/>
        </svg>
    ),
    joint: (
        <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" className="border-2 border-red-600 rounded-full">
            <path fillRule="evenodd" clipRule="evenodd" d="M19 4C19.5523 4 20 4.44772 20 5L20 13.3432C20 14.404 19.5786 15.4214 18.8284 16.1716L18.3246 16.6755C17.0407 17.9593 17.0407 20.0408 18.3246 21.3246C19.3251 22.3251 20.8537 22.5732 22.1193 21.9404L22.3617 21.8192C23.393 21.3035 24.607 21.3035 25.6383 21.8192L25.8807 21.9404C27.1463 22.5732 28.6749 22.3251 29.6754 21.3246C30.9593 20.0408 30.9593 17.9593 29.6754 16.6755L29.1716 16.1716C28.4214 15.4214 28 14.404 28 13.3432L28 5C28 4.44772 28.4477 4 29 4C29.5523 4 30 4.44772 30 5V7.02425C36.9912 9.49527 42 16.1627 42 24C42 31.8373 36.9912 38.5048 30 40.9758V43C30 43.5523 29.5523 44 29 44C28.4477 44 28 43.5523 28 43L28 34.6569C28 33.596 28.4214 32.5786 29.1716 31.8284L29.6754 31.3246C30.9593 30.0408 30.9593 27.9593 29.6754 26.6755C28.6749 25.6749 27.1463 25.4268 25.8807 26.0597L25.6383 26.1809C24.607 26.6965 23.393 26.6965 22.3617 26.1809L22.1193 26.0597C20.8537 25.4268 19.3251 25.6749 18.3246 26.6755C17.0407 27.9593 17.0407 30.0407 18.3246 31.3246L18.8284 31.8284C19.5786 32.5786 20 33.596 20 34.6569L20 43C20 43.5523 19.5523 44 19 44C18.4477 44 18 43.5523 18 43V40.9758C11.0088 38.5048 6 31.8373 6 24C6 16.1627 11.0088 9.49527 18 7.02425V5C18 4.44772 18.4477 4 19 4Z" fill="oklch(0.577 0.245 27.325)"/>
        </svg>
    ),
    dizzy: (
        <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" className="border-2 border-red-600 rounded-full">
            <path d="M27.2929 17.2929C27.6834 16.9024 28.3166 16.9024 28.7071 17.2929L30.5 19.0858L32.2929 17.2929C32.6834 16.9024 33.3166 16.9024 33.7071 17.2929C34.0976 17.6834 34.0976 18.3166 33.7071 18.7071L31.9142 20.5L33.7071 22.2929C34.0976 22.6834 34.0976 23.3166 33.7071 23.7071C33.3166 24.0976 32.6834 24.0976 32.2929 23.7071L30.5 21.9142L28.7071 23.7071C28.3166 24.0976 27.6834 24.0976 27.2929 23.7071C26.9024 23.3166 26.9024 22.6834 27.2929 22.2929L29.0858 20.5L27.2929 18.7071C27.2441 18.6583 27.2014 18.6057 27.1648 18.5502C26.9085 18.1621 26.9512 17.6346 27.2929 17.2929Z" fill="oklch(0.577 0.245 27.325)"/>
            <path d="M14.2929 17.2929C14.6834 16.9024 15.3166 16.9024 15.7071 17.2929L17.5 19.0858L19.2929 17.2929C19.6834 16.9024 20.3166 16.9024 20.7071 17.2929C21.0976 17.6834 21.0976 18.3166 20.7071 18.7071L18.9142 20.5L20.7071 22.2929C20.7559 22.3417 20.7986 22.3943 20.8352 22.4498C21.0915 22.8379 21.0488 23.3654 20.7071 23.7071C20.3166 24.0976 19.6834 24.0976 19.2929 23.7071L17.5 21.9142L15.7079 23.7063L15.7071 23.7071C15.3166 24.0976 14.6834 24.0976 14.2929 23.7071C13.9024 23.3166 13.9024 22.6834 14.2929 22.2929L16.0858 20.5L14.2929 18.7071C14.2441 18.6583 14.2014 18.6057 14.1648 18.5502C13.9085 18.1621 13.9512 17.6346 14.2929 17.2929Z" fill="oklch(0.577 0.245 27.325)"/>
            <path d="M31 32C31 35.3137 27.866 36 24 36C20.134 36 17 35.3137 17 32C17 28.6863 20.134 26 24 26C27.866 26 31 28.6863 31 32Z" fill="oklch(0.577 0.245 27.325)"/>
            <path fillRule="evenodd" clipRule="evenodd" d="M24 42C33.9411 42 42 33.9411 42 24C42 14.0589 33.9411 6 24 6C14.0589 6 6 14.0589 6 24C6 33.9411 14.0589 42 24 42ZM24 40C32.8366 40 40 32.8366 40 24C40 15.1634 32.8366 8 24 8C15.1634 8 8 15.1634 8 24C8 32.8366 15.1634 40 24 40Z" fill="oklch(0.577 0.245 27.325)"/>
        </svg>
    ),
};

const trackButtonClick = (productName: string) => {
    
    // Check if Google Analytics is loaded
    if (typeof window !== "undefined" && typeof window.gtag === "function") {
        // Check if the user has already clicked in this session
        if (!sessionStorage.getItem(`clicked_${productName}`)) {
            window.gtag("event", "buy_product", {
                event_category: "engagement",
                event_label: productName,
            });

            // Mark as clicked in session storage
            sessionStorage.setItem(`clicked_${productName}`, "true");
        }
    } else {
        console.warn("Google Analytics (gtag) is not loaded yet.");
    }
};

export default function ProductPage() {
    const params = useParams();
    const [product, setProduct] = useState<Product | null>(null); // Initially null to prevent hydration issues

    useEffect(() => {
        if (params.id) {
          const foundProduct = products.find((p) => p.id.toString() === params.id) || null;
          setProduct(foundProduct);
        }
      }, [params.id]);
  
    if (!product) return (
        <div className="w-screen min-h-screen">
            <Navbar/>
                <div className="h-full w-full justify-center items-center">
                    <p className="text-center mt-10">Loading product...</p>
                </div>
            {/* <Footer/> */}
        </div>
        ); // Prevents hydration mismatch
  
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
                            <div className="flex items-center gap-4 mt-1">
                                {product.conditions.map((condition: string) => (
                                    <div key={condition} className="flex flex-col items-center gap-1">
                                    {conditionIcons[condition]}
                                    <p className="text-xs text-black">{condition.replace("_", " ")}</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                        <Link 
                            href={product.url} 
                            target="_blank" 
                            rel="noopener noreferrer" 
                            className="inline-flex max-w-36"
                        >
                            <button 
                                className="bg-red-600 inline-flex text-white cursor-pointer text-center rounded-lg py-2 px-4 font-medium hover:bg-red-700 transition duration-100"
                                onClick={() => trackButtonClick(product.name)}
                            >
                                <p>Buy Product</p>
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