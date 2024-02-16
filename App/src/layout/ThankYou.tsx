import { iconThankYou } from "../assets/assets"

const ThankYou = () => {
  return (
    <div className="h-auto w-full bg-white ss:w-4/6 py-10 px-6 rounded-xl ss:h-full ss:px-14 flex justify-center items-center">
        <div className="text-center flex flex-col justify-center items-center">
            <img className="mb-10" src={iconThankYou} alt="" />
            <h1 className="text-MarineBlue text-[40px] font-bold mb-3">Thank you!</h1>
            <p className="text-xl text-CoolGray">Thanks for confirming your subscription! We hope you have fun using our platform. If you need support, please feel free to email us at support@loremgaming.com.</p>
        </div>
    </div>
  )
}

export default ThankYou