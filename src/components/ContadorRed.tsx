import { useReducer } from 'react';

const initialState = {
    contador: 10,
}

type ActionType = 
    | { type: 'incrementar' }
    | { type: 'decrementar' }
    | { type: 'custom', payload: number };


// Action is what I use to modify the state
const contadorReducer = ( state: typeof initialState, action: ActionType ) => {

    // We don't modify the state. We just create a new State
    switch ( action.type ) {
        case 'incrementar':
            // We don't modify the state here we are going to return a new state
            return {
                ...state,
                contador: state.contador + 1
            }


        case 'decrementar':
            return {
                ...state,
                contador: state.contador - 1
            }

        case 'custom':
            return {
                ...state,
                contador: action.payload
            }
            
        // We use this in case that we use an action that hasn't been define above
        default:
            return state;
    }
}

export const ContadorRed = () => {

    const [ { contador }, dispatch] = useReducer(contadorReducer, initialState);


    return (
        <>
         <h2>Contador: { contador }</h2> 
         <button className="btn btn-outline-primary"
                onClick={ () => dispatch({ type: 'incrementar' }) }>
            +1
         </button>
         <button className="btn btn-outline-primary"
                onClick={ () => dispatch({ type: 'decrementar' }) }>
            -1
         </button>

         <button className="btn btn-outline-danger"
                onClick={ () => dispatch({ type: 'custom', payload: 100 }) }>
            100
         </button>
        </>
    )
}
