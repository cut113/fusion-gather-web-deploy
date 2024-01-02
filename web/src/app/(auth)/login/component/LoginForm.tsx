'use client'

import Button from "@/component/ui/Button";
import Input from "@/component/ui/Input";
import Link from "next/link";
import { useState } from "react";
import { FcGoogle } from 'react-icons/fc'
import { FieldValues, SubmitHandler, useForm } from "react-hook-form";
import { zodResolver } from '@hookform/resolvers/zod';
import { LoginSchema } from "@/libs/validation/auth";

const LoginForm = () => {
    const [isLoading, setIsLoading] = useState<boolean>(false)

    const { register, handleSubmit, formState: { errors } } = useForm<FieldValues>({
        defaultValues: {
            username: '',
            password: '',
        },
        resolver: zodResolver(LoginSchema),
    })

    const onSubmit: SubmitHandler<FieldValues> = async (data) => {
        setIsLoading(true)

        //call api login
    }

    return (
        <>
            <form
                onSubmit={handleSubmit(onSubmit)}
                className="flex flex-col gap-6 items-center"
            >
                <div>
                    <span className="text-4xl font-extrabold text-primary drop-shadow-2xl shadow-rose-900 textShadow">FusionGather</span>
                </div>
                <h3 className="text-3xl font-medium">Log in</h3>
                <button type="button" className="w-full border-2 border-black rounded-md bg-white flex items-center justify-center gap-[10px] py-4 hover:bg-slate-100">
                    <FcGoogle size={"20px"} />
                    <span className="font-semibold text-base">
                        Continue with Google
                    </span>
                </button>
                <div className="relative w-full">
                    <div className="absolute inset-0 flex items-center">
                        <div className="w-full border-t border-gray-300"></div>
                    </div>
                    <div className="relative flex justify-center text-sm">
                        <span className="px-2 bg-secondary text-secondary">
                            Or enter your Credential
                        </span>
                    </div>
                </div>

                <Input
                    id="username"
                    label="Username"
                    disabled={isLoading}
                    register={register}
                    errors={errors}
                    required
                />
                <Input
                    disabled={isLoading}
                    register={register}
                    errors={errors}
                    required
                    id="password"
                    label="Password"
                    type="password"
                />

                <div className="w-full">
                    <Button disabled={isLoading} fullWidth type="submit">
                        {isLoading ? 'loading...' : 'Sign in'}
                    </Button>
                </div>

                <div className="flex flex-col items-center justify-center gap-5 text-secondary">
                    <Link
                        className="underline hover:opacity-75 text-sm"
                        href={"/reset-password"}>
                        Forgot Password?
                    </Link>
                    <div className="flex gap-1 items-center justify-center text-base px-2">
                        <span>
                            Don't have an account?
                        </span>
                        <Link
                            className="cursor-pointer font-semibold text-black hover:opacity-75"
                            href={"/signup"}>
                            Sign up
                        </Link>
                    </div>
                </div>
            </form>
        </>
    );
}

export default LoginForm;