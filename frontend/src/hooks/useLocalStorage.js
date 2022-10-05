import React, {
    useState,
    useEffect,
    Component,
} from 'react';



// const useLocalStorage = (key, initialValue = null) => {
//     const firstValue = localStorage.getItem(key) || initialValue;
//     const [value, setValue] = useState(firstValue);

//     useEffect(() => {
//         console.debug("hooks useLocalStorage useEffect", "value=", value, "key=", key);
//         try {
//             if (value === null) {
//                 console.debug(`${key} was removed`);
//                 localStorage.removeItem(key);
//             } else {
//                 console.debug(`Token is set to ${key}`);
//                 console.log("key=", key);
//                 localStorage.setItem(key, value);
//             }
//         } catch (error) {
//             console.error(error);
//         }
//     }, [key, value]);

//     return [value, setValue];
//}

function useLocalStorage(key, initialValue = null) {
    // useState to store the value in local storage
    const firstValue = localStorage.getItem(key) || initialValue;
    const [storedValue, setStoredValue] = useState(firstValue);
    // set the value in local storage

    React.useEffect(() => {
        localStorage.setItem(key, storedValue);
        console.debug("Hook is running & using 'useLocalStorage', useEffect", "storedValue=", storedValue);
        // [object is] key-value pair, if key is null, remove the key from local storage
        if (storedValue === null) {
            localStorage.removeItem(key);
        } else {

            localStorage.setItem(key, storedValue);
        }
    }, [key, storedValue]);
    // return the stored value and the setter function
    return [storedValue, setStoredValue];
}

export default useLocalStorage;


//https://javascript.info/localstorage
//https://www.taniarascia.com/how-to-use-local-storage-with-javascript/