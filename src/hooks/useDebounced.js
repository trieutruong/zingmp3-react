import { useState, useEffect } from 'react';

function useDebounce(value, delay) {
    const [debounced, setDebounced] = useState(value)

    useEffect(() => {
        setTimeout(() => setDebounced(value), delay)
    }, [value])

    return debounced
}

export default useDebounce;
