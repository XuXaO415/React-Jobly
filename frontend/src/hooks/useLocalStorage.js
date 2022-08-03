import React, { useState } from 'react';

function useLocalStorage(key, initialValue) {
    // useState to store the value in local storage
    const [storedValue, setStoredValue] = useState(() => {
            try {
                // get the value from local storage
                const item = window.localStorage.getItem(key);
                // parse the value from local storage as JSON
                return item ? JSON.parse(item) : initialValue;
            } catch (err) {
                // if there is an error, log it
                console.error(err);
                // and return the initial value
                return initialValue;
            }
        }
        // set the value in local storage
        , (value) => {
            try {
                // stringify the value to save it as a string
                window.localStorage.setItem(key, JSON.stringify(value));
            } catch (err) {
                // if there is an error, log it
                console.error(err);
            }
        }
    );
    // return the stored value and the setter function
    return [storedValue, setStoredValue];
}

export default useLocalStorage;