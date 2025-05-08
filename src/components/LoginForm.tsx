import React from 'react'
import {RHFBasicTextField, RHFPasswordTextField} from "@/utils/ReactHookFormUtils";
import Checkbox from "@/components/Checkbox";
import {useRouter} from "next/navigation";
import {SubmitHandler, useForm} from "react-hook-form";
import axios from "axios";
import {ErrorToast, SuccessToast} from "@/utils/ToastUtils";

type Inputs = {
    username: string,
    password: string,
}

function LoginForm() {

    const [isLoading, setIsLoading] = React.useState(false);
    const router = useRouter();

    function redirectToHome() {
        router.push('/main')
    }

    const {
        handleSubmit,
        control,
    } = useForm<Inputs>();

    const onSubmit: SubmitHandler<Inputs> = (data) => submitForm(data);

    async function submitForm(data: Inputs) {
        try {
            //johnd
            //m38rmF$
            setIsLoading(true);

            const credentials = {
                username: data.username,
                password: data.password
            }
            axios.post('https://fakestoreapi.com/auth/login', credentials)
                .then(() => {
                    redirectToHome();
                    SuccessToast("Logged in successfully");
                }).catch(error => {
                console.log(error);
                ErrorToast(error.response.data);
            }).finally(() => {
                setIsLoading(false);
            });
        } catch (error) {
            console.error("Error submitting form", error);
        }
    }

    return (
        <form className="relative  space-y-[18px]" onSubmit={handleSubmit(onSubmit)}>
            <RHFBasicTextField
                control={control}
                name={"username"}
                label={"Username"}
                placeholder={"Enter username"}
                rules={{
                    required: true,

                }}
            />

            <RHFPasswordTextField
                name={"password"}
                label={"Password"}
                control={control}
                placeholder={"Enter password"}
                rules={{
                    required: true,

                }}
            />
            <p className="text-accent text-body text-right mt-1 font-semibold">Forgot password ?</p>

            <div className="keepLogged flex flex-row space-x-1 justify-start items-center ">
                <Checkbox/>
                <p className="text-body">Keep me logged in</p>
            </div>

            <button
                disabled={isLoading}
                type="submit"
                className="button w-full flex flex-col items-center justify-center cursor-pointer bg-accent text-heading2 font-bold text-primary p-4"
            >
                LOGIN
            </button>

            {isLoading && (
                <div
                    className="absolute top-0 left-0 w-full h-full !z-[9999] bg-black/10 flex justify-center items-center">
                    <span className="loader"></span>
                </div>
            )}
        </form>
    )
}

export default LoginForm
