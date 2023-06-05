import React, {useState} from 'react'
import UserCard from './UserCard'

const RandomUser = () => {
  const [number, setNumber] = useState(1)
  const [data, setData] = useState([])


  
  
  const handleFetchUser = async () => {
    try {
      let url = `https://randomuser.me/api/?results=${number}`
      let response = await fetch(url)
      let data1 = await response.json()
      console.log(data1)
      setData(data1.results)

      console.log(data)
      
    } catch (error) {
      console.log(error)
    }
  }
  return (
    <>
    <div className="fetch">
      <h1>How many users do you want to fetch?</h1>
      <input type="text" placeholder='enter a number only' onChange={(e)=>setNumber(e.target.value)}  />
      <button onClick={()=>handleFetchUser()}>submit</button>
    </div>

    {data.map(dataObj=>{
      return <UserCard key={dataObj.id.value} data={dataObj} />
    })}
      
    </>
  )
}

export default RandomUser
