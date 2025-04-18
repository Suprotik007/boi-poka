import React from 'react';
import { useLoaderData, useParams } from 'react-router';
import SingleBook from '../../Pages/Books2/SingleBook';
import { FaStarHalfAlt } from "react-icons/fa";
import { RiBookmark3Fill } from "react-icons/ri";
import { addToStoreDB } from '../../Utilities/addToDB';
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'
import { addToWishList } from '../../Utilities/addToWishList';

const MySwal = withReactContent(Swal)

const BookDetails = () => {
    const {id}=useParams()
    const bookId=parseInt(id)
    const data=useLoaderData()
    
    const Book=data.find(singleBook=>singleBook.bookId===bookId)
    // console.log(Book);
     const {bookName,author,review,image,tags,category,publisher,yearOfPublishing,rating,totalPages}=Book;

     const handleMarkAsRead=id=>{
        MySwal.fire({
            position: "top-end",
  icon: "success",
  title: "added To Read-list",
  showConfirmButton: false,
  timer: 1500
});
        addToStoreDB(id)

     }
    const handleWishList=id=>{
        MySwal.fire({ 
            position: "top-end",
            icon: "success",
            title: "Added To Wishlist",
            showConfirmButton: false,
            timer: 1500
          });
        addToWishList(id)
    }
    
    return (
        <div className=' bg-amber-50 p-10 rounded-2xl mx-auto flex gap-20 mt-10 items-center'>
            
            <figure className='w-800 h-180 px-15 py-25 rounded-2xl  b-[#F3F3F1]'>
    <img className='w-700 h-100  border-2 border-dotted '
      src={image}
      alt="books" />
  </figure>
            <div>
            <h2 className="card-title text-3xl justify-between font-bold font-mono">{bookName}</h2>
            <p className=' items-center font-mono mt-3 font-semibold'>Author: <span className='badge font-mono mt-2 font-semibold bg-red-300 text-black'>{author}</span></p>
            <p className='font-semibold font-mono mt-3'> Category : <span className="badge font-mono font-semibold  bg-teal-200  ">{category}</span></p>
            <p className='font-mono font-semibold  border-t-2 border-b-2 border-dashed p-3 mt-5 text-lg' >Review: <span className='font-medium text-purple-800'>{review}</span></p>

            <div className='flex gap-5 mt-5'><p className='font-semibold font-mono '>Tags :</p>
    {
        tags.map(tag=><button className=" font-mono font-semibold bg-amber-200 p-2 badge rounded-2xl" >#{tag}</button>)
    }
     </div>
     <div className='font-semibold font-mono mt-4'>Number of Pages : <span className="badge font-mono font-semibold amber-200 text-black p-2 bg-fuchsia-300 ">{totalPages}</span></div>
     <div className='font-semibold font-mono mt-3'> Publisher : <span className="badge font-mono mt-2 font-semibold bg-orange-300 text-black p-2 ">{publisher}</span></div>
     <div className='font-mono font-semibold' >Year Of Publishing : <span className="badge  font-mono font-semibold bg-lime-200 mb-4 mt-6 p-3 px-5 items-center">{yearOfPublishing}</span></div>
<div className='font-mono font-semibold mt-2' > Rating : <span className="badge p-3 font-mono font-semibold items-center bg-blue-200 "><FaStarHalfAlt/>{rating}</span></div>
            <div className='mt-8 '>
            <button onClick={()=>handleMarkAsRead(id)} className="btn btn-accent btn-lg">Mark As Read</button>
            <button onClick={()=>handleWishList(id)} className="btn btn-info m-2 btn-lg "><RiBookmark3Fill /> Add To Wishlist</button>
            </div>
    </div>
            
    </div>
    );
};

export default BookDetails;