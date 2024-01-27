import { useRef } from 'react';

import Box from '@mui/material/Box'
import Button from '@mui/material/Button'

import stitchingVideo from '/assets/video/stitching-hd-black-white.mp4'
import videoPoster from '/assets/video/video-poster.png'
import Stack from '@mui/material/Stack';
import { ICustomHeights } from './HeroSection';

function BackgroundVideo(customHeights: ICustomHeights) {
    const videoRef = useRef<null | HTMLVideoElement>(null);

    const handlePlay = () => {
        if (videoRef.current != null) {
            videoRef.current.play();
        }
    };

    return (
        <Stack direction='row' justifyContent='flex-end'>
            <Button sx={{ display: 'none', zIndex: 1 }} onClick={handlePlay}>Play Video</Button>

            <Box
                component="video"
                poster={videoPoster}
                ref={videoRef}
                sx={{
                    height: { ...customHeights },
                    margin: {
                        xs:'0 auto',
                        md: '0 0 0 auto'
                    },
                    pointerEvents: 'none'
                }}
                autoPlay
                muted
                loop
                playsInline
            >
                <source src={stitchingVideo} type="video/mp4" />
                Your browser does not support the video tag.
            </Box>
        </Stack>
    )
}

export default BackgroundVideo