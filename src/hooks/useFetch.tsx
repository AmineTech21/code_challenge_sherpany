import React, { useEffect, useState } from 'react'

const useFetch = <T,> (url: string, initialState: T): [T, boolean] => {
    const [data, setData] = useState<T>(initialState);
    const [loading, setLoading] = useState(false)
    useEffect(() => {
        setLoading(true)
        fetch(url)
            .then((res) => res.json())
            .then((data) => {
                console.log(data.results)
                setData(data.results)
            })
        .finally(() => setLoading(false))
    }, [url])

    return [data, loading]
}

export default useFetch
