import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import LayoutIntro from "../components/LayoutIntro";
import { layoutIntro } from "../constants/constants";
import useFormStore from "../store/appStore";

const Summary = () => {
  const { planDuration, plan, addOns, emptyAddOnsState, emptyPlanState } = useFormStore();
  const intro = layoutIntro.filter((intro) => intro.name === "summary" )[0];
  const [totalAmtPerDuration, setTotalAmtPerDuration] = useState<number>(0)

  useEffect(() => {
    const newAddOns = addOns.filter((addOn) => addOn.price !== "");
    const totalAddOnAmount: number = newAddOns.reduce((acc, curr) => acc + parseInt(curr.price), 0);
    const finalAmount: number = totalAddOnAmount + parseInt(plan.price);

    setTotalAmtPerDuration(finalAmount);
  }, [addOns, plan])

  return (
    <div className="h-auto w-full bg-white ss:w-4/6 py-10 px-6 ss:px-14 rounded-xl">
        <LayoutIntro title={intro.title} description={intro.description} />

        <div className="w-full bg-Magnolia rounded-lg p-7 mt-10">
            <div className="w-full flex justify-between items-center border-b border-b-CoolGray pb-5">
                <div>
                    <h1 className="text-xl text-MarineBlue font-bold">{`${plan.planName} (${planDuration})`}</h1>
                    <Link 
                        to="/select-plan" 
                        className="underline text-CoolGray"
                        onClick={() => {
                            emptyAddOnsState();
                            emptyPlanState();
                        }}
                    >
                        Change
                    </Link>
                </div>
                <span className="text-MarineBlue text-xl font-bold">{`$${plan.price}/${planDuration == "monthly" ? "mo" : "yr"}`}</span>
            </div>
            <div className="w-full flex flex-col space-y-2 mt-5">
                {
                    addOns.length !> 1 ?
                    addOns.map((addOn, id) => {
                        if (addOn.addOnName == "") return;
                        return (
                            <div key={id} className="w-full flex justify-between item-start">
                                <p className="text-CoolGray">{addOn.addOnName}</p>
                                <span className="text-MarineBlue font-medium">{`+$${addOn.price}/${planDuration == "monthly" ? "mo" : "yr"}`}</span>
                            </div>
                        )
                    }) :
                    <span className="text-CoolGray">No add-ons were selected</span>
                }
            </div>
        </div>
        <div className="w-full flex justify-between items-center mt-5 px-5">
            <p className="text-lg text-CoolGray">{`Total (per ${planDuration == "monthly" ? "month" : "year"})`}</p>
            <span className="text-PurplishBlue font-bold text-2xl">{`+$${totalAmtPerDuration}/${planDuration == "monthly" ? "mo" : "yr"}`}</span>
        </div>
        <div className="w-full mt-14 flex justify-between items-center">
            <Link to="/add-ons">
                <button 
                    className="text-CoolGray font-bold hover:text-MarineBlue mt-10"
                    onClick={() => {
                        emptyAddOnsState();
                    }}
                >
                    Go Back
                </button>
            </Link>
            <Link to="/thank-you">
                <button 
                    className="text-white outline-none rounded-lg bg-PurplishBlue px-5 py-3 mt-10"                
                >
                    Confirm
            </button>
            </Link>
        </div>
    </div>
  )
}

export default Summary