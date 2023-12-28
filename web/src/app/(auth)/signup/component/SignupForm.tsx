'use client'

import Button from "@/component/ui/Button"
import Input from "@/component/ui/Input"
import Link from "next/link"
import { useRouter } from "next/navigation"
import { useState } from "react"
import { FieldValues, SubmitHandler, useForm } from "react-hook-form"

const SignupForm = () => {
    const router = useRouter()
    const [isLoading, setIsLoading] = useState<boolean>(false)

    const { register, handleSubmit, formState: { errors } } = useForm<FieldValues>({
        defaultValues: {
            firstname: '',
            lastname: '',
            email: '',
            username: '',
            password: '',
            phonenumber: ''
        }
    })

    const onSubmit: SubmitHandler<FieldValues> = async (data) => {
        setIsLoading(true)
        console.log('>>>check data: ', data);

        //call api sign up
    }

    return (
        <>
            <form
                onSubmit={handleSubmit(onSubmit)}
                className="flex flex-col gap-6 items-center"
            >
                <div>
                    <span className="text-4xl font-extrabold text-primary drop-shadow-lg shadow-black">FusionGather</span>
                </div>
                <h3 className="text-3xl font-medium">Sign up</h3>

                <div className="flex gap-3">
                    <Input
                        id="firstname"
                        label="Fisrt Name"
                        disabled={isLoading}
                        register={register}
                        errors={errors}
                        required
                    />
                    <Input
                        id="lastname"
                        label="Last Name"
                        disabled={isLoading}
                        register={register}
                        errors={errors}
                        required
                    />

                </div>

                <Input
                    id="email"
                    label="Email"
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
                    id="phonenumber"
                    label="Phone Number"
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
                <div className="flex flex-col items-center justify-center gap-5 text-seconary">
                    <div className="flex gap-1 items-center justify-center text-base px-2">
                        <span>
                            Already have an account?
                        </span>
                        <span
                            onClick={() => router.push('/login')}
                            className="cursor-pointer font-semibold text-black hover:opacity-75"
                        >
                            Login
                        </span>
                    </div>
                </div>
            </form>
        </>
    );
}

export default SignupForm;