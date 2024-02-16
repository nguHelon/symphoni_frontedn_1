import { create } from "zustand";

// store state
type userInfoType = {
    name: string,
    email: string,
    number: string
}

type planType = {
    planName: string,
    price: string
}

type addOnsType = {
    addOnName: string,
    price: string
}

type planDurationType = "monthly" | "yearly";

type formStore = {
    userInfo: userInfoType,
    planDuration: planDurationType,
    plan: planType,
    addOns: addOnsType[],
}

// store Actions
type actions = {
    setUserInfo: (userInfo: userInfoType) => void,
    setPlanDuration: (planDuration: planDurationType) => void,
    setPlan: (plan: planType) => void,
    setAddOns: (addOns: addOnsType[]) => void,
    emptyPlanState: () => void,
    emptyAddOnsState: () => void
}

const useFormStore = create<formStore & actions>((set) => ({
    userInfo: {name: "", email: "", number: ""},
    planDuration: "monthly",
    plan: {planName: "", price: ""},
    addOns: [
        {
            addOnName: "",
            price: ""
        }
    ],
    setUserInfo: (userInfo) => set((state) => ({
        userInfo: {
            ...state.userInfo, ...userInfo
        }
    })),
    setPlanDuration: (planDuration: planDurationType) => set(() => ({ planDuration: planDuration })),
    setPlan: (plan) => set((state) => ({ 
        plan: {
            ...state.plan, ...plan
        }
    })),
    setAddOns: (addOn: addOnsType[]) => set((state) => ({
        addOns: [
            ...state.addOns, ...addOn
        ]
    })),
    emptyAddOnsState: () => set({
        addOns: [
            {
                addOnName: "",
                price: ""
            }
        ]
    }),
    emptyPlanState: () => set({
        plan: {
            planName: "",
            price: ""
        }
    })
}))

export default useFormStore;