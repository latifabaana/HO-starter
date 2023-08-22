import { useState } from 'react'


function Form() {

  return (
   <div>
    <form>
        <input type= "text" name= "name" placeholder='name'></input>
        <input type= "text" name= "email" placeholder='email'></input>
    </form>
   </div>
  )
}

export default Form