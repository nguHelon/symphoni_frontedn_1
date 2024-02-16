

type layoutIntroType = {
    title: string,
    description: string
}

const LayoutIntro = ({ title, description }: layoutIntroType) => {
  return (
    <div className="w-full">
        <h1 className="text-[30px] text-MarineBlue font-bold">{title}</h1>
        <p className="text-CoolGray">{description}</p>
    </div>
  )
}

export default LayoutIntro