import React from 'react'
import './Mainboard.css'
import Pin from './Pin'

function Mainboard({pins}) {
          return (
                    <div className='mainboard'>
                       <div className="mainboard__wrapper">
                                  <p>Search something</p>
                                  <div className="mainboard__container">
                                     {pins.map((pic)=>( <Pin key={pic.id} pic={pic}/>)
                                        
                                    )}
                                          
                                  </div>
                       </div>
                    </div>
          )
}

export default Mainboard
