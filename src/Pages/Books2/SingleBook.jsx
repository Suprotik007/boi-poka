import React, { use } from 'react';
import { FaStarHalfAlt } from "react-icons/fa";
import { Link } from 'react-router';
const SingleBook = ({book}) => {
    // const data=use(bookPromise)
    // console.log(book);
    const {bookName,author,image,tags,bookId,category,publisher,yearOfPublishing,rating}=book;
 
    
    return (
        <Link to={`./bookDetails/${bookId}`}>
        <div className="card  rounded-3xl w-[374px] h-[480px] shadow-lg  border-dashed border-3 hover:bg-amber-100 md:mx-auto sm:mx-auto">
  <figure className=' px-24 mx-6 mt-8 bg-[#F3F3F1]'>
    <img className='w-[101px] h-[220px] py-8'
      src={image}
      alt="books" />
  </figure>
  <div className="card-body px-8 py-8">
  <div className='flex gap-10 justify-center'>
    {
        tags.map(tag=><button className=" font-mono font-semibold bg-amber-200 p-2 badge rounded-2xl" >{tag}</button>)
    }
  </div>
    <h2 className="card-title text-3xl justify-between font-bold font-mono">
      {bookName}
      <div className="badge  font-mono font-semibold bg-lime-200 mb-4 mt-6 p-3 px-5">{yearOfPublishing}</div>
    </h2>
    <p className='font-mono font-semibold'>By {author}</p>
    <div className=''>
    <div className="card-actions justify-end">
      {/* <div className="badge badge-outline bg-black text-amber-300  ">{category}</div> */}
       <div className="badge badge-outline font-mono font-semibold  bg-teal-200">{category}</div> 

      <div className="badge badge-outline font-mono font-semibold items-center bg-blue-200 "><FaStarHalfAlt/>{rating}</div>
    </div>
    <div className=''>
    <div className="badge badge-outline font-mono font-semibold amber-200 text-black p-3 bg-fuchsia-200">{publisher}</div>
    </div>
    </div>
  </div>
</div></Link>
    );
};

export default SingleBook;