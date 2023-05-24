
import { useEffect, useState } from 'react'
import logo from './assets/icon-star.svg'
import postImage from './assets/illustration-thank-you.svg'


const Logo = () => {
  
  return (
    <div className='circleContainer'>
      <img src={logo}/>
    </div>
  )
}


const Button = ({index}) => {
  
  return (
    <>
      <div>
        {index}
      </div>
    </>
  )
}


const Rating = ({currentRating, setCurrentRating}) => {
  
  const handleRating = (value) => {
    setCurrentRating(value)
  }
  
  const buttons = []
  
  for (let i = 0; i < 5; i++) {
    buttons.push(<Button index={i+1}/>)
  }
  
  return (
    <ul>
      {buttons.map((button, index) =>(
        <li key={index +1} onClick={() => handleRating(index + 1)} className={index + 1 == currentRating ? 'selected' : 'circleContainer'}> 
          {button}
        </li> 
        )
      )}
      </ul>
  )
}


const ThankYou = ({rating}) => {

  return(
    <div className='thankCard'>
      <img src={postImage}/>
      <div className='ratingSelected' >
        <p>
          You selected {rating} out of 5
        </p>
      </div>
      <h1>Thank you!</h1>
      <p>We appreciate you taking the time to give a rating. If you ever need more support, don't hesitate to get in touch!</p>
    </div>
  )
}

function App() {
  const [currentRating, setCurrentRating] = useState(0)
  const [visible, setVisible] = useState(true)
  
  const handleVisibility = () => {
    setVisible(prev => !prev)
  }

  return (
    <div className='cardStyle'>

      {visible && 
        <>
          <Logo />
            <div>
              <h1>How did we do?</h1>
              <p>Please let us know how we did with your support request. All feedback is appreciated to help us improve our offering</p>
            </div>
          <Rating currentRating={currentRating} setCurrentRating={setCurrentRating}/>
          <button onClick={handleVisibility}>SUBMIT</button>
        </>
      }
      {!visible &&
        <ThankYou rating={currentRating}/>
      }
      
    </div>
  )
}

export default App
