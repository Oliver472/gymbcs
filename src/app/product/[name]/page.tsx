"use client";

import React from 'react'
import { useParams } from 'next/navigation'
import Navbar from "@/components/Navbar";

function ProductPage() {
    const params = useParams()
    const name = decodeURIComponent(params.name)
    const breadcrumbs = `Home / Product / ${name}`

    return (
        <div className="w-scree h-screen bg-primary  flex flex-col">
            <Navbar />
            <section className="p-[24px]">
                <h2 className="text-body">{breadcrumbs}</h2>
            </section>

        </div>
    )
}

export default ProductPage
