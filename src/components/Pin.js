import React from 'react'
import './Pin.css'

function Pin({pic}) {
          return (
                    <div className='Pin'>
                              <div className="pin__box">
                                        <img src={pic.urls.regular} alt=""/>
                              </div>
                    </div>
          )
}

export default Pin
