import React, { useState } from 'react'
import './Header.css'
import PinterestIcon from '@material-ui/icons/Pinterest';
import SearchIcon from '@material-ui/icons/Search';
import NotificationsIcon from '@material-ui/icons/Notifications';
import ForumRoundedIcon from '@material-ui/icons/ForumRounded';
import { Avatar } from '@material-ui/core';
import ArrowDropDownRoundedIcon from '@material-ui/icons/ArrowDropDownRounded';


function Header({onSearchHit}) {

      const [input, setInput] = useState('')

           const searchButton = (e) =>{
                  e.preventDefault()

                  //  console.log('this is the search result >>', input )
                   setInput('')

                   onSearchHit(input)
           }

          return (
                    <div className='header'>
                              
                         <div className="header__left">
                         <div className="header__logo">
                                   <PinterestIcon className='header__logoColor' style={{ fontSize: 40 }}/>
                          </div>
                          <div className="header__homeButton">
                                   <p>Home</p>
                          </div>
                          <div className="header__TodayButton">
                                    <p>Today</p>
                          </div>
                         </div>
                          <div className="header__searchBar">
                                  <div className="header__searchIcon">
                                       <SearchIcon style={{ fontSize: 22 }}/>
                                  </div>
                                <form action="">
                                <div className="header__input">
                                 <input type="text" value={input} onChange={(e)=>{setInput(e.target.value)}} placeholder='Search image'/>
                                 <button onClick={searchButton}>search</button>
                                 </div>
                                </form>
                          </div>
                          <div className="header__Icons">
                                <div className="header__bell">
                                          <NotificationsIcon style={{ fontSize: 30 }}/>
                                </div>
                                <div className="header__message">
                                          <ForumRoundedIcon style={{ fontSize: 30 }}/>
                                </div>
                                <div className="header__account">
                                          <Avatar style={{ fontSize: 40 }}/>
                                </div>
                                <div className="header__dropMenu">
                                          <ArrowDropDownRoundedIcon style={{ fontSize: 40 }}/>
                                </div>    
                          </div>

                    </div>
          )
}

export default Header
