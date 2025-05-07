"use client";

import React, {useEffect, useState} from 'react'
import Image from "next/image";
import {Bars3Icon} from "@heroicons/react/24/solid";
import {ShoppingCartIcon} from "@heroicons/react/24/outline";
import {Product as ProductType} from "@/utils/types/Product";
import Product from '@/components/Product';
import {getRandomFloat} from "@/utils/mathUtils";
import Navbar from "@/components/Navbar";


function Main() {

    const [products, setProducts] = useState<ProductType[]>([])

    useEffect(() => {
        const fetchProducts = async () => {
            const response = await fetch('https://fakestoreapi.com/products');
            const data = await response.json();
            console.log(data);
            setProducts(data);
        }

        fetchProducts()
            .then(() => {

                console.log("Products fetched successfully");
            })
            .catch((error) => {
                console.error("Error fetching products", error);
            })
            .finally(() => {
                console.log("Fetch products finished");
            });
    }, [])

    return (
        <div className="w-full h-full ">
            <Navbar/>
            <section className="w-full p-[24px]">
                <div className="w-full">
                    <Image
                        src="/images/gymBeamPoster.webp"
                        alt="gbLogo"
                        layout="responsive"
                        width={160}
                        height={44}
                        className="w-full h-full object-cover"
                    />
                </div>
            </section>

            <ul className="flex flex-col items-center space-y-[24px]">
                {products.map((product) => (
                    <Product
                        key={product.id}
                        title={product.title}
                        price={product.price}
                        category={product.category}
                        rating={getRandomFloat()}
                        image={product.image}
                    />
                ))}
            </ul>

            <main className="w-full p-[24px] text-body">

            </main>
        </div>
    )
}

export default Main
