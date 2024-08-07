import Image from 'next/image'
import React from 'react'

function LoadingMap() {
    return (
        <div className='h-full flex flex-row justify-center items-center'>
            <div className='flex items-center gap-2'>
                
                <p className='text-white text-4xl'>Loading Map...</p>
                <Image src="/assets/img/logos/stitchSense-google-map-marker.png" alt="Stitch Sense Google Map Marker" width={50} height={50} />
            </div>
        </div>
    )
}

export default LoadingMap