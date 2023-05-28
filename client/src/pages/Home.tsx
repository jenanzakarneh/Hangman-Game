import React, { KeyboardEvent, useEffect, useRef, ChangeEvent, useState } from 'react'
import Keybad from '../components/Keypad';
import Hangman from '../components/Hangman';
import Word from '../components/Word';
import '../styles/home.css'
const Play = () => {
    const divRef = useRef<HTMLDivElement>(null);

    const [start, setStart] = useState(false);
    const [wordLength, setWordLength] = useState<string>("7");
    const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
        setWordLength(event.target.value);
    }
    const handleKeyDown = (event: KeyboardEvent<HTMLDivElement>) => {
        const pressedKey: string = event.key;
        console.log('key', pressedKey, ' presserd');
    }

    useEffect(() => {//focus to enable capturing keyboard events 
        if (divRef.current) {
            divRef.current.focus();
        }
    }, [start]);
    return (
        <div className='home' >
            {start && <div onKeyDown={handleKeyDown} tabIndex={-1} ref={divRef}>
                <Word length={wordLength} />
                <Hangman />
                <Keybad />

            </div>}
            {!start && <div className='start'>
                <button onClick={() => setStart(true)}> start the game</button>
                <div>
                    <label htmlFor="number-of-letters">Sellect Word Length</label>
                    <input type='number' name='number-of-letters' min="3" max="7" onChange={handleChange} />
                </div>
            </div>}

        </div>
    )
}

export default Play
