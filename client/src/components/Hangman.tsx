import React from 'react'
import '../styles/hangman.css'
const Hangman = () => {
    let currentImage = 0;
    // const flipImage = (): boolean => {
    //     if (currentImage === 10)
    //         return false;
    //     currentImage++;
    //     return true;
    // }
    return (
        <div>
            <img src={`../assets/${currentImage}.jpg`} alt='loading' />
        </div>
    )
}

export default Hangman
