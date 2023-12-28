'use client'

import CountDown from "@/component/CountDown";
import Button from "@/component/ui/Button";
import { useRef, useState } from "react";
import { FieldValues, SubmitHandler, useForm } from "react-hook-form";

const VerifyCode = () => {
    const [isLoading, setIsLoading] = useState<boolean>(false)

    const inputRefs = useRef<Array<HTMLInputElement | null>>([])
    const { register, handleSubmit, formState: { errors } } = useForm<FieldValues>({
        defaultValues: {
            number1: '',
            number2: '',
            number3: '',
            number4: '',
            number5: '',
            number6: '',
        }
    })


    const onSubmit: SubmitHandler<FieldValues> = async (data) => {

        setIsLoading(true)
        console.log(">>>check data: ", data);

        const code = Object.keys(data)
            .sort()
            .map((key) => data[key])
            .join('');
        console.log(">>>check Verification code:", code);

        //call api verify
    }

    //auto focus next input
    // const handleKeyUp = (index: number, event: any) => {
    //     if (event.target.value.length === 1 && index < inputRefs.current.length - 1) {
    //         inputRefs.current[index + 1]!.focus();
    //     }
    // }


    return (
        <form
            onSubmit={handleSubmit(onSubmit)}
            className="flex flex-col gap-6 items-center"
        >
            <div className="flex flex-col items-center justify-center gap-5">
                <h3 className="text-3xl font-bold">Code Verification</h3>
                <span className="font-medium text-lg text-seconary">
                    Enter the verification code we just sent on your email address.
                </span>
            </div>
            <span className="text-primary font-bold text-xl my-10">
                The mail was sent succesfuly!
            </span>
            <div className="flex gap-5">
                {[...Array(6)].map((_, index) => (
                    <input
                        key={index}
                        type="text"
                        maxLength={1}
                        autoComplete="off"
                        {...register(`number${index}`, { required: true })}
                        name={`number${index}`}
                        className="w-[43px] h-[43px] border-2 outline-none border-black rounded-md text-center font-bold text-2xl"
                    // ref={(el) => (inputRefs.current[index] = el)}
                    // onKeyUp={(event) => handleKeyUp(index, event)}
                    />
                ))}
            </div>
            <div className="flex gap-1 text-seconary text-sm mb-10">
                <span>The email will be resent in </span>
                <CountDown currentTime="00:59" />
            </div>

            <div className="w-full">
                <Button disabled={isLoading} fullWidth type="submit">
                    {isLoading ? 'loading...' : 'Confirm'}
                </Button>
            </div>
        </form>
    );
}

export default VerifyCode;