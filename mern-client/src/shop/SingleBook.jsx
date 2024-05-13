import React from 'react'
import { useLoaderData } from 'react-router-dom'

const SingleBook = () => {
    const {_id, bookTitle, imageURL, bookDescription, authorName ,category} = useLoaderData();
  return (
    <div className='mt-28 px-4 lg:px-24'>
        <img src={imageURL} alt="" className='h-96'/>
       <h1 className='font-extrabold py-5 underline '>{bookTitle}</h1>
       <h2 className='py-3 font-bold'>Written By:-{authorName}</h2>
       <h3 className="font-serif font-bold py-3">The Category of this book is :-{category}</h3>
       <h4 className="font-semibold">Book Description :</h4>
       <p className='py-4'>{bookDescription}</p>
    </div>
  )
}

export default SingleBook 