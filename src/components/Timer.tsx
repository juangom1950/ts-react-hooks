import { useEffect, useRef, useState } from 'react';

type TimerArgs = {
    milisegundos: number
}

export const Timer = ( { milisegundos }: TimerArgs ) => {

    const [segundos, setSegundos] = useState(0);
    // I need to tell typeScrypt what type of value useRef is going to have
    // I found that value when we hover the cursor over setInterval in line 18
    const ref = useRef<NodeJS.Timeout>();


    useEffect( () => {
        // The clearInterval always need to receive a value, that's why we chack the ref.current 1st
        // otherwise it is going to give us an error
        // If ref.current exist then it is going to execute the clearInterval
        // ? null check could be a solution too. It say if someting exist then show value
        ref.current && clearInterval( ref.current );
        // "s" is the actual value of the state.
        ref.current = setInterval( () => setSegundos( s => s + 1 ) , milisegundos );
    }, [milisegundos])

    return (
        <>
            <h4>Timer: <small>{ segundos }</small></h4>
        </>
    )
}
