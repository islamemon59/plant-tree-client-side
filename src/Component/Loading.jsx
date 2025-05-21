import React from 'react';
import Lottie from "lottie-react";
import walkAnimation from "../walkAnimation.json";

const Loading = () => {
    return (
        <div className='min-h-screen flex justify-center items-center'>
            <Lottie animationData={walkAnimation} />
        </div>
    );
};

export default Loading;