
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
        {date: 'June 24',icon: icons, title: 'BattleVerse Chronicles: Season I, Issue 1' , value: 'значение1' , img: `${commicsFirst}`, to: '1'},
        {date: 'June 24',icon: icons, title: 'BattleVerse Chronicles: Season I, Issue 2' , value: 'значение2' , img: `${commicsSecond}`, to: '2'},
        {date: 'June 24',icon: icons, title: 'BattleVerse Chronicles: Season I, Issue 3' , value: 'значение3' , img: `${commicsThird}`, to: '3'},
        {date: 'June 24',icon: icons, title: 'BattleVerse Chronicles: Season I, Issue 4' , value: 'значение4' , img: `${commicsFour}`, to: '4'},
        {date: 'June 24',icon: icons, title: 'BattleVerse Chronicles: Season I, Issue 5' , value: 'значение5' , img: `${commicsFive}`, to: '5'},
        {date: 'June 24',icon: icons, title: 'BattleVerse Chronicles: Season I, Issue 6' , value: 'значение6' , img: `${commicsSix}`, to: '6'},
        {date: 'June 24',icon: icons, title: 'BattleVerse Chronicles: Season I, Issue 7' , value: 'значение7' , img: `${commicsSeven}`, to: '7'},
        {date: 'June 24',icon: icons, title: 'BattleVerse Chronicles: Season I, Issue 8' , value: 'значение8' , img: `${commicsEight}`, to: '8'},
        {date: 'June 24',icon: icons, title: 'BattleVerse Chronicles: Season I, Issue 9' , value: 'значение9' , img: `${commicsNine}`, to: '9'},
        {date: 'June 24',icon: icons, title: 'BattleVerse Chronicles: Special Issue #1' , value: 'значение10' , img: `${commicsTen}`, to: '10'},
        
    ]
    // const handleClick = (e) => {
    //     e.preventDefault();
    // };
    return(
        <>
        <Seasons />
            <section className='seasons-card'>
                <div className='card-list'>
                    {collection.map((value, index) => {
                        return(
                            <>
                                <NavLink  key={value.title} to={`/${value.to}`} className='card'>
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
                            </>
                        )
                    })}
                </div>
            </section>
        </>
    )
}