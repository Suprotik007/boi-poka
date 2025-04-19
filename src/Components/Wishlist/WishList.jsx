

import React, { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router'; // Make sure to import from 'react-router-dom'
import { getWishedBook } from '../../Utilities/addToWishList';
import SingleBook from '../../Pages/Books2/SingleBook';

const WishList = () => {
  const [wishList, setWishList] = useState([]);
  const data = useLoaderData();

  useEffect(() => {
    const storedBookData = getWishedBook(); // Call the function!
    const convertStoredBook = storedBookData.map(id => parseInt(id));
    const myWishList = data.filter(book => convertStoredBook.includes(book.bookId));
    setWishList(myWishList);
  }, [data]);

  return (
    <div>
    
      <h2 className='font-mono font-semibold mt-6 p-3 items-center px-5'>
        Total books: <span className='badge font-mono font-semibold bg-lime-500 mb-4 mt-4 p-3'>{wishList.length}</span>
      </h2>
      <div className='grid lg:grid-cols-3 gap-10 md:grid-cols-2 sm:grid-cols-1 sm:mx-auto mb-3'>
        {wishList.map(b => <SingleBook key={b.bookId} book={b} />)}

        
      
          
      </div>
    </div>
  );
};

export default WishList;
