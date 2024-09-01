import React from 'react';

function CoreFeature({ image, title, description, days, price }) {
    return (
        <div className="core-feature w-96  flex flex-col gap-5  bg-primary-50 ">
            <div className='relative'>
                <img src={image} alt={title} className="feature-image w-96 h-64 rounded object-cover"/>
                <span className='absolute bottom-0 right-0 p-2 bg-primary-50 rounded-tl-lg ' >November 18, 2023</span>
            </div>
            <div className='w-96 h-auto pt-5 px-4 pb-0 '>
                <h1 className='text-xl mb-2 text-brz-black'>{title}</h1>
                <p className='text-base text-brz-black'>{description}</p>
            </div>
            <div className='pt-2 px-4 pb-4 flex justify-between '>
                <span className='text-sm text-primary-700'>{days} days</span>
                <span className='text-sm text-primary-700'>From ¥{price}</span>
            </div>
        </div>
    );
}

export default CoreFeature;