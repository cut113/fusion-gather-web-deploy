'use client'

import Button from "@/component/ui/Button"
import Input from "@/component/ui/Input"
import { useState } from "react"
import { FieldValues, SubmitHandler, useForm } from "react-hook-form"

const CreateNewPassword = () => {
    const [isLoading, setIsLoading] = useState<boolean>(false)

    const { register, handleSubmit, formState: { errors } } = useForm<FieldValues>({
        defaultValues: {
            newPassword: '',
            confirmPassword: ''

        }
    })

    const onSubmit: SubmitHandler<FieldValues> = async (data) => {
        setIsLoading(true)
        console.log(">>>check data: ", data);

        //call api new password
    }
    return (
        <form
            onSubmit={handleSubmit(onSubmit)}
            className="flex flex-col gap-6 items-center"
        >
            <div className="flex flex-col items-center justify-center gap-5">
                <h3 className="text-3xl font-bold">Create a New Password</h3>
                <span className="font-medium text-lg text-seconary">
                    Your new password must be unique from those previously used.
                </span>
            </div>
            <Input
                id="newPassword"
                label="New Password"
                disabled={isLoading}
                register={register}
                errors={errors}
                required
            />
            <Input
                id="confirmPassword"
                label="Confirm Password"
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