import { useState,useEffect } from "react";

import "./App.css";
// import { useEffect } from "react";
import axios from "axios";
function App() {
  // const [count, setCount] = useState(0)
  // const [products,error,loading]=CustomReactQuery('/api/products')
  const [products,setProducts]=useState([]);
  const [error , setError]=useState(false)
  const [loading , setLoading]=useState(false)
  const [search,setSearch]=useState('')
useEffect(()=>{
  const controller = new AbortController()
  ;(async()=>{
    try{
      setLoading(false)
      setError(false)
    const response = await axios.get('/api/? search=' + search,{
      signal:controller.signal
    })
    console.log(response.data)
    setProducts(response.data)
    setLoading(false)
    } catch(error){
      if (axios.isCancel(error)){
        console.log("Request Cancelled",error.message);
        return;
      }
      setError(true)
      console.log("error while fetching the products",error);
      setLoading(false);
    }
  })()
  // Clean Up
  return()=>[
    controller.abort()
  ]
},[search])
  
// if(error){
//   return <h1> Something Went Wrong</h1>
// }
// if(loading){
//   return <h1>loading...</h1>
// }



  return (
    <>
      <h1>Preet Chauhan</h1>
      <input type="text" placeholder="Search"
      value={search}
      onChange={(e)=>{
        setSearch(e.target.value)
      }}
      />

      {loading && (<h1>Loading...</h1>)}
      {error && (<h1>Something went Wrong</h1>)}
      <h2>Number of Products are:{products.length}</h2>
    </>
  );
};
export default App;

const CustomReactQuery = (urlPath) => {

// return [products,error,loading];
}
