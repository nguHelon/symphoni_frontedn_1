/*-------------------------------------------------------------------
|  This fine is for all the static data in the App
|
|  -> Links, 
|
|  -> layaout title and description
*-------------------------------------------------------------------*/

// Sidebar Links

type linkType = {
    name: string,
    description: string,
    to: string
}

const links: linkType[] = [
    {
        name: "STEP1",
        description: "YOUR INFO",
        to: "/"
    },
    {
        name: "STEP2",
        description: "SELECT PLAN",
        to: "/select-plan"
    },
    {
        name: "STEP3",
        description: "ADD-ONS",
        to: "/add-ons"
    },
    {
        name: "STEP4",
        description: "SUMMARY",
        to: "/summary"
    }
]

// layout title and description

type layoutIntroType = {
    name: string
    title: string,
    description: string
}

const layoutIntro: layoutIntroType[] = [
    {
        name: "info",
        title: "Personal info",
        description: "Please provide your name, email address, and phone number."
    },
    {
        name: "plan",
        title: "Select your plan",
        description: "You have the option of monthly or yearly billing."
    },
    {
        name: "addOns",
        title: "Pick add-ons",
        description: "Add-ons help enhance your gaming experience."
    },
    {
        name: "summary",
        title: "Finishing up",
        description: "Double-check everything looks OK before confirming."
    }
]

export {
    links,
    layoutIntro
}