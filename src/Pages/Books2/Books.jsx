import React, { useEffect, useState } from 'react';

const Books = () => {
    const[allBooks,setAllBooks]=useState([]);
    useEffect(()=>{
        fetch('booksData.json')
        .then((res=>res.json()))
        .then(data=>{console.log(data);
        })
    })
    return (
        <div>
            <h5>books</h5>
        </div>
    );
};

export default Books;