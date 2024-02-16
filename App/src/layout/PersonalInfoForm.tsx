import LayoutIntro from "../components/LayoutIntro";
import { layoutIntro } from "../constants/constants"
import Input from "../components/Input";
import { validations } from "../Utils/validations";
import { FormProvider, useForm } from "react-hook-form";
import { FormFields } from "../components/Input";
import useFormStore from "../store/appStore";
import { useNavigate } from "react-router-dom";

const PersonalInfoForm = () => {
  const intro = layoutIntro.filter((intro) => intro.name === "info" )[0];
  const { setUserInfo, userInfo } = useFormStore();
  const navigate = useNavigate();
  const methods = useForm<FormFields>({
    defaultValues: {
        name: userInfo.name,
        email: userInfo.email,
        number: userInfo.number
    }
  });

  const onSubmit = methods.handleSubmit((data) => {
    methods.reset();
    setUserInfo(data);
    navigate("/select-plan");
  })
  
  console.log(userInfo)

  return (
    <FormProvider {...methods}>
        <div className="h-auto w-full bg-white ss:w-4/6 py-10 px-6 ss:px-14 rounded-xl">
            <LayoutIntro title={intro.title} description={intro.description} />
            <form 
                className="w-full flex flex-col space-y-8 mt-10"
                onSubmit={(event) => event.preventDefault()}
                autoComplete="off"
                noValidate
            >
                {
                    validations.map((validation) => {
                        return (
                            <Input key={validation.id} {...validation} />
                        )
                    })
                }
                <div className="w-full flex justify-end items-center">
                    <button 
                        className="text-white outline-none rounded-lg bg-MarineBlue px-5 py-3 mt-10" 
                        type="submit"
                        onClick={onSubmit}
                    >
                        Next Step
                    </button>
                </div>
            </form>
        </div>
    </FormProvider>
  )
}

export default PersonalInfoForm