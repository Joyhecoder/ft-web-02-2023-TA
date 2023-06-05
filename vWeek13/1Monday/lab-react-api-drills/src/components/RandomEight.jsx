import React, {useState} from 'react'

const RandomEight = () => {
  const [possibleAnswer, setPossibleAnswer] = useState('')
  const answers = ['It is certain!', 'It is decidedly so.', 'Without a doubt.', 'As I see it, yes.', 'Most likely.', 'Ask again later.', 'Cannot predict now.', "Don't count on it.", 'Very doubtful.', 'My reply is no.']
  const [question, setQuestion] = useState('')
  const [shaking, setShaking] = useState(false)

  const getAnswer = () => {
    setShaking(true)
    const randomIndex = Math.floor(Math.random() * answers.length)
    const answer = answers[randomIndex]
    setPossibleAnswer(answer)
    
  }
  return (
    <>
      <div className="randomEight">

        <h1>Ask me anything</h1>
        <div className="result">
          <div className="img">

            <img className={shaking ? 'shake' : ''} src="https://magic-8ball.com/wp-content/uploads/ball.png" height={'150vh'} alt="" />
          </div>

          <div className="answer">
            <div className="btn">
              <input type="text" placeholder='Enter your question' onChange={(e)=>setQuestion(e.target.value)} />
              <h3>{question}</h3>
              <button onClick={()=>getAnswer()}>Shake</button>
            </div>
            <div className="answerContent">
              {possibleAnswer}
            </div>
          </div>
        </div>

      </div>
      
    </>
  )
}

export default RandomEight
