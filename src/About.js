import { useState } from "react";
import { slides } from "./slides";
import "./App.css";

function About() {
    const [images,setImages] = useState(0);
    const {description,image} = slides [images];
    const [showMore,setShowMore] = useState(false);
    const previousSlide = () =>{
        setImages((image =>{
            image--;

            if(image < 0){
                return slides.length - 1
            }
            return image
        }))
    }

    const nextSlide = () => {
        setImages((image =>{
            image++;
        if (image > slides.length -1){
            image=0
        }
        return image
        }))
    }
    return(
        <div className="slideshowContainer">

            <div className="container">
                <h1>HISTORY OF THE BRAND</h1>
            </div>

            <div className="container">
                <p>{showMore ? description : description.substring(0,170) + "...."}
                <button onClick={() => setShowMore(!showMore)}>{showMore ? 'Show Less' : 'Show More'}</button></p>
            </div>

            <div className="container">
        <img className="slider" src={image} alt='Clothes' width='500px'/>
            </div>

            <div>
                <button className="previousButton" onClick={previousSlide}>❮</button>
                <button className="nextButton" onClick={nextSlide}>❯</button>
            </div>




        </div>
    )
}

export default About;