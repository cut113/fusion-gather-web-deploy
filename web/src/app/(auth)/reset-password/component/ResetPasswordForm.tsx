'use client'

import Button from "@/component/ui/Button";
import Input from "@/component/ui/Input";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { FieldValues, SubmitHandler, useForm } from "react-hook-form";

const ResetPasswordForm = () => {

    const router = useRouter()
    const [isLoading, setIsLoading] = useState<boolean>(false)

    const { register, handleSubmit, formState: { errors } } = useForm<FieldValues>({
        defaultValues: {
            email: '',
        }
    })

    const onSubmit: SubmitHandler<FieldValues> = async (data) => {
        setIsLoading(true)
        console.log(">>>check data: ", data);

        //call api reset
    }
    return (
        <>
            <form
                onSubmit={handleSubmit(onSubmit)}
                className="flex flex-col gap-6 items-center"
            >
                <div className="flex flex-col items-center justify-center gap-5">
                    <h3 className="text-3xl font-bold">Reset your password</h3>
                    <span className="font-medium text-lg text-center text-seconary">
                        Don't worry! It occurs. Please enter the email address linked with your account.
                    </span>
                </div>


                <Input
                    id="email"
                    label="Email"
                    disabled={isLoading}
                    register={register}
                    errors={errors}
                    required
                />

                <div className="w-full">
                    <Button disabled={isLoading} fullWidth type="submit">
                        {isLoading ? 'loading...' : 'Send Code'}
                    </Button>
                </div>
            </form>
        </>
    );
}

export default ResetPasswordForm;