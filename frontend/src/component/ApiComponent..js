import {React, useState, useEffect} from 'react';
import axios from "axios";

const ApiComponent = () => {
    const [data, setData] = useState(null);

    useEffect(() => {
        const call = async () =>{
            const {data} = await axios.get("/api/hello");
            setData(data);
        }
        call();
    },[])

    console.log(data);
    return (
        <div>
            {data}
        </div>
    );
};

export default ApiComponent;
