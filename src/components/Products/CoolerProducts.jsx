import axios from 'axios';
import React, { useEffect, useState } from 'react'

const baseURL = 'https://api.greentexpanel.com/wp-json/wc/v3/products?consumer_key=ck_9a9335e667a5caacc400aac2733c69686299cad9&consumer_secret=cs_ec9737b7d27c2906e48102080379242cf734a3b7';
console.log(baseURL);
function CoolerProducts() {

    const [my_data, setData] = useState([]);

    useEffect(() => {
        axios.get(baseURL).then((response) => {
            console.log(response);
            setData(response.data);
        })
    },[]);

  return (
    <React.Fragment>
    {
      my_data.map((item) => {
        const {id, slug, name} = item;
        return (
          <div className='data' key={id}>
          <h1>{id}</h1>
          <h2>{slug}</h2>
          <h3>{name}</h3>
          </div>
        )
      })
    }
        {/* <h1>{my_data.id}</h1>
        <h2>{my_data.title}</h2>
        <h3>{my_data.body}</h3> */}
    </React.Fragment>
  )
}

export default CoolerProducts