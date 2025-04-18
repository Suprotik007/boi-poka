import React, { Suspense } from 'react';
import SingleBook from './SingleBook';

const Books = ({data}) => {
    
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