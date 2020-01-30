import React from 'react';
import img from '../assets/images/fondop1.jpeg'
import audio from '../assets/audio/s1.mp3'


const Slider = () => {

    return (
        <>
            <section className="main">
                <img src={img} alt="fondo-payaso" className="img1" />
                <div className="text-body">
                    <p className="item-body">ATREVETE!!!</p>
                </div>

            </section >

            <div>
                <audio src={audio} autoPlay loop />
            </div> 
        </>

    )
}


export default Slider