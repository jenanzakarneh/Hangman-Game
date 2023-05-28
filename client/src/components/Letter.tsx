import React from 'react'
import { letterInput } from '../types/types'
import '../styles/letter.css'
const Letter = ({ value }: letterInput) => {
    return (
        <div className='letter'>
            {value}
        </div>

    )
}

export default Letter
