import { FavoriteBorderOutlined, SearchOutlined, ShoppingCartOutlined, Star } from '@mui/icons-material';
import { useQuery } from '@tanstack/react-query';
import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../Context/ContextProvider';
import ImgCategory from './ImgCategory';
import { PhotoProvider, PhotoView } from 'react-photo-view';
import 'react-photo-view/dist/react-photo-view.css';


const SingleCategory = ({ Category }) => {
  const {title,price,review,imgInfo,_id}=Category;
  // const {img1,img2,img3,img4}=Category?.imgInfo;
const {user}=useContext(AuthContext)


const { data:cartContent=[], refetch } = useQuery({
    queryKey: ['cartData', user?.email],
    queryFn:async () =>{
  const res = await fetch(`https://shopping-market-server.vercel.app/cartData?email=${user?.email}`)
  const data = await res.json()
  return data
    }
  })


    const CartIcon=(Category)=>{
    

       const cartCategory={...Category}
       const{price,title,description,review,image}=cartCategory;

       const cartInfo={
        price,
        title,
        description,
        review,
        image,
        name:user?.displayName,
        email:user?.email
       }
       console.log(cartInfo)

fetch("https://shopping-market-server.vercel.app/cartData",{
    method:"POST",
    headers:{
        "content-type":"application/json"
    },
    body:JSON.stringify(cartInfo)
})
        .then(res=>res.json())
        .then(result=>{
            refetch()
        console.log(result)
        }).catch(err=>console.log(err))
  }
    return (
      
      <div className="card border w-96 bg-base-10 hover:translate-y-10 transition-all hover:shadow-lg">
      <PhotoProvider>
        <PhotoView src={Category?.image}><figure><img data-aos="zoom-in" className="w-full p-2 h-80 relative" src={Category?.image} alt="car!"/></figure></PhotoView>
      </PhotoProvider>
        <div className="card-body ">
          <h2 className="card-title -m-6 px-5">{title.slice(0,50)}...</h2>
          <p className='mt-5'>Price : {price}</p>
          <p className='text-yellow-400 text-sm'>Review : {review} <Star></Star> <Star></Star> <Star></Star> <Star></Star></p>
          <div className="flex justify-between">
          <div className="flex">
            {
         Category?.imgInfo.map((image,i) =><ImgCategory
         key={i}
          image={image}
      >
      </ImgCategory> )
      
            }
          </div>
          <Link to={`/productCategory/${_id}`}><button style={{backgroundColor:"teal"}} className="btn ml-3">View Details</button></Link>
          </div>
        </div>  
        <div className=''>
          <div className='absolute top-0 ml-32  flex text-xl mt-32  '>
          <div onClick={()=>CartIcon(Category)}  className='mr-4 text-xl text-white '>
          <ShoppingCartOutlined></ShoppingCartOutlined>
          </div>
          <div className='mr-4 text-xl text-white'>
          <SearchOutlined></SearchOutlined>
          </div>
         <div className='mr-4 text-xl text-white'>
         <FavoriteBorderOutlined></FavoriteBorderOutlined>
         </div>
          </div>
          </div>
        </div>


/* <div className='border hover:translate-y-10 transition-all hover:shadow-lg'>
  <div className=''>
    <img className='w-80   h-60 p-2'  src={Category?.image}></img>
    <div className="card-body">
    <h2 className="">{title}</h2>
    <p>{price}</p>
   <p className='text-yellow-400 text-sm'>Review : {review} <Star></Star> <Star></Star> <Star></Star> <Star></Star></p>
  </div>
  <div className="flex justify-between relative  mt-5">
     <div className="flex items-center">
       {
   Category?.imgInfo.map((image,i) =><ImgCategory
   key={i}
    image={image}
>
</ImgCategory> )

      }
    </div>
    <Link to={`/productCategory/${_id}`}><button style={{backgroundColor:"teal"}} className="btn ml-3">View Details</button></Link>
    </div>
  </div>
</div> */



    );
};

export default SingleCategory;