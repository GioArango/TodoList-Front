import { useEffect, useState } from 'react'

export default function useLocalStorage(key: string, initialValue: any) {
    console.log(key, initialValue);
    const [value, setValue] = useState(
        sessionStorage.getItem(key)
            ? JSON.parse(sessionStorage.getItem(key) as string)
            : initialValue
    )

    useEffect(() => {
        console.log('OE', value);
        sessionStorage.setItem(key, JSON.stringify(value))
    }, [key, value])

    return [value, setValue]
}
