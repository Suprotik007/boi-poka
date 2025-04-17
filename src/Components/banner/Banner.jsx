import React from 'react';
import bookImg from '../../assets/chess.jpg'
const Banner = () => {
    return (
        <div className="hero bg-[#F3F3F3] border-3 h-[480px] p-10 rounded-4xl m-15 mx-auto mt-20  ">
  <div className="hero-content flex-col lg:flex-row-reverse md:flex-row-reverse sm:flex-row-reverse   ">
    <img
      src={bookImg}
      className="w-[318px] h-[394px] rounded-lg shadow-2xl sm:h-80" />
    <div>
      <h1 className="text-5xl mb-8 text-black font-mono font-bold">Books people are liking most (top selling!)</h1>
      
      <button className="btn text-white rounded-2xl text-2xl font-mono bg-[#23BE0A] border-3 mt-5 p-7 hover:text-black ">View The List</button>
    </div>
  </div>
</div>
    );
};

export default Banner;