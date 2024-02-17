import { Link, useNavigate } from "react-router-dom";
import LayoutIntro from "../components/LayoutIntro";
import { layoutIntro } from "../constants/constants";
import { useState } from "react";
import useFormStore from "../store/appStore";

type addOnsType = {
    title: string,
    description: string,
    addOnPricePerDuration: {
        monthly: string,
        yearly: string,
    },
    checked: boolean,
    setAddOnsState?: (value: React.SetStateAction<addOnsType[]>) => void
}

const addOnsData: addOnsType[] = [
    {
        title: "Online service",
        description: "Access to multiplayer games",
        addOnPricePerDuration: {
            monthly: "1",
            yearly: "10"
        },
        checked: false,        
    },
    {
        title: "Larger storage",
        description: "Extra 1TB of cloud save",
        addOnPricePerDuration: {
            monthly: "2",
            yearly: "20"
        },
        checked: false
    },
    {
        title: "Customizable profile",
        description: "Custom theme on your profile",
        addOnPricePerDuration: {
            monthly: "2",
            yearly: "20"
        },
        checked: false
    }
];

const CheckInput = ({title, description, addOnPricePerDuration, checked, setAddOnsState}: addOnsType) => {
    const { planDuration } = useFormStore();

    return (
        <div className={`w-full flex justify-between items-center p-5 border border-CoolGray rounded-lg ${ checked ? "border-PurplishBlue bg-Magnolia" : ""}`}>
            <div className="flex items-center space-x-5">
                <input
                    className="h-5 w-5 bg-PurplishBlue text-PurplishBlue"
                    type="checkbox" 
                    name="" 
                    id={title}
                    checked={checked}
                    onChange={() => {
                        if (setAddOnsState) {
                            setAddOnsState((prevAddOns) => {
                                return prevAddOns.map(addOn => {
                                    if (addOn.title === title) {
                                        return { ...addOn, checked: !checked}
                                    }
                                    return addOn
                                })
                            })
                        }
                    }}
                />
                <div className="flex flex-col">
                    <label htmlFor={title} className=" text-base xs:text-xl text-MarineBlue font-semibold">{title}</label>
                    <label htmlFor={title} className="text-CoolGray text-sm xs:text-lg">{description}</label>
                </div>
            </div>
            <span className="text-PurplishBlue">
                {
                    `$${planDuration == "monthly" ? addOnPricePerDuration.monthly : addOnPricePerDuration.yearly}/${planDuration == "monthly" ? "mo" : "yr"}`
                }
            </span>
        </div>
    )
}

const AddOns = () => {
    const navigate = useNavigate();
    const intro = layoutIntro.filter((intro) => intro.name === "addOns" )[0];
    const { setAddOns, planDuration } = useFormStore()
    const [addOnsState, setAddOnsState] = useState<addOnsType[]>(addOnsData);

    const handleSubmit = (addOns: addOnsType[]) => {
        const anySelection = addOns.some((addOn) => addOn.checked === true);
        if (anySelection) {
            const filteredAddOns = addOns.filter((addOn) => addOn.checked === true);
            const newAddOns = filteredAddOns.map((addOn) => {
                const addOnPrice = planDuration == "monthly" ? addOn.addOnPricePerDuration.monthly : addOn.addOnPricePerDuration.yearly;
                
                return { addOnName: addOn.title, price: addOnPrice}
            })

            setAddOns(newAddOns);
        }
        navigate("/summary");
    }


  return (
    <div className="h-auto w-full bg-white ss:w-4/6 py-10 px-6 ss:px-14 rounded-xl">
        <LayoutIntro title={intro.title} description={intro.description} />
        <form className="w-full flex flex-col space-y-5 mt-10">
            {
                addOnsState.map((addOn, i) => {
                    return (
                        <CheckInput 
                            key={i}
                            title={addOn.title}
                            description={addOn.description}
                            addOnPricePerDuration={addOn.addOnPricePerDuration}
                            checked={addOn.checked}
                            setAddOnsState={setAddOnsState}
                        />
                    )
                })
            }
        </form>
        <div className="w-full mt-14 flex justify-between items-center">
            <Link to="/select-plan">
                <button className="text-CoolGray font-bold hover:text-MarineBlue mt-10">Go Back</button>
            </Link>
            <button 
                className="text-white outline-none rounded-lg bg-MarineBlue px-5 py-3 mt-10"
                onClick={() => {
                    handleSubmit(addOnsState);
                }}
            >
                Next Step
            </button>
        </div>
    </div>
  )
}

export default AddOns