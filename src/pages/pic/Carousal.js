import React, { useState } from 'react';
import next from './next.png';
import previous from './previous.png';
import img2 from './Flower1.jpg';
import img3 from './Leaf.jpg';
import img4 from './Flower3.jpg';
import img5 from './Sparkles.jpg';
import img6 from './Web.jpg';
import img7 from './Flower.jpg';
import img1 from './BlueFlower.jpg';
import './Photo.css'


const Carousel = () => {

    const Images = [
        { image: img1 },
        { image: img2 },
        { image: img3 },
        { image: img4 },
        { image: img5 },
        { image: img6 },
        { image: img7 },
    ];
    const [Current, setCurrent] = useState(0);
    const length = Images.length;
    const handlePrevious = () => {
        setCurrent(Current === 0 ? length - 1 : Current - 1);
    };

    const handleNext = () => {
        setCurrent(Current === length - 1 ? 0 : Current + 1);
    };

    if (!Array.isArray(Images) | Images.length <= 0) {
        return null;
    }

    return (
        <div className="background">

            <div className="Content">

                <div className='Text'>
                    <div className="Photographer">Photographer Side</div><br></br>
                    <div className="Para"><p>Its more than safe to say that I am a good Photographer. I mostly take photos of nature, which includes flowers, leaves and water. But I love to capture the moments with the essence of the memories. I have taken Candids too, which turned out to be perfect shots. <br></br> <br></br>  A sample of my photography skill is shown here</p> </div>
                </div>


                <div className="carousel">

                    <div>
                        <button onClick={handlePrevious} ><img src={previous} alt="left arrow" width='50vw' height='auto'></img></button>
                    </div>
                    <div>
                        {Images.map((slide, index) => {
                            return (
                                <div className={index === Current ? 'slide active' : 'slide'} key={index}>
                                    {index === Current && (<img src={slide.image} alt="" width='200vw' height='auto' className='Image' />)}
                                </div>
                            )
                        })}
                    </div>
                    <div>
                        <button onClick={handleNext}><img src={next} alt="right arrow" width='50vw' height='auto'></img></button>
                    </div>
                </div >

            </div>
        </div>
    );
};

export default Carousel;