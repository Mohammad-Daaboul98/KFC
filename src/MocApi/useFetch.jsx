import { useState, useEffect } from "react"

const useFetch = () => {
    const [data, setData] = useState(null)
    const [isPending, setIsPending] = useState(true)
    const [error, setError] = useState(null)


    useEffect(() => {

        const abortCont = new AbortController()

        const getResponse = async () => {
            try {
                const url = "https://63ee26d55e9f1583bdbd1dd9.mockapi.io/api/KFC/Order"
                const response = await fetch(url, { signal: abortCont.signal });
                if (!response.ok) {
                    throw Error('could not fetch data')
                } else {
                    const data = await response.json();
                    setData(data)
                    setIsPending(false)
                    setError(null)
                }
            } catch (err) {
                if (err.name === 'AbortError') {
                    console.log('Fetch abort')
                } else {
                    setIsPending(false)
                    setError(err.message)
                }
            }
        }
        getResponse()

        return () => abortCont.abort()
    }, [])

    
    return { data, isPending, error }
}

export default useFetch;