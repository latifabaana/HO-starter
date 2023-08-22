import { useState } from 'react'


function Items() {
    const [fruits, setFruits] = useState(['apple', 'pears', 'bananas', 'grapes'])

  return (
   <div>
    <ul>
        {fruits.map((item) => {return(<li>{item}</li>)})}
    </ul>
    
   </div>
  )
}

export default Items