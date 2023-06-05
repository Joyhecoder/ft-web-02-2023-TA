import React, {useState, useEffect} from 'react'

const News = () => {
    const [count, setCount] = useState(0)
    const [articles, setArticles] = useState([])
    const [filteredText, setFilteredText] = useState('')
    const [arr, setArr] = useState([])

    useEffect(() => {
      
        const newsData = async () => {

            let response = await fetch('https://newsapi.org/v2/top-headlines?sources=techcrunch&apiKey=0cf790498275413a9247f8b94b3843fd')
            let data = await response.json()
            console.log(data)
            setArticles(data.articles)
        }
        
        newsData()
        console.log(articles)
    
      console.log("inside use effect")
    }, [])
    



    const handleChange = (e) => {
        
        setFilteredText(e.target.value)
        let filteredArticle = articles.filter(artObj => {
            return artObj.title.toLowerCase().includes(filteredText.toLowerCase())
        })

        setArr(filteredArticle)
       
    }
  return (
    <>
    {/* <h1>{count}</h1>
    <button onClick={()=>setCount(count + 1)}>Increment</button> */}

    <input type="text" value={filteredText} onChange={handleChange} />
    <br />
    <h2>{filteredText}</h2>

    <ul>
        {arr.map(article => {
            return <li>
                <h2>{article.title}</h2>
                <img src={article.urlToImage} height="200px" alt="" />
                <p>{article.description}</p>
            </li>
        })}

    </ul>
    </>
  )
}

export default News