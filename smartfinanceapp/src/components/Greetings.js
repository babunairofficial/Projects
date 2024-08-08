import React from 'react'

export default function Greetings(props) {
  return (
    <div className="container" style={{color: props.mode ==='light'?'black':'white'}}>
        <h1>Welcome to Smart Finance </h1>
        
    </div>
  )
}
