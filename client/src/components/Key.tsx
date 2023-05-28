import { keyInput } from '../types/types';
import '../styles/key.css'
const Key = ({letter}:keyInput) => {
const clicked=()=>{
  console.log(`Key ${letter} clicked`)
}
  return (
    <button className="key" onClick={clicked}>
      {letter}
    </button>
  );
}

export default Key
