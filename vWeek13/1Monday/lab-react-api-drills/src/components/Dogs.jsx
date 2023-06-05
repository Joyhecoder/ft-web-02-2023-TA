import React, {useState, useEffect} from 'react'

const Dogs = () => {
  const [loading, setLoading] = useState(false)
  const [dogsData, setDogsData] = useState('')
  //initially load the web page the first time, display an img
  useEffect(() => {
    
   fetchDog()
  }, [])

  const fetchDog = async () => {
    try {
      setLoading(true)
      let response = await fetch('https://dog.ceo/api/breeds/image/random')
      let data = await response.json()
      console.log(data.message)
      setDogsData(data.message)
      setLoading(false)
    } catch (error) {
      console.log(error)
    } 
   }

  return (
    <>
      <button onClick={fetchDog}>Get Random Dog Image</button>
      {loading ? 
      <h3>loading...</h3>
      :
      <img src={dogsData} height={'250px'} alt="" />
    }
    </>
  )
}

export default Dogs
