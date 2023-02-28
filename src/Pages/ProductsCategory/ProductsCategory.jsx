import { Star} from "@mui/icons-material";
import { Link, useLoaderData, useNavigate} from "react-router-dom";
import styled from "styled-components";
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';

import React, { useContext, useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import './styles.css';

// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper';
import { useQuery } from "@tanstack/react-query";
import { AuthContext } from "../../Context/ContextProvider";

const Filter=styled.div`
display: flex;
align-items: center;
`
const FilterTitle=styled.span`
font-size: 20px;
font-weight: 400;
`
const FilterColor=styled.div`
width: 20px;
height: 20px;
border-radius: 50%;
background-color: ${props=>props.color};
margin: 0px 5px;
cursor: pointer;
`
const FilterSize=styled.select`
margin-left: 10px;
padding: 5px;
`
const FilterSizeOption=styled.option``


const Amount=styled.span`
width: 30px;
height: 30px;
border-radius: 10px;
border: 1px solid teal;
display: flex;
align-items: center;
justify-content: center;
margin: 0px 5px;
`

const ProductsCategory = () => {
const singleProduct=useLoaderData()
const {user}=useContext(AuthContext)
const navigate=useNavigate()
const [count, setCount] = useState(0);



// const { data:cartContent=[], refetch } = useQuery({
//   queryKey: ['cartData', user?.email],
//   queryFn:async () =>{
// const res = await fetch(`https://shopping-market-server.vercel.app/cartData?email=${user?.email}`)
// const data = await res.json()
// return data
//   }
// })

const cartCategory={...singleProduct}

const {Location:address,cashDelivery,delivery,deliveryAmount,discount,image,img,imgInfo,price,return:beak,review,title,warranty,_id}=cartCategory;

const price2=parseInt(price)


const [TotalPrice,setTotalPrice]=useState(0)
console.log(typeof(TotalPrice))



const cardInfo={
  price,
  address,
  title,
  cashDelivery,
  deliveryAmount,
  delivery,
  discount,
  warranty,
  review,
  image,
  beak,
  img,
  imgInfo,
  name:user?.displayName,
  email:user?.email
 }

 const quantity=()=>{
  fetch("https://shopping-market-server.vercel.app/cartData",{
  method:"POST",
  headers:{
      "content-type":"application/json"
  },
  body:JSON.stringify(cardInfo)
})
      .then(res=>res.json())
      .then(result=>{
          
      console.log(result)
      }).catch(err=>console.log(err))
 }







const progressCircle = useRef(null);
  const progressContent = useRef(null);
  const onAutoplayTimeLeft = (s, time, progress) => {
    progressCircle.current.style.setProperty('--progress', 1 - progress);
    progressContent.current.textContent = `${Math.ceil(time / 1000)}s`;
  };


  const incrementCount = (TotalPrice) => {
    // Update state with incremented value
    setCount(count + 1);
    setTotalPrice()
  };
  const decNum = () => {
    if(count>0)
    {
      setCount(count - 1);
    }
 }

    return (
        <div className="grid lg:grid-cols-2 md:grid-cols-1 p-2 overflow-hidden border-2 mt-5">
   <div className=" w-62 grid lg:grid-cols-2 md:grid-cols-1 p-2">
    <div>
    <div>
    <img className="lg:w-80 md:w-full" src={image} alt="" />
<div className="ml-8 mt-3">
{
  imgInfo.map(singleImg=><>
  <div className="avatar">
  <div className="w-16 rounded-full">
    <img src={singleImg?.img1}/>
  </div>
</div>
<div className="avatar">
  <div className="w-16 rounded-full">
    <img src={singleImg?.img2}/>
  </div>
</div>
<div className="avatar">
  <div className="w-16 rounded-full">
    <img src={singleImg?.img3}/>
  </div>
</div>
<div className="avatar">
  <div className="w-16 rounded-full">
    <img src={singleImg?.img4}/>
  </div>
</div>
  </>
  )
}
</div>
</div>
    </div>



<div className="ml-3">
    <h1 className="text-xl mb-5">{title}</h1>
    <p><span className="text-xl">Price </span> : {price}</p>
    <p><span className="text-xl">Review :</span> {review} <span className="text-sm text-yellow-400"><Star></Star> <Star></Star> <Star></Star> <Star></Star> <Star></Star></span></p>
    <img className="mt-6 mb-6" src={img} alt="" />
    <div className="flex items-center justify-between mb-12">
    <Filter>
           <FilterTitle className="font-bold">Color</FilterTitle>
            <FilterColor color="black"/>
            <FilterColor color="Darkblue"/>
         <FilterColor color="gray"/>
    </Filter>

    <FilterSize>
              <FilterSizeOption>XS</FilterSizeOption>
             <FilterSizeOption>S</FilterSizeOption>
            <FilterSizeOption>M</FilterSizeOption>
            <FilterSizeOption>L</FilterSizeOption>
            <FilterSizeOption>XL</FilterSizeOption>
 </FilterSize>
    </div>
<div className="flex items-center justify-between">
<div className="flex items-center">
<p onClick={decNum} className="text-5xl cursor-pointer">-</p>
<Amount className="text-lg font-bold"> {count}</Amount>
<p onClick={incrementCount} className="text-3xl cursor-pointer">+</p>
</div>


<button onClick={()=>quantity()} className="btn btn-outline btn-secondary lg:mt-30"> ADD TO CART <ShoppingCartOutlinedIcon /></button>

{/* {
      user?.email &
       <> <Link to={`/productCategory/${_id}`}><button className="btn btn-outline btn-secondary"> ADD TO CART <ShoppingCartOutlinedIcon /></button></Link>  : <Link to={'/signIn'}><button className="btn btn-outline btn-secondary"> ADD TO CART <ShoppingCartOutlinedIcon /></button></Link></>
}  */}
    
    
</div>
</div>
</div>

   <div className=" mt-2 md:ml-12 lg:ml-32 overflow-hidden">
<h2 className="text-xl mb-6"><span className="font-bold">Location</span> : {address}</h2>
<p className="mb-3"><span className="font-bold"> Delivery </span> : {delivery}</p>
<p className="mb-3"><span className="font-bold"> Delivery-Amount </span> : {deliveryAmount}</p>
<p className="mb-3">Discount : {discount}</p>
<p className="mb-3"><span className="font-bold"> Price </span> : 

{price}

</p>
<h1 className="mb-3">Return : {beak}</h1>
<p className="mb-3">Warranty : {warranty}</p>
<p className="mb-3">Cash-Delivery : {cashDelivery}</p>
<div className="h-56 w-full">
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
      
        
        modules={[Autoplay, Pagination,]}
        onAutoplayTimeLeft={onAutoplayTimeLeft}
        className="mySwiper"
      >
        {
          imgInfo.map(images=><>
          <SwiperSlide ><img className="w-80 h-16" src={images?.img1} alt="" /></SwiperSlide>
          <SwiperSlide><img src={images?.img2} alt="" /></SwiperSlide>
          <SwiperSlide><img src={images?.img3} alt="" /></SwiperSlide>
          <SwiperSlide><img  src={images?.img4} alt="" /></SwiperSlide>
          </>
        )}
        
       
        <div className="autoplay-progress" slot="container-end">
          <svg viewBox="0 0 48 48" ref={progressCircle}>
            <circle cx="24" cy="24" r="20"></circle>
          </svg>
          <span ref={progressContent}></span>
        </div>
      </Swiper>
      </div>

   </div>
        </div>    
     
    );
};

export default ProductsCategory;