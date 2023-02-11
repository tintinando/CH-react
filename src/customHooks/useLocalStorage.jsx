import { useState } from "react";

export const useLocalStorage = (key, initialvalue) => {
    const [storedValue, setStoredValue] = useState(() => {
        try {
            const item = window.localStorage.getItem(key);
            return item ? JSON.parse(item) : initialvalue;
        } catch (error) {
            return initialvalue;
        }
    });

    const setValue = value => {
        try {
            setStoredValue(value);
            
            window.localStorage.setItem(key, JSON.stringify(value));
        } catch (error) {
            console.error(error);
        }
    }

    return [storedValue, setValue];
}