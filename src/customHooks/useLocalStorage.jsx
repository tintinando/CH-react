import { useState } from "react";

export const useLocalStorage = (key, initialvalue) => {
    const [storedValue, setStoredValue] = useState(() => {
        try {
            const item = window.localStorage.getItem(key);
            // item caduca a los 10 minutos
            const keyAge = item ? Date.now() - JSON.parse(item).ts : 0;
            keyAge > 600000 && window.localStorage.removeItem(key)
            return item ? JSON.parse(item).data : initialvalue;
        } catch (error) {
            return initialvalue;
        }
    });

    const setValue = value => {
        try {
            setStoredValue(value);
            window.localStorage.setItem(key, JSON.stringify({ data: [...value], ts: Date.now() }));
        } catch (error) {
            console.error(error);
        }
    }

    return [storedValue, setValue];
}