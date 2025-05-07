import React from 'react'
import {HeartIcon} from "@heroicons/react/24/outline";
import Image from "next/image";
import {PlusIcon, StarIcon} from "@heroicons/react/24/solid";
import {Product as ProductType} from "@/utils/types/Product";
import {useRouter} from "next/navigation";

interface ProductProps extends ProductType{
    rating: number;
}

function Product({title, price, category, rating, image}: ProductProps) {
    const router = useRouter()

    const handleRedirect = () => {
        router.push(`/product/${title}`)
    }

    return (
        <div onClick={() => handleRedirect()} className="card relative w-full p-[24px] flex flex-col justify-between min-h-[300px] bg-primary max-w-sm  shadow-2xl">
            <div className="absolute flex justify-center items-center w-fit px-4 py-3 h-[20px] bg-accent left-0 top-5 text-primary text-sm    ">
                <h2>20% OFF</h2>
            </div>
            <header className="flex justify-end items-center">
                <HeartIcon className="w-[30px] text-accent2 border-2 border-accent"/>
            </header>
            <div className="w-full flex flex-row justify-center items-center">
                <Image
                    src={image}
                    alt="productImage"
                    width={100}
                    height={44}
                    className="max-w-[200px]"
                />
            </div>
            <footer className="flex flex-row justify-around ">
                <div className="w-full flex flex-col items-start">
                    <h2 className="text-darkSecondary ">
                        {category}
                    </h2>
                    <h1 className="text-accent2 font-bold">
                        {title}
                    </h1>
                    <span>{price} €</span>
                </div>

                <div className="flex flex-col items-center justify-around">
                    <div className="flex flex-row justify-around items-center">
                        <StarIcon className="h-6 w-6  text-accent"/>
                        <p>{rating}</p>
                    </div>
                    <PlusIcon className="h-8 w-8 cursor-pointer border-2 border-accent text-accent"/>
                </div>
            </footer>
        </div>
    )
}

export default Product
