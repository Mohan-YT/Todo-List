import axios from 'axios';
import { useEffect, useState } from 'react'

const UseAxiosFetch = (dataURL) => {
    const [data,setData] = useState([]);
    const [isLoading,setIsLoading] = useState(false);
    const [error,setError] = useState(null);

    useEffect(()=>{
        let isMounted = true;
        const source = axios.CancelToken.source()  //for cancel the datafetching opration
        const fetchData = async (url)=>{
            setIsLoading(true);
            try{
                const responce = await axios.get(url,{cancelToken : source.token});
                if(isMounted){
                    setData(responce.data)
                    setError(null)
                }
            }catch(err){
                if(isMounted){
                    setError(err.message);
                    setData([])
                }
            }finally{
                isMounted && setTimeout (()=> setIsLoading(false),1000)
            }
        }
        fetchData(dataURL)
        const cleanUp = ()=>{
            isMounted = false;
            source.cancel()
        }
        return cleanUp

    },[dataURL])

  return {data,error,isLoading}
}

export default UseAxiosFetch
