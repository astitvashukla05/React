import { useEffect, useState } from "react";
export default function useFetch(fetchfn,initialValue) {
    const [data, setData] = useState(initialValue)
    useEffect(() => {
        async function fetchData() {
            const places = await fetchfn();
            setData(places)
        }
        fetchData()
    }, [fetchfn])
    return{data,setData}

}