import React, {useState, useEffect} from 'react'

const App = () => {
  const [studentData, setStudentData] = useState([])

  useEffect(() => {
    const getData = async () => {
      try {
        let response = await fetch('http://localhost:3005/api')
        let data = await response.json()
        setStudentData(data)
       

      } catch (error) {
        console.log(error.message)
      }
    }
  getData()
  
  }, [])
  
  return (
    <>
    <h1>Hello March 23 Cohort</h1>
    <ul>
      {studentData.map(student =>{
        return <li key={student.id}>{student.name}</li>
      })}

    </ul>
  
    
    </>
  )
}

export default App
