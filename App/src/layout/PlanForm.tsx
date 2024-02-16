import { layoutIntro } from "../constants/constants"
import LayoutIntro from "../components/LayoutIntro"
import { iconAdvanced, iconArcade, iconPro } from "../assets/assets"
import { useState } from "react"
import useFormStore from "../store/appStore"
import { Link, useNavigate } from "react-router-dom"

type plansType = {
    img: string,
    planName: string,
    pricePerDuration: {
        monthly: string,
        yearly: string,
    }
    selected: boolean
}

const plansData: plansType[] = [
    {
        img: iconArcade,
        planName: "Arcade",
        pricePerDuration: {
            monthly: "9",
            yearly: "90"
        },
        selected: false
    }, {
        img: iconAdvanced,
        planName: "Advanced",
        pricePerDuration: {
            monthly: "12",
            yearly: "120"
        },
        selected: false
    }, {
        img: iconPro,
        planName: "Pro",
        pricePerDuration: {
            monthly: "15",
            yearly: "150"
        },
        selected: false
    }
]

const PlanForm = () => {
  const navigate = useNavigate();
  const intro = layoutIntro.filter((intro) => intro.name == "plan")[0];
  const { setPlan, setPlanDuration, planDuration, plan } = useFormStore()
  const [Error, setError] = useState<boolean>(false);
  const [plans, setPlans] = useState<plansType[]>(plansData);
  const [isChecked, setIsChecked] = useState<boolean>(false);
  const [userPlanDuration, setUserPlanDuration] = useState<"monthly" | "yearly">("monthly");

  const handleChange = (): void => {
    setIsChecked(!isChecked);

    const determinePlanDuration = (isChecked: boolean): 'monthly' | 'yearly' => {
        if (isChecked === false) {
            return 'monthly';
        } else {
            return 'yearly';
        }
    };

    setUserPlanDuration((determinePlanDuration(isChecked)))
    setPlanDuration(userPlanDuration);
  }

  const handlesSubmit = (plans: plansType[]): void => {
    const anySelection = plans.some((plan) => plan.selected == true)
    if (anySelection) {
        const selectedPlan = plans.find((plan) => plan.selected == true)!;
        const getPlanPrice = planDuration == "monthly" ? selectedPlan.pricePerDuration.monthly : selectedPlan.pricePerDuration.yearly;
        setPlan({ planName: selectedPlan.planName, price: getPlanPrice})
        navigate("/add-ons")
    } else {
        setError(true);
    }
  }
  console.log(planDuration, plan)

  return (
    <div className="h-auto w-full bg-white ss:w-4/6 py-10 px-6 ss:px-14 rounded-xl">
        <LayoutIntro title={intro.title} description={intro.description} />
        {Error && <p className="mt-10 text-StrawberryRed font-semibold text-xl">Please choose a plan</p>}
        <div className="w-full mt-4">
            <div className="w-full flex flex-col space-y-3 ss:space-y-0 ss:flex-row justify-between">
                {
                    plans.map((plan, i) => (
                        <div
                            key={i}
                            className={`w-full ss:w-[30%] flex flex-row items-center ss:items-start ss:flex-col space-x-5 ss:space-x-0 ss:space-y-10 border-2 border-LightGray rounded-xl p-5 ${plan.selected ? "border-PurplishBlue bg-Magnolia" : ""}`}
                            onClick={() => {
                                setPlans((prevValues) => {
                                    return prevValues.map((value) => value.planName == plan.planName ? { ...value, selected: true } : { ...value, selected: false})
                                })
                                setError(false);
                            }}
                        >
                            <img className="h-[40px] ss:h-[50px] w-[40px] ss:w-[50px]" src={plan.img} alt="" />
                            <div>
                                <p className="text-MarineBlue font-bold capitalize">{plan.planName}</p>
                                <span className="text-CoolGray">{`$${ planDuration == "monthly" ? plan.pricePerDuration.monthly : plan.pricePerDuration.yearly}/${ planDuration == "monthly" ? "mo" : "yr"}`}</span>
                                {planDuration == "yearly" && <p className="text-MarineBlue">2 months free</p>}
                            </div>
                        </div>
                    ))
                }
            </div>
            <div className="w-full p-3 mt-10 bg-Magnolia flex justify-center items-center space-x-5">
                <span className={`font-semibold ${isChecked == false ? "text-MarineBlue" : "text-CoolGray"}`}>Monthly</span>
                <div>
                    <input
                        className="mr-2 mt-[0.3rem] h-3.5 w-8 appearance-none rounded-[0.4375rem] bg-neutral-300 before:pointer-events-none before:absolute before:h-3.5 before:w-3.5 before:rounded-full before:bg-transparent before:content-[''] after:absolute after:z-[2] after:-mt-[0.1875rem] after:h-5 after:w-5 after:rounded-full after:border-none after:bg-neutral-100 after:shadow-[0_0px_3px_0_rgb(0_0_0_/_7%),_0_2px_2px_0_rgb(0_0_0_/_4%)] after:transition-[background-color_0.2s,transform_0.2s] after:content-[''] checked:bg-primary checked:after:absolute checked:after:z-[2] checked:after:-mt-[3px] checked:after:ml-[1.0625rem] checked:after:h-5 checked:after:w-5 checked:after:rounded-full checked:after:border-none checked:after:bg-primary checked:after:shadow-[0_3px_1px_-2px_rgba(0,0,0,0.2),_0_2px_2px_0_rgba(0,0,0,0.14),_0_1px_5px_0_rgba(0,0,0,0.12)] checked:after:transition-[background-color_0.2s,transform_0.2s] checked:after:content-[''] hover:cursor-pointer focus:outline-none focus:ring-0 focus:before:scale-100 focus:before:opacity-[0.12] focus:before:shadow-[3px_-1px_0px_13px_rgba(0,0,0,0.6)] focus:before:transition-[box-shadow_0.2s,transform_0.2s] focus:after:absolute focus:after:z-[1] focus:after:block focus:after:h-5 focus:after:w-5 focus:after:rounded-full focus:after:content-[''] checked:focus:border-primary checked:focus:bg-primary checked:focus:before:ml-[1.0625rem] checked:focus:before:scale-100 checked:focus:before:shadow-[3px_-1px_0px_13px_#3b71ca] checked:focus:before:transition-[box-shadow_0.2s,transform_0.2s] dark:bg-neutral-600 dark:after:bg-neutral-400 dark:checked:bg-primary dark:checked:after:bg-primary dark:focus:before:shadow-[3px_-1px_0px_13px_rgba(255,255,255,0.4)] dark:checked:focus:before:shadow-[3px_-1px_0px_13px_#3b71ca]"
                        type="checkbox"
                        role="switch"
                        id="flexSwitchCheckDefault"
                        checked={isChecked}
                        onChange={handleChange}
                    />                    
                </div>
                <span className={` font-semibold ${ isChecked == false ? "text-CoolGray" : "text-MarineBlue"}`}>Yearly</span>
            </div>
            <div className="w-full mt-14 flex justify-between items-center">
                <Link to="/">
                    <button className="text-CoolGray font-bold hover:text-MarineBlue mt-10">Go Back</button>
                </Link>
                <button 
                    className="text-white outline-none rounded-lg bg-MarineBlue px-5 py-3 mt-10"
                    onClick={() => {
                        handlesSubmit(plans);
                    }}
                >
                    Next Step
                </button>
            </div>
        </div>
    </div>
  )
}

export default PlanForm