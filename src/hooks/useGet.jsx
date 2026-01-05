import axios from 'axios';
import React, { useEffect, useState } from 'react'

function useGet(url) {

    const [data, setData] = useState([]);

    useEffect(() => {
        async function getData() {
            try {
                let res = await axios(`https://693d1ae6f55f1be79301e90f.mockapi.io/${url}`);
                setData(res.data);
            } catch (err) {
                console.log(err);
            }
        }
        getData();
    }, [url]);

  return { data }
}

export default useGet