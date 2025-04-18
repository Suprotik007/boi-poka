import React, { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import { getStoredBook } from '../../Utilities/addToDB';
import SingleBook from '../Books2/SingleBook';
import { Link } from 'react-router';
import WishList from '../../Components/Wishlist/WishList';


const ReadList = () => {
    const [readList,setReadList]=useState([])
    const data=useLoaderData()
    console.log(data);
    useEffect(()=>{
const storedBookData=getStoredBook()
    // console.log(storedBookData);
    const convertStoredBook=storedBookData.map(id=>parseInt(id))
    // console.log(covertStoredBook);
    const myReadList=data.filter(book=>convertStoredBook.includes(book.bookId))
    setReadList(myReadList);
    },[])
    
    return (
        <div >
        <Tabs className='rounded-2xl '>
    <TabList className='bg-black text-amber-300 p-2 rounded-2xl mx font-semibold  w-fit mx-auto mt-15  font-mono '>
      <Tab  >Marked As Read</Tab>
      <Tab>Added To Wishlist</Tab>
    </TabList>

    <TabPanel className='grid grid-cols-3'>
      <h2 className='  font-mono font-semibold mt-6 p-3 items-center px-5'>Total books: <span className='badge  font-mono font-semibold bg-lime-500 mb-4 mt-4 p-3'>{readList.length}</span></h2>
      
      <div className='grid lg:grid-cols-3 gap-10 md:grid-cols-2 sm:grid-cols-1 '>
      
      {
        readList.map(b=><SingleBook key={b.bookId} book={b}></SingleBook>)
      }
 
      </div>
    
    </TabPanel>

    {/* <TabPanel className='grid grid-cols-3'>
      <h2 className='  font-mono font-semibold mt-6 p-3 items-center px-5'>Total books: <span className='badge  font-mono font-semibold bg-lime-500 mb-4 mt-4 p-3'>{wishList.length}</span></h2>
      <div className='grid lg:grid-cols-3 gap-10 md:grid-cols-2 sm:grid-cols-1 '>
      {
        wishList.map(b=><SingleBook key={b.bookId} book={b}></SingleBook>)
      }
      </div>
    </TabPanel> */}
    
    <TabPanel>
  <WishList></WishList>
</TabPanel>

    
    
  </Tabs>
        </div>
    );
};

export default ReadList;