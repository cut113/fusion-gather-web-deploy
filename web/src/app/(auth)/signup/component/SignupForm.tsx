'use client'

import Button from "@/component/ui/Button"
import Input from "@/component/ui/Input"
import Link from "next/link"
import { useState } from "react"
import { FieldValues, SubmitHandler, useForm } from "react-hook-form"
import { zodResolver } from '@hookform/resolvers/zod';
import { SignupSchema } from "@/libs/validation/auth"
import { handleSignUpAction } from "@/libs/actions"
import toast from "react-hot-toast"
import VerifyCode from "../../reset-password/component/VerifyCode"

const SignupForm = () => {
    const [isLoading, setIsLoading] = useState<boolean>(false)
    const [verifyCode, setVerifyCode] = useState<boolean>(false)
    const [accountInfo, setAccountInfo] = useState<string>("");
    console.log(">>check accountInfo: ", accountInfo);

    const { register, handleSubmit, formState: { errors } } = useForm<FieldValues>({
        defaultValues: {
            firstName: '',
            lastName: '',
            email: '',
            username: '',
            password: '',
            phoneNumber: '',
            dob: ''
        },
        resolver: zodResolver(SignupSchema)
    })

    const onSubmit: SubmitHandler<FieldValues> = async (data) => {
        setIsLoading(true)
        try {
            const res = await handleSignUpAction(data)
            console.log("check res: ", res);

            if (res.statusCode === 404) {
                toast.error(res.message)
            } else {
                toast.success('Create account successfully!')
                //redirec verify code page
                setVerifyCode(true)
                setAccountInfo(res?.username)
            }
        } catch (error: any) {
            console.log(error);

        } finally {
            setIsLoading(false)
        }

    }


    return (
        <>
            {verifyCode ?
                <VerifyCode accountInfo={accountInfo} type="verifyCode" />
                :
                <form
                    onSubmit={handleSubmit(onSubmit)}
                    className="flex flex-col gap-6 items-center"
                >
                    <div>
                        <span className="text-4xl font-extrabold text-primary drop-shadow-lg shadow-black textShadow">FusionGather</span>
                    </div>
                    <h3 className="text-3xl font-medium">Sign up</h3>

                    <div className="flex gap-3">
                        <Input
                            id="firstName"
                            label="Fisrt Name"
                            disabled={isLoading}
                            register={register}
                            errors={errors}
                            required
                        />
                        <Input
                            id="lastName"
                            label="Last Name"
                            disabled={isLoading}
                            register={register}
                            errors={errors}
                            required
                        />
                    </div>
                    {/* <div className={`w-full relative`}>
                    <input
                        id={"password"}
                        type={"text"}
                        placeholder=""
                        autoComplete={'off'}
                        disabled={isLoading}
                        {...register("password", { required: true })}
                        className={`py-2 px-4 pt-6 outline-none  border-2 border-black rounded-md transition disabled:opacity-70 disabled:cursor-not-allowed peer text-gray-600 bg-white font-light ${errors && errors["password"] ? 'border-rose-400 focus:border-rose-400' : 'border-black focus:border-black'} ${isLoading && 'opacity-50 cursor-default'}
                `}
                    />
                    {errors && errors["password"] && <p className="text-sm text-rose-400">{`${errors["password"]?.message}`}</p>}
                    <label className={`absolute cursor-text text-md duration-150 transform -translate-y-3 top-5 z-10 origin-[0] left-4 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-4 ${errors && errors["password"] ? 'text-rose-500' : 'text-slate-500'}`}
                        htmlFor={"password"}>{"label"}
                    </label>
                </div > */}

                    <Input
                        id="email"
                        label="Email"
                        disabled={isLoading}
                        register={register}
                        errors={errors}
                        required
                    />
                    <Input
                        id="phoneNumber"
                        label="Phone Number"
                        disabled={isLoading}
                        register={register}
                        errors={errors}
                        required
                    />
                    <Input
                        id="dob"
                        label="Date Of Birth"
                        disabled={isLoading}
                        register={register}
                        errors={errors}
                        required
                    />
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
                            {isLoading ? 'loading...' : 'Create Account'}
                        </Button>
                    </div>
                    <div className="flex flex-col items-center justify-center gap-5 text-secondary">
                        <div className="flex gap-1 items-center justify-center text-base px-2">
                            <span>
                                Already have an account?
                            </span>
                            <Link
                                className="cursor-pointer font-semibold text-black hover:opacity-75"
                                href={"/login"}>
                                Login
                            </Link>
                        </div>
                    </div>
                </form>
            }
        </>
    );
}

export default SignupForm;