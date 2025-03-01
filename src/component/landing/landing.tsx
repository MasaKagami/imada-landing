import Image from "next/image";
import Link from "next/link";

const products = [
    { id: 1, name: "Imada Seasons Safe Oil", image: "/imada-1.webp" },
    { id: 2, name: "Imada Seasons Safe Balm", image: "/imada-2.webp" },
    { id: 3, name: "Imada Red Flower Oil", image: "/imada-3.webp" },
    { id: 4, name: "Imada Hotdrug Oil", image: "/imada-4.webp" },
    { id: 5, name: "Imada Sze Chi Healing Oil", image: "/imada-5.webp" },
    { id: 6, name: "Imada Gold Dragon Oil", image: "/imada-6.webp" },
    { id: 7, name: "Snake Porous Capsicum Plaster", image: "/imada-7.webp" },
  ];

const Landing = () => {
    return(
        <main className="w-screen max-w-[90%] sm:max-w-[80%] mt-10 mb-20 m-auto flex flex-col items-center gap-6">
            <h1 className="text-3xl font-bold">Our Products</h1>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 sm:gap-6">
                {products.map((product) => (
                    <div key={product.id} className="flex flex-col border-gray-300 border p-4 gap-2">
                        <Image src={product.image} alt={product.name} width={300} height={0} style={{height:"auto"}}/>
                        <p className="font-medium">{product.name}</p>
                        <Link href={`/product/${product.id}`} className="w-full">
                            <button className="w-full bg-red-600 text-white cursor-pointer text-center rounded-lg py-2 font-medium hover:bg-red-700 transition duration-100">
                                <p>Check Product</p>
                            </button>
                        </Link>
                    </div>
                ))}
            </div>
        </main>
    );
};

export default Landing;