import { ACTIONS } from "./App"

export default function DigitButton({ dispatch, digit})
{
    return(
         <button 
         onClick={() => dispatch({ types: ACTIONS.ADD_DIGIT, payload: { digit } })}>
            {digit}
        </button>
    )
}