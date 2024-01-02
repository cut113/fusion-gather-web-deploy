'use client'

import Button from "@/component/ui/Button"
import Input from "@/component/ui/Input"
import { useState } from "react"
import { FieldValues, SubmitHandler, useForm } from "react-hook-form"
import { zodResolver } from '@hookform/resolvers/zod';
import { CreateNewPasswordSchema } from "@/libs/validation/auth"
import { handleNewPasswordAction } from "@/libs/actions"
import toast from "react-hot-toast"
import { useRouter } from "next/navigation"
interface Props {
    accountInfo: string
}
const CreateNewPassword = ({ accountInfo }: Props) => {
    const router = useRouter()
    const [isLoading, setIsLoading] = useState<boolean>(false)

    const { register, handleSubmit, formState: { errors } } = useForm<FieldValues>({
        defaultValues: {
            newPassword: '',
            confirmPassword: ''
        },
        resolver: zodResolver(CreateNewPasswordSchema)
    })

    const onSubmit: SubmitHandler<FieldValues> = async (data) => {
        setIsLoading(true)
        console.log(">>>check data: ", data);
        try {
            const res = await handleNewPasswordAction(accountInfo, data.newPassword)
            if (res) {
                toast.success('Succeed!')
                //redirec login
                router.push("/login")
            } else {
                toast.error("Failed!")
            }
        } catch (error: any) {
            console.log(error);

        } finally {
            setIsLoading(false)
        }
    }
    return (
        <form
            onSubmit={handleSubmit(onSubmit)}
            className="flex flex-col gap-6 items-center"
        >
            <div className="flex flex-col items-center justify-center gap-5">
                <h3 className="text-3xl font-bold">Create a New Password</h3>
                <span className="font-medium text-lg text-secondary">
                    Your new password must be unique from those previously used.
                </span>
            </div>
            <Input
                id="newPassword"
                label="New Password"
                type="password"
                disabled={isLoading}
                register={register}
                errors={errors}
                required
            />
            <Input
                id="confirmPassword"
                label="Confirm Password"
                type="password"
                disabled={isLoading}
                register={register}
                errors={errors}
                required
            />
            <div className="w-full">
                <Button disabled={isLoading} fullWidth type="submit">
                    {isLoading ? 'loading...' : 'Reset Password'}
                </Button>
            </div>
        </form>
    );
}

export default CreateNewPassword;