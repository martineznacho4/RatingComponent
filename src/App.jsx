
import { useEffect, useState } from 'react'
import logo from './assets/icon-star.svg'


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


const Rating = () => {
  
  const [currentRating, setCurrentRating] = useState(0)
  
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


function App() {
  

  return (
    <div className='cardStyle'>

      <Logo />
      <div>
        <h1>How did we do?</h1>
        <p>Please let us know how we did with your support request. All feedback is appreciated to help us improve our offering</p>
      </div>

      <Rating />
      <button>SUBMIT</button>
    </div>
  )
}

export default App
