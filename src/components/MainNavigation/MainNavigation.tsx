import React from 'react';
import { FaCartArrowDown, FaHandHoldingHeart, FaHome, FaUserAlt, FaStream } from 'react-icons/fa';
import { useDispatch } from 'react-redux'
import { NavLink } from 'react-router-dom';


import './MainNavigation.css';
import { IStore } from '../../helpers/types';
import 'react-notifications-component/dist/theme.css'

export interface ILandings { 
  landings: IStore
}

function MainNavigation(props: any) {

  const dispatch = useDispatch()
  
  return (
    <header className='main-navigation'>
      <nav>
        <ul className='home_icon'>
          <li>
            <NavLink to='/web-stream/' title='Home'><FaHome /></NavLink>
          </li>
        </ul>
        <ul className='header_title'>
          <li className='web-streamer'>
            Web-Streamer <FaStream />
          </li>
        </ul>
        <ul className='my_content'>
          <li>
            <NavLink to='/web-stream/cart' title='Cart'><FaCartArrowDown /> ({props.cartItemNumber.cartSum || 0})</NavLink>
          </li>
          <li>
            <NavLink to='/web-stream/liked' title='Liked'><FaHandHoldingHeart /> ({props.cartItemNumber.likedSum || 0})</NavLink>
          </li>
          <li>
            <NavLink to='/web-stream/profile' title='Profile'><FaUserAlt /></NavLink>
          </li>
        </ul>
        <label className='switch'>
          <input type='checkbox' title='Mode Toggler' onChange={() => dispatch({type: 'MODE_TOGGLE'})}/>
          <span className='slider round'></span>
        </label>
      </nav>
    </header>
  )
}

export default MainNavigation;
