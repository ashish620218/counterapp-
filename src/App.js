
import React from 'react'
import { useState } from 'react'
import { Button } from 'semantic-ui-react'

import './index.css'

function App() {

  const [count, setCount] = useState(0);
  const handleIncrement = () => (
    setCount(count + 1)
  )
  const handleDecrement = () => (
    setCount(count-1)
  )
  return (
    <div className='ui container center aligned' style={{top: '10rem'}}>
      <h1 className=''>Count</h1>
      <h1 className={count <= 4 ? 'green' : count === 10 ? 'red' : 'blue'}>{count}</h1>
      <div>
        <Button onClick={handleIncrement} 
        className={count >= 10 ? 'ui disabled button' : 'ui positive button'}
        >
          Increment</Button>
        <Button onClick={handleDecrement} className={count<=0 ? 'ui disabled button' : 'ui negative button'}>Decrement</Button>
        <br></br>
        <p style={{top: '10px'}}>Done by Ashish kumar singh (12015585)</p>
      </div>
    
    </div>
  )
}

export default App
