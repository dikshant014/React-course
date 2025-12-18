import React, { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import App from './App.jsx'

function Myapp(){
    return(
        <div>
            <h1> custom app!</h1>
        </div>
    )
 }
// const reactElement = {
//    type : 'a',
//    props:{
//     href: 'https://google.com',
//     target:'_blank'
//    } ,
//    children : 'click me to visit g'
// }

const reactElement = React.createElement(
    'a',
    { href:'https: // google.com', target:'_blank'
    },
    'click me to visit google',
    anotherUser
)

const anotherEle = (
    <a href="https://google.com" target='_blank'>visit google</a>
)

const anotherUser ="chai aur react"
ReactDOM.createRoot(document.getElementById('root')).render(
  
    reactElement               
 
)
