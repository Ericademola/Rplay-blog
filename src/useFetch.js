import { useState, useEffect } from "react";


const useFetch = (url) => {

    const [data, setData] = useState(null);
    const [isPending, setIsPending] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        setTimeout(() => {
            fetch(url)
                .then(res => {
                    if ( !res.ok ) {
                        throw Error('could not fetch the data for the resource');
                    }
                    return res.json();
                }).then((data) => {
                    console.log(data);
                    setData(data);
                    setIsPending(false);
                    setError(null);
                })
                .catch(err => {
                    setError(err.message);
                    setIsPending(false);
                })
        }, 1000);
            console.log("use effect ran");
            // console.log(name);
    }, []);

    return { data, isPending, error }
}

export default useFetch