import React from 'react'
import RaccoonProfile from './RaccoonProfile'
import { raccoons } from './raccoons.js'

function App() {

    console.log(raccoons)

    // WHY MAP? WHY NOT FOREACH?
    const mappedRaccoons = raccoons.map(raccoonObject => {
        return (
            <RaccoonProfile 
            key={raccoonObject.id}
            name={raccoonObject.name} 
            favFood={raccoonObject.favFood} />
        )
    })

  return (
    <>
        <h1>Raccoon Profiles</h1>

        { mappedRaccoons }
        
    </>
    )
};

export default App