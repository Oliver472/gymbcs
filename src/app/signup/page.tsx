"use client";

import React from 'react'
import Image from "next/image";
import Checkbox from "@/components/Checkbox";
import TextInput from "@/components/TextInput";
import PasswordInput from "@/components/PasswordInput";
import CustomButton from "@/components/CustomButton";
import Link from "next/link";

function SignUp() {
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
                        Create an account
                    </h1>
                    <p className="text-accent2">
                        Sign up to continue
                    </p>
                </div>

                <div className="flex flex-col space-y-[18px]">
                    <TextInput
                        label={"Name"}
                        placeholder={"Enter your name"}
                        id={"name"}
                        type={"text"}
                    />

                    <TextInput
                        label={"Email"}
                        placeholder={"Enter email address"}
                        id={"email"}
                        type={"email"}
                    />

                    <PasswordInput
                        label={"Password"}
                        placeholder={"Enter password"}
                        id={"password"}
                    />

                    <PasswordInput
                        label={"Confirm password"}
                        placeholder={"Confirm password"}
                        id={"password"}
                    />

                    <div className="keepLogged flex flex-row space-x-1 justify-start items-center">
                        <Checkbox/>
                        <p className="text-body">I agree with privacy policy</p>
                    </div>

                    <CustomButton
                        title={"SIGN UP"}
                        action={() => {}}
                    />

                    <div className="divider text-center h-[2px] bg-secondary flex justify-center items-center ">
                        <p className="text-xs text-gray-400 bg-primary px-2">or sign up with</p>
                    </div>

                    <div className="flex flex-row space-x-4 justify-center items-center">
                        <button className="social-button w-fit bg-[#1877F2] ">
                            <Image
                                src="/images/fbLogo.png"
                                alt={"facebook logo"}
                                width={24}
                                height={24}
                            >
                            </Image>
                        </button>

                        <button className="social-button w-fit bg-primary border-2 border-accent2 ">
                            <Image
                                src="/images/ggLogo.png"
                                alt={"facebook logo"}
                                width={24}
                                height={24}
                            >
                            </Image>
                        </button>

                        <button className="social-button w-fit bg-accent2  ">
                            <Image
                                src="/images/apLogo.png"
                                alt={"facebook logo"}
                                width={24}
                                height={24}
                            >
                            </Image>
                        </button>
                    </div>
                    <Link href="/">
                        <p className="text-center">Already have an account? <span className="text-accent">Sign in</span></p>
                    </Link>
                </div>
            </div>
        </section>
    )
}

export default SignUp
