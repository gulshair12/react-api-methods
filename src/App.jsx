import { useState, useEffect } from 'react';
import axios from 'axios';


export const App = () => {


const [data, setdata] = useState([])

const getdata = async () =>{
  try {
    // const response = await axios.get('https://jsonplaceholder.typicode.com/posts')
    // const response = await axios.post('https://jsonplaceholder.typicode.com/posts', 
    // {  
    //     "userId": 1,
    //     "id": 1,
    //     "title": "Sending a post...",
    //     "body": "some body for the post data"
      
    // })

    // const response = await axios.put('https://jsonplaceholder.typicode.com/posts/1', 
    // {  
    //     "userId": 1,
    //     "id": 2,
    //     "title": "Updating a post...",
    //     "body": "some body for the post data"
      
    // })

    const response = await axios.put('https://jsonplaceholder.typicode.com/posts/1')

    console.log(response.data)
    // setdata(response.data);
  } catch (error) {
    console.log("error", error)
  }
};

useEffect(() => {
  getdata();
},[]);

  return (
    
    <>
    <h1>Api Integration Methods</h1>
    {/* {data.map ((item) => {
        return <p key={item.id}>{item.title}</p>;
    })} */}
    
    </>
  )
}

