import React from 'react';
import { FEATURES } from './data.js';
import CoreFeature from './CoreFeature';

export const Feature = () => {
    return (
        <section id="feature" className='bg-primary-100 py-14 px-4 md:px-8 lg:px-16'>
            <div className='container mx-auto flex flex-col gap-10 items-center justify-center'>
                <h1 className='text-2xl text-primary-950 py-4 px-2 mb-6 md:text-3xl'>Featured Tours</h1>
                <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-y-10 gap-x-10'>
                    <CoreFeature {...FEATURES[0]} />
                    <CoreFeature {...FEATURES[1]} />
                    <CoreFeature {...FEATURES[2]} />
                    <CoreFeature {...FEATURES[3]} />
                    <CoreFeature {...FEATURES[4]} />
                    <CoreFeature {...FEATURES[5]} />
                </div>
                <a href="" className='mt-6 w-40 h-12 border border-solid border-secondary-500 rounded-lg py-3 px-6 text-center flex items-center justify-center text-secondary-500 hover:bg-secondary-100 transition'>
                    All Tours
                </a>
            </div>
        </section>
    );
};
