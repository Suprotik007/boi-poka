import React from 'react';
import bookImg from '../../assets/chess.jpg'
const Banner = () => {
    return (
        <div className="hero bg-lime-50 h-[480px] p-10 rounded-4xl m-15 mx-auto">
  <div className="hero-content flex-col lg:flex-row-reverse">
    <img
      src={bookImg}
      className="w-[318px] h-[394px] rounded-lg shadow-2xl" />
    <div>
      <h1 className="text-5xl mb-8 text-black font-mono font-bold">Books to freshen up your bookshelf</h1>
      
      <button className="btn btn-primary bg-[#23BE0A]">View The List</button>
    </div>
  </div>
</div>
    );
};

export default Banner;