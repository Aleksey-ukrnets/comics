
import { NavLink } from 'react-router-dom'

import logo from '../assets/seasons/image1.jpeg'
import commicsFirst from '../assets/seasons/comics1.2.jpeg'
import commicsSecond from '../assets/seasons/comics2.2.jpeg'
import commicsThird from '../assets/seasons/comics3.2.jpeg'
import commicsFour from '../assets/seasons/comics4.1.jpeg'
import commicsFive from '../assets/seasons/comics5.2.jpeg'
import commicsSix from '../assets/seasons/comics6.2.jpeg'
import commicsSeven from '../assets/seasons/comics7.2.jpeg'
import commicsEight from '../assets/seasons/comics8.2.jpeg'
import commicsNine from '../assets/seasons/comics9.2.jpeg'
import commicsTen from '../assets/seasons/comics10.2.jpeg'

import icons from '../assets/logo_gold.png'


import '../styles/comics.scss'
import Seasons from './seasons'
import { useState } from 'react'

export default function Comics() {

    const collection = [
        {date: 'April 17',icon: icons, title: 'BattleVerse Chronicles: Season I, Issue 1' , value: 1 , img: `${commicsFirst}`, to: '1'},
        {date: 'April 17',icon: icons, title: 'BattleVerse Chronicles: Season I, Issue 2' , value: 2 , img: `${commicsSecond}`, to: '2'},
        {date: 'April 17',icon: icons, title: 'BattleVerse Chronicles: Season I, Issue 3' , value: 3 , img: `${commicsThird}`, to: '3'},
        {date: 'April 24',icon: icons, title: 'BattleVerse Chronicles: Season I, Issue 4' , value: 4 , img: `${commicsFour}`, to: '4'},
        {date: 'May 1',icon: icons, title: 'BattleVerse Chronicles: Season I, Issue 5' , value: 5 , img: `${commicsFive}`, to: '5'},
        {date: 'May 8',icon: icons, title: 'BattleVerse Chronicles: Season I, Issue 6' , value: 6 , img: `${commicsSix}`, to: '6'},
        {date: 'May 15',icon: icons, title: 'BattleVerse Chronicles: Season I, Issue 7' , value: 7 , img: `${commicsSeven}`, to: '7'},
        {date: 'May 22',icon: icons, title: 'BattleVerse Chronicles: Season I, Issue 8' , value: 8 , img: `${commicsEight}`, to: '8'},
        {date: 'May 29',icon: icons, title: 'BattleVerse Chronicles: Season I, Issue 9' , value: 9 , img: `${commicsNine}`, to: '9'},
        {date: 'June 5',icon: icons, title: 'BattleVerse Chronicles: Special Issue #1' , value: 10 , img: `${commicsTen}`, to: '10'},
        
    ]
   
    return(
        <>
        <Seasons />
            <section className='seasons-card'>
                <div className='card-list'>
                    {collection.map((value, index) => {
                        return(
                                <NavLink  key={value.value} to={`/comics/${value.to}`} className='card'>
                                    <div className="card-main">
                                        <div className='card-right'>
                                            <img src={value.img} alt="#" />
                                        </div>
                                        <div className='card-left'>
                                            <div className='card-left_flex'>
                                                <div className='card-title'>{value.title}</div>    
                                            </div>
                                            <footer>{value.date}</footer>
                                        </div>
                                    </div>
                                </NavLink>
                        )
                    })}
                </div>
            </section>
        </>
    )
}