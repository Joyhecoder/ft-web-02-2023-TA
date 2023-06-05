import React, {useState, useEffect} from 'react'

const LanguagePicker = () => {
    const [flag, setFlag] = useState('🇬🇧')
    const [moreFlagsArr, setMoreFlagsArr] = useState([])
    const flagArr = ['🇰🇷', '🇯🇵', '🇨🇳', '🇪🇸', '🇲🇽', '🇩🇪', '🇨🇭', '🇬🇧']

    const fourFlags = []
    const handleMoreFlags = () => {
        while(fourFlags.length < 4){

            const randomIndex = Math.floor(Math.random() * flagArr.length)
            const randomFlag = flagArr[randomIndex]

            //check if the random element is already selected or the default flag
            if(!fourFlags.includes(randomFlag && randomFlag != flag)){
                fourFlags.push(randomFlag)
            }
        }
        console.log(fourFlags)
        setMoreFlagsArr(fourFlags)
    }

    const handleClick = (e) => {
        console.log(e.target.value)
        setFlag(e.target.value)
    }

    useEffect(() => {
      setMoreFlagsArr([])
    }, [flag])
    
  return (
    <>

        <h1>{flag}</h1>
        <button onClick={()=>handleMoreFlags()}>{flag}</button>
        {moreFlagsArr.length != 0 ? moreFlagsArr.map(flagObj=>{
            console.log(flagObj)
            return( <button value={flagObj} onClick={(e)=> handleClick(e)}>{flagObj}</button>)
        })
    :
    <>Click to see 4 more flags</>}

    </>
  )
}

export default LanguagePicker