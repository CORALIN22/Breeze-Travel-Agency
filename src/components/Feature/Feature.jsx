import React from 'react';
import { FEATURES } from './data.js';
import CoreFeature from './CoreFeature';

export const Feature = () => {
    return (
        <section id="feature" className='grid grid-cols-1 gap-5 justify-items-center py-14 px-0 rounded'> 
            <h1 className='text-2xl text-primary-950 py-4 px-2 mb-4'>Featured Tours</h1>
            <CoreFeature  {...FEATURES[0]} />
            <CoreFeature  {...FEATURES[1]} />
            <CoreFeature  {...FEATURES[2]} />
        </section>
    );
};