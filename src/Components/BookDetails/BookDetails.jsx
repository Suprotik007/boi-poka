import React from 'react';
import { useLoaderData, useParams } from 'react-router';
import SingleBook from '../../Pages/Books2/SingleBook';
import { FaStarHalfAlt } from "react-icons/fa";

const BookDetails = () => {
    const {id}=useParams()
    const bookId=parseInt(id)
    const data=useLoaderData()
    
    const Book=data.find(singleBook=>singleBook.bookId===bookId)
    // console.log(Book);
     const {bookName,author,review,image,tags,category,publisher,yearOfPublishing,rating,totalPages}=Book;

    
    
    return (
        <div className='  mx-auto flex gap-20 mt-10 items-center'>
            
            <figure className='w-800 h-180 px-15 py-25 rounded-2xl  bg-[#F3F3F1]'>
    <img className='w-600  '
      src={image}
      alt="books" />
  </figure>
            <div>
            <h2 className="card-title text-3xl justify-between font-bold font-mono">{bookName}</h2>
            <p className='font-mono font-semibold mt-2'>Author: {author}</p>
            <p className='font-semibold font-mono mt-2'> Category : <span className="badge badge-outline font-mono font-semibold  bg-teal-200  ">{category}</span></p>
            <p className='font-mono font-semibold  border-t-2 border-b-2 border-dashed p-3 mt-5' >Review: <span className='font-medium text-purple-800'>{review}</span></p>

            <div className='flex gap-5 mt-5'><p className='font-semibold font-mono '>Tags :</p>
    {
        tags.map(tag=><button className=" font-mono font-semibold bg-amber-200 p-2 badge rounded-2xl" >#{tag}</button>)
    }
     </div>
     <div className='font-semibold font-mono mt-4'>Number of Pages : <span className="badge font-mono font-semibold amber-200 text-black p-2 bg-fuchsia-300 ">{totalPages}</span></div>
     <div className='font-semibold font-mono mt-2'> Publisher : <span className="badge font-mono font-semibold amber-200 text-black p- ">{publisher}</span></div>
     <div className='font-mono font-semibold' >Year Of Publishing : <span className="badge  font-mono font-semibold bg-lime-200 mb-4 mt-6 p-3 px-5 items-center">{yearOfPublishing}</span></div>
<div className='font-mono font-semibold mt-2' > Rating : <span className="badge badge-outline font-mono font-semibold items-center bg-blue-200 "><FaStarHalfAlt/>{rating}</span></div>
            <div className='mt-8 '>
            <button className="btn btn-accent btn-lg">Read</button>
            <button className="btn btn-info m-2 btn-lg ">Wishlist</button>
            </div>
    </div>
            
    </div>
    );
};

export default BookDetails;