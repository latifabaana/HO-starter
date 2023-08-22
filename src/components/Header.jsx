import {Link} from "react-router-dom"

function Header() {

  return (
   <div>
        <Link to = "/hello">Hello</Link>
        <span> | </span>
        <Link to = "/items">Items</Link>
        <span> | </span>
        <Link to ="/form">Form</Link>
   </div>
  )
}

export default Header