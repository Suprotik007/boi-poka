import React, { Suspense,useEffect, useState } from 'react';
import SingleBook from './SingleBook';

const Books = ({data}) => {
    const[allBooks,setAllBooks]=useState([]);
    // useEffect(()=>{
    //     fetch('booksData.json')
    //     .then((res=>res.json()))
    //     .then(data=>{console.log(data);
    //     })
    // },[])

    // const bookPromise=fetch('booksData.json')
    // .then(res=>res.json())
    return (
        <div>
            <h1 className='text-7xl font-semibold font-mono text-center mb-[36px] mt-[100px]'>Books</h1>
            <Suspense fallback={<span>Loading....</span>}>
                {/* <SingleBook data={data}></SingleBook> */}
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10'>
                {
                    data.map((book)=><SingleBook key={book.bookId} book={book}></SingleBook>)
                }
                </div>
            </Suspense>
        </div>
    );
};

export default Books;