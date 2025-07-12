import { useCallback, useEffect, useState } from "react";

async function sendHttpReq(url, config) {

    const res = await fetch(url, config);
    const resData = await res.json();
    if (!res.ok) {
        throw new Error(resData.message || "Something went wrong")
    }
    return resData;

}
export default function useHttp(url,config,initialData) {
  
    const [data, setData] = useState(initialData)
    const [isLoading, setIsLoading] = useState(false)
    const [error, setError] = useState()
      function clearData(){
        setData(initialData)
    }

    const sendReq = useCallback(async function sendReq(data) {
        setIsLoading(true)
        try {
            const resData = await sendHttpReq(url,{...config,body:data})
            setData(resData)
        } catch (error) {
            setError(error.message || "something went Wrong")
        }
        setIsLoading(false)
    }, [url,config])
    useEffect(() => {
        if(config && config.method==='GET')
            sendReq()
    }, [sendReq,config])

    return { data, isLoading, error,sendReq,clearData }

}