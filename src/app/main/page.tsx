"use client";

import React, {useEffect, useState} from 'react'
import Image from "next/image";
import {Product as ProductType} from "@/utils/types/Product";
import Product from '@/components/Product';
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
    }, [])

    return (
        <div className="w-screen h-full flex flex-col">
            <Navbar/>
            <section className="w-full p-[24px] flex flex-col items-center justify-center">
                <div className="w-full max-w-[1024px]">
                    <Image
                        src="/images/gymBeamPoster.webp"
                        alt="gbLogo"
                        layout="responsive"
                        width={160}
                        height={44}
                        className="w-full h-full object-cover sm:hidden"
                        priority
                    />

                    <Image
                        src="/images/gymBeamPosterLg.webp"
                        alt="gbLogo"
                        layout="responsive"
                        width={160}
                        height={44}
                        className="w-full h-full object-cover hidden sm:block"
                        priority
                    />
                </div>
            </section>

            <section className="w-full flex items-start justify-center">
                <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-[24px] px-[24px] sm:px-0 sm:max-w-[1024]">
                    {products.map((product) => (
                        <Product
                            key={product.id}
                            id={product.id}
                            title={product.title}
                            price={product.price}
                            category={product.category}
                            rating={product.rating}
                            image={product.image}
                            description={product.description}
                        />
                    ))}
                </ul>
            </section>
        </div>
    )
}

export default Main
