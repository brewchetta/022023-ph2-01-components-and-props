import React from 'react'
import RaccoonProfile from './RaccoonProfile'

function App() {

  return (
    <>
        <h1>Raccoon Profiles</h1>
        <RaccoonProfile 
        name={"Rocket"} 
        favFood="pizza" 
        hometown="NYC" />
        
        <RaccoonProfile name={"Bob"} favFood="salmon" />
        
        <RaccoonProfile name={"Rocky"} />
        
        <RaccoonProfile name={"Red"} favFood="trash" />
    </>
    )
};

export default App