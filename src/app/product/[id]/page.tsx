"use client";

import React, {useEffect, useState} from 'react'
import {useParams} from 'next/navigation'
import Navbar from "@/components/Navbar";
import Image from "next/image";
import axios from 'axios';
import {Product as ProductType} from "@/utils/types/Product";
import {StarIcon, PlusIcon, MinusIcon} from "@heroicons/react/24/solid";

function ProductPage() {
    const {id} = useParams();
    const [product, setProduct] = useState<ProductType>();
    const [count, setCount] = useState(0);
    const breadCrumbs = "Home / Product / "

    useEffect(() => {
        const fetchProduct = async () => {
            axios.get(`https://fakestoreapi.com/products/${id}`)
                .then(response => {
                    console.log(response.data);
                    setProduct(response.data);
                }).catch((err) => {
                console.error("Error fetching product", err);
            })
        };
        fetchProduct();
    }, [id]);

    if (!product) return <div>Loading...</div>;

    return (
        <div className="w-scree h-screen bg-primary  flex flex-col">
            <Navbar/>
            <section className="p-[24px] space-y-[24px]">
                <h2 className="text-body">{breadCrumbs + product?.title}</h2>

                <div className="w-full  flex flex-col items-center justify-start ">
                    <Image
                        src={product?.image as string}
                        alt={product?.title}
                        width={160}
                        height={44}
                        className="max-w-[200px]"
                    />
                </div>

                <div className="flex flex-row justify-between ">
                    <div className="flex flex-row justify-around items-center">
                        <StarIcon className="h-6 w-6 mr-2 text-accent"/>
                        <p>{product?.rating?.rate} - {product?.rating?.count} reviews</p>
                    </div>

                    <h1>{product?.price} €</h1>
                </div>

                <div className="flex flex-col items-start ">
                    <h1 className="text-heading2 ">{product?.title}</h1>
                    <p className="text-darkSecondary">{product?.category}</p>
                </div>

                <div className="flex flex-row space-x-2">
                    <div className="w-10 h-10 border flex justify-center items-center border-darkSecondary">
                        <MinusIcon onClick={() => setCount(prev => (prev > 0 ? prev - 1 : 0))} className="h-6 w-6  text-accent"/>
                    </div>
                    <div className="w-10 h-10 border flex justify-center items-center  border-darkSecondary">
                        {count}
                    </div>
                    <div className="w-10 h-10 border flex justify-center items-center  border-darkSecondary">
                        <PlusIcon onClick={() => setCount(prev => prev + 1)} className="h-6 w-6  text-accent"/>
                    </div>

                    <div className=" grow flex justify-center items-center text-body bg-accent">
                        <h1 className="font-bold text-primary">Add to cart</h1>
                    </div>
                </div>

                <div className="desc">
                    <h1 className="text-heading2">Description</h1>
                    <p className="text-darkSecondary">{product?.description}</p>
                </div>
            </section>
        </div>
    )
}

export default ProductPage
