import React from 'react';

const ErrorPage = () => {
    return (
        <div className=''>
            <h1 className='text-9xl font-mono font-extrabold  text-center text-fuchsia-700 p-48'> Page <br /> Not <br /> Found</h1>
            <p className='text-9xl font-mono font-extrabold  text-center text-red-800 p-20'>('Go Back' if you are seeing this)</p>
        </div>
    );
};

export default ErrorPage;