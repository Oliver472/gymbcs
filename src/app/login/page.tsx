"use client";

import React from 'react'
import Image from 'next/image'
import Link from 'next/link';
import LoginForm from "@/components/LoginForm";

function Login() {

    return (
        <section className="w-screen h-screen flex justify-center items-center">
            <div className="w-full h-full sm:max-w-[650px] sm:h-fit bg-primary p-[24px] pt-[50px]">
                <div className="header flex items-center justify-center">
                    <Image
                        src="/images/gbLogo.png"
                        alt="gbLogo"
                        width={160}
                        height={44}
                    >
                    </Image>
                </div>

                <div className="flex flex-col w-full justify-start mb-[30px]">
                    <h1 className="text-accent text-heading">
                        Login
                    </h1>
                    <p className="text-accent2">
                        Welcome!
                    </p>
                </div>

                <div className="flex flex-col space-y-[18px]">

                    <LoginForm/>

                    <div className="divider text-center h-[2px] bg-secondary flex justify-center items-center ">
                        <p className="text-xs text-gray-400 bg-primary px-2">or sign in with</p>
                    </div>

                    <button className="social-button bg-[#1877F2] ">
                        <Image
                            src="/images/fbLogo.png"
                            alt={"facebook logo"}
                            width={24}
                            height={24}
                        >
                        </Image>
                        <h1 className="text-primary text-heading2">Sign in with Facebook</h1>
                    </button>

                    <button className="social-button bg-primary border-2 border-accent2 ">
                        <Image
                            src="/images/ggLogo.png"
                            alt={"facebook logo"}
                            width={24}
                            height={24}
                        >
                        </Image>
                        <h1 className="text-gray-400 text-heading2 ">Sign in with Google</h1>
                    </button>

                    <button className="social-button bg-accent2  ">
                        <Image
                            src="/images/apLogo.png"
                            alt={"facebook logo"}
                            width={24}
                            height={24}
                        >
                        </Image>
                        <h1 className="text-primary text-heading2 ">Sign in with Apple</h1>
                    </button>

                    <Link href="/signup">
                        <p className="text-center">Don't have an account? <span className="text-accent">Sign up</span>
                        </p>
                    </Link>
                </div>
            </div>
        </section>
    )
}

export default Login
