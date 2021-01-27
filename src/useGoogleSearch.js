import {useState, useEffect} from 'react'
import API_KEY from "./keys";

const CONTEXT_KEY = "7e26bddd56f04771d";

const useGoogleSearch = (term) => {
    const [data, setData] = useState(null);
    

    useEffect(() =>{
        const fetchDATA = async() => {
            fetch(
                `https://www.googleapis.com/customsearch/v1?key=${API_KEY}&cx=${CONTEXT_KEY}&q=${term}`
            )
            .then(response => response.json())
            .then(result => {
                setData(result);
            })
        }
        fetchDATA();
    }, [term])

    return { data }
};

export default useGoogleSearch;