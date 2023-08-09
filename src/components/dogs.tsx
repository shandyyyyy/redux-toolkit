import { useState } from "react";
import { useFetchBreedsQuery } from "../store/dogs/dogAPISlice";


function Dogs() {
  const [numDogs, setNumDogs] = useState(10) 
  const {data = [], isFetching}  = useFetchBreedsQuery(numDogs)


  return (
    <>
    {
      isFetching? 
      <p>Loading...</p>:
    <div> 
      <p>Dogs to fetch:</p>
      <select value={numDogs} onChange={(e)=>setNumDogs(Number(e.target.value))}>
        <option value="10">10</option>
        <option value="30">30</option>
        <option value="50">50</option>
      </select>
     <p>Numbers of dogs fetched: {data.length}</p> 
     <ul>
      {
        data.map(dog => {
          return <li key={dog.id}>
            <p>name: {dog.name}</p>
            <p>picture: {dog.image.url}</p>
            <p><img src={dog.image.url} width={50} height={50}/></p>
          </li>
        })
      }
      
     </ul>
    </div>
    }
    </>
  )
}

export default Dogs