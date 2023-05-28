import React from 'react'
import { wordInput } from '../types/types'
import '../styles/word.css'
import Letter from './Letter'

const Word = ({ length }: wordInput) => {
    const lenghtAsNum=parseInt(length);
    const renderLetters = () => {
        return Array.from({ length: lenghtAsNum }, (_, index) => (
          <Letter key={index} />
        ));
      };
    return (
        <div className='word'>
            { renderLetters()}
        </div>
    )
}

export default Word
