'use client'

import Button from "@/component/ui/Button";
import Input from "@/component/ui/Input";
import { handleResetPasswordAction } from "@/libs/actions";
import { ResetPasswordSchema } from "@/libs/validation/auth";
import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";
import { FieldValues, SubmitHandler, useForm } from "react-hook-form";
import toast from "react-hot-toast";

interface Props {
    onSuccess: () => void;
    accountInfo: (data: any) => void;
}

const ResetPasswordForm = ({ onSuccess, accountInfo }: Props) => {

    const [isLoading, setIsLoading] = useState<boolean>(false)
    console.log("check render");

    const { register, handleSubmit, formState: { errors } } = useForm<FieldValues>({
        defaultValues: {
            email: '',
        },
        resolver: zodResolver(ResetPasswordSchema)
    })

    const onSubmit: SubmitHandler<FieldValues> = async (data) => {
        setIsLoading(true)
        console.log("check check");

        try {
            const res = await handleResetPasswordAction(data?.email)
            console.log("res", res);

            if (res.status === 404 || res.statusCode === 404) {
                toast.error(res?.message)
            } else {
                accountInfo(res?.user?.email)
                onSuccess()
            }
        } catch (error: any) {
            console.log(error);
        } finally {
            setIsLoading(false)
        }
    }
    return (
        <>
            <form
                onSubmit={handleSubmit(onSubmit)}
                className="flex flex-col gap-6 items-center"
            >
                <div className="flex flex-col items-center justify-center gap-5">
                    <h3 className="text-3xl font-bold">Reset your password</h3>
                    <span className="font-medium text-lg text-center text-secondary">
                        Don&apos;t worry! It occurs. Please enter the email address linked with your account.
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