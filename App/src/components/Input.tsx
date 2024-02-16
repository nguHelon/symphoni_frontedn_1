import { useFormContext } from "react-hook-form";
import { validatonType } from "../Utils/validations";

export type FormFields = {
    name: string,
    email: string,
    number: string
}

const Input = ({ name, label, type, id, placeholder, validation}: validatonType) => {
    const { register, formState: { errors } } = useFormContext<FormFields>()

    return (
        <div className="w-full flex flex-col space-y-1">
            <div className="w-full flex items-center justify-between">
                <label 
                    htmlFor={id}
                    className="capitalize text-MarineBlue font-medium"
                >
                    {label}
                </label>
                {errors[name]?.message && <p className="text-StrawberryRed font-medium">{errors[name]?.message}</p>}
            </div>
            <input
                id={id}
                type={type} 
                placeholder={placeholder}
                className={`w-full outline-none border border-LightGray p-3 rounded-xl text-MarineBlue font-medium focus:border-PurplishBlue ${errors[name]?.message ? "focus:border-red-500" : ""}`}
                {...register(name, validation)}
            />
        </div>
    )
}

export default Input;