import { useEffect, useState } from "react"
import axios from 'axios'


const useFetch = (url) => {
    const [data, setData] = useState([])
    const [isLoading, setIsLoading] = useState(true)
    const [isError, setIsError] = useState(false)

    useEffect(() => {
        try {
            const fetchdata = async () => {
                let res = await axios.get(url)
                let data = (res && res.data) ? res.data : []
                setData(data)
                setIsLoading(false)
                setIsError(false)
            }
            setTimeout(() => {
                fetchdata()
            }, 3000);
        } catch (e) {
            setIsError(true)
            setIsLoading(false)
            console.log(e)
        }

    }, [url])
    return {
        data, isLoading, isError
    }
}

export default useFetch