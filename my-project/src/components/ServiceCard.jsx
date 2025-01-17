
const ServiceCard = ({imgURL,label,subtext}) => {
  return (
    <div className="flex-1 sm:w-[350px] min-sm:w-[350px] w-full rounded-[20px] shadow-3xl px-10 py-16" >
    <div className="w-11 h-11 flex justify-center items-center bg-coral-red  rounded-full">
    <img 
    src={imgURL}
    alt={label}
    className="width-[24px] height-[24px] "
    />
    </div>
    <h3 className="font-palanquin mt-5 text-3xl leading-normal font-bold ">{label}</h3>
    <p className="mt-3 font-montserrat breaks-word info-text">{subtext}</p>
    </div>
  )
}

export default ServiceCard