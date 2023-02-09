import React from 'react';

const ImgCategory = ({image}) => {
    const {img1,img2,img3,img4}=image;
    return (
        <div className='flex'>
             <figure><img className=" rounded-full w-10 h-10  relative" src={img1} alt=""/></figure>

             <figure><img className=" rounded-full w-10 h-10  relative" src={img2} alt=""/></figure>

             <figure><img className=" rounded-full w-10 h-10  relative" src={img3} alt=""/></figure>

             <figure><img className=" rounded-full w-10 h-10  relative" src={img4} alt=""/></figure>
        </div>
    );
   
};

export default ImgCategory;