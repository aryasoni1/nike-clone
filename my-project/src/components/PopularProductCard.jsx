import {star} from "../assets/icons"
const PopularProductCard = ({imgURL,name,price}) => {
  return (
    <div className="flex flex-1 flex-col w-full max-sm:w-full max-sm:items-center">
        <img 
        src={imgURL} alt={name} className="w-[280px] h-[280px]"
        />
        <div className="mt-8 flex justify-start gap-2.5">
            <img 
            src={star}
            alt="rating"
            className="w-[24px] h-[24px]"
            />
            <p className="font-montserrat text-xl leading-normal text-slate-gray">(4.5)</p>
        </div>
        <h3 className="font-palanquin text-xl font-semibold leading-normal  mt-2">{name}</h3>
        <p className="mt-2 font-montserrat font-semibold text-xl text-coral-red leading-normal">{price}</p>
    </div>
  )
}

export default PopularProductCard;