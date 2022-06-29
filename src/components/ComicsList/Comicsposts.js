

import { useLocation } from 'react-router'
//1 комикс
import commicsFirst from '../../assets/seasons/comics1.1.jpeg'
import commicsSecond from '../../assets/seasons/comics1.2.jpeg'
import commicsThird from '../../assets/seasons/comics1.3.jpeg'
// 2 комикс
import commicsFirstSec from '../../assets/seasons/comics2.1.jpeg'
import commicsSecondSec from '../../assets/seasons/comics2.2.jpeg'
import commicsThirdSec from '../../assets/seasons/comics2.3.jpeg'
// 3 комикс
import commicsFirstThrid from '../../assets/seasons/comics3.1.jpeg'
import commicsSecondThrid from '../../assets/seasons/comics3.2.jpeg'
import commicsThirdThrid from '../../assets/seasons/comics3.3.jpeg'
//4 комикс 
import commicsFirstFour from '../../assets/seasons/comics4.1.jpeg'
import commicsSecondFour from '../../assets/seasons/comics4.2.jpeg'
import commicsThirdFour from '../../assets/seasons/comics4.3.jpeg'
//5
import commicsFirstFive from '../../assets/seasons/comics5.1.jpeg'
import commicsSecondFive  from '../../assets/seasons/comics5.2.jpeg'
import commicsThirdFive  from '../../assets/seasons/comics5.3.jpeg'
//6
import commicsFirstSix from '../../assets/seasons/comics6.1.jpeg'
import commicsSecondSix from '../../assets/seasons/comics6.2.jpeg'
import commicsThirdSix from '../../assets/seasons/comics6.3.jpeg'
//7
import commicsFirstSeven from '../../assets/seasons/comics7.1.jpeg'
import commicsSecondSeven from '../../assets/seasons/comics7.2.jpeg'
import commicsThirdSeven from '../../assets/seasons/comics7.3.jpeg'
//8
import commicsFirstEight from '../../assets/seasons/comics8.1.jpeg'
import commicsSecondEight from '../../assets/seasons/comics8.2.jpeg'
import commicsThirdEight from '../../assets/seasons/comics8.3.jpeg'
//9
import commicsFirstNine from '../../assets/seasons/comics9.1.jpeg'
import commicsSecondNine from '../../assets/seasons/comics9.2.jpeg'
import commicsThirdNine from '../../assets/seasons/comics9.3.jpeg'
//10
import commicsFirstTen from '../../assets/seasons/comics10.1.jpeg'
import commicsSecondTen from '../../assets/seasons/comics10.2.jpeg'
//arrows
import { ReactComponent as ArrowLeft} from '../../assets/seasons/arrowLeft.svg'
import { ReactComponent as ArrowRight} from '../../assets/seasons/arrowRight.svg'
import { Link } from 'react-router-dom'


import '../../styles/comicsPosts.scss'
import { useRef, useEffect, useState } from 'react'

export default function ComicsPosts() {
   const location = useLocation()

    

    const [count, setCount] = useState(0)

    const isDefault = (event) => event.preventDefault();

    const IsDecrement = () => {
        count <= 0 ? setCount(0) : setCount(count - 1)  
    }

    const IsIncrement = () => {
        for(let i = 0; posts.length > i; i++){
            if(parseInt(location.pathname.replace('/comics/10', `${10}`)) === 10) {
                posts[9].imgs.length >= count ? setCount(posts[9].imgs.length - 1) :  setCount(count + 1)
            }else {
                posts[i].imgs.length > count ? setCount(count + 1) : setCount(posts[i].imgs.length)
            }
        }
    }
 

    useEffect((e) => {
      if(location.pathname === `/10` || location.pathname === `/1`) {
        return isDefault();
      } else if(window.innerWidth > 1024) {
       return  window.scrollTo({top: 30,
        behavior: "smooth"})
      }
      else {

      }
    })
    console.log(location.pathname === `/10` || location.pathname === `/1`)
    const posts = [
        {imgs: [ `${commicsFirst}`, `${commicsSecond}`, `${commicsThird}`],title: 'BattleVerse Chronicles: Season I, Issue 1', id: 1, text1: 'Meet the first issue of the BattleVerse Chronicles comic. Have fun reading!'},

        {imgs: [`${commicsFirstSec}`, `${commicsSecondSec}`, `${commicsThirdSec}`],title: 'BattleVerse Chronicles: Season I, Issue 2', id: 2, text1: 'Follow the crew of Quazar Fire ship and their adventures! Don’t miss any release. We are preparing something special for you!'},

        {imgs: [`${commicsFirstThrid}`, `${commicsSecondThrid}`, `${commicsThirdThrid}`],title: 'BattleVerse Chronicles: Season I, Issue 3', id: 3, text1: 'New issue of the Battleverse: Chronicles is out! We promised you something special and we did it!', text2: 'We want the community to help us develop the story. That’s why our next issue will depend on your choice.', text3: 'Check our social media and don’t miss your chance to influence the stories of the BattleVerse.'},

        {imgs: [`${commicsFirstFour}`,`${commicsSecondFour}`,`${commicsThirdFour}`],title: 'BattleVerse Chronicles: Season I, Issue 4', id: 4, text1: 'The path has been chosen. Consequences are unpredictable. New issue of “Battleverse: Chronicles” is out!'},

        {imgs: [`${commicsFirstFive}`, `${commicsSecondFive}`,`${commicsThirdFive}`],title: 'BattleVerse Chronicles: Season I, Issue 5', id: 5, text1: 'Adventures of Captain’s Beck crew continues! New issue of “Battleverse: Chronicles” is out!'},

        {imgs: [`${commicsFirstSix}`,`${commicsSecondSix}`, `${commicsThirdSix}`] ,title: 'BattleVerse Chronicles: Season I, Issue 6', id: 6, text1: 'A hard situation for Grook and Fives! Will they escape from the evil bots? You will find all the answers in the new issues of “Battleverse: Chronicles”!'},

        {imgs: [`${commicsFirstSeven}`, `${commicsSecondSeven}`, `${commicsThirdSeven}`],title: 'BattleVerse Chronicles: Season I, Issue 7', id: 7, text1: 'Things are getting worse. Quazar Fire crew trying to escape, but evil Bots won’t leave them so easy…'},

        {imgs: [`${commicsFirstEight}`, `${commicsSecondEight}`,`${commicsThirdEight}`] ,title: 'BattleVerse Chronicles: Season I, Issue 8', id: 8, text1: 'Reveal some moments from the past of Captain Beck in the brand-new episode!'},

        {imgs: [`${commicsFirstNine}`,`${commicsSecondNine}`,`${commicsThirdNine}`],title: 'BattleVerse Chronicles: Season I, Issue 9', id: 9, text1: 'A new issue of the Battleverse: Chronicles is on board! We need your help! Make a hard decision and choose the destiny of Fives!'},

        {imgs: [ `${commicsFirstTen}`,`${commicsSecondTen}`],title: 'BattleVerse Chronicles: Special Issue #1 ', id: 10, text1: 'Adventures of Captain’s Beck crew continues! New issue of “Battleverse: Chronicles” is out!'},
       
    ]
    
    return(
        <>
        
                {posts.map( post => {
                    return(
                        post.id == parseInt(location.pathname.replace(`/comics/${post.id}`, `${post.id}`))  ? 
                        <section  key={post.id} className="comics-posts">
                           <div className='comics-posts_main comics-padding'>
                            <h1 className='comics-posts_title'>{post.title}</h1>
                                <p>{post.text1}</p>
                                <p>{post.text2}</p>
                                <p>{post.text3}</p>
                                <div style={{position: 'relative'}}>
                                    {post.imgs.map((img, index) => {
                                        return(
                                            <div key={img} >
                                               {index  === count && <img src={img} />}   
                                               
                                            </div>
                                        
                                        )
                                    })}
                                    {post.id == parseInt(location.pathname.replace(`/comics/${post.id}`, `${post.id}`)) && 
                                    count !== 0 &&
                                        <div onClick={IsDecrement} className='toLeft'></div>
                                       
                                    }

                                     {post.id == parseInt(location.pathname.replace(`/comics/${post.id}`, `${post.id}`)) && 
                                    count === 0 && parseInt(location.pathname.replace(`/comics/${post.id}`, `${post.id}`)) > 1 &&
                                     <Link onClick={(e) => setCount(0)} to={`/comics/${parseInt(location.pathname.replace(`/comics/${post.id}`, `${post.id}`)) - 1}`} className='toLeft'></Link>
                                    }
                                    {/* Заглушка в 10 комиксе по клику на правую часть*/}
                                   {
                                    parseInt(location.pathname.replace(`/comics/${post.id}`, `${post.id}`)) === 10 && count === 1 &&
                                    <div className='toRight'></div>
                                   }
                                   {/* Переключение по нажатию на комикс(правая часть) во всех комиксах кроме 10 */}
                                    {
                                   post.id == parseInt(location.pathname.replace(`/comics/${post.id}`, `${post.id}`)) && 
                                   count !== 2 && parseInt(location.pathname.replace(`/comics/${post.id}`, `${post.id}`)) !== 10 &&
                                    <div onClick={IsIncrement} className='toRight'></div>
                                   }
                                   {/* Переключение по нажатию на комикс(правая часть) LINk */}
                                   {
                                   post.id == parseInt(location.pathname.replace(`/comics/${post.id}`, `${post.id}`)) && 
                                   count == 2 && parseInt(location.pathname.replace(`/comics/${post.id}`, `${post.id}`)) !== 10 &&
                                    <Link  onClick={() => setCount(0)} to={`/comics/${parseInt(location.pathname.replace(`/comics/${post.id}`, `${post.id}`)) + 1}`}  className='toRight'></Link>
                                   }
                                   {/* переключение в 10 части */}
                                    {
                                   post.id == parseInt(location.pathname.replace(`/comics/${post.id}`, `${post.id}`)) && 
                                   count !== 1 && parseInt(location.pathname.replace(`/comics/${post.id}`, `${post.id}`)) === 10 &&
                                    <div onClick={IsIncrement} className='toRight'></div>
                                   }
                                </div>
                           </div>
                           <nav className='comics-padding '>
                            <div>
                           
                            {/* {post.id == parseInt(location.pathname.replace(`/comics/${post.id}`, `${post.id}`)) && parseInt(location.pathname.replace(`/comics/${post.id}`, `${post.id}`)) !== 10  && count === 2? 
                                <Link onClick={() => setCount(0)} to={`/comics/${parseInt(location.pathname.replace(`/comics/${post.id}`, `${post.id}`)) - 1}`}>
                                    <ArrowLeft   style={ count === 0 ? {fill: 'gray', stroke: 'gray',cursor: 'default'} : {fill: 'white', stroke: 'white',cursor: 'pointer'}} className='comics-svg' />
                                </Link>
                                : 
                                <ArrowLeft onClick={IsDecrement}  style={ count === 0 ? {fill: 'gray', stroke: 'gray',cursor: 'default'} : {fill: 'white', stroke: 'white',cursor: 'pointer'}} className='comics-svg' />
                                } */}

                                {/* ОТРИСОВКА СЕРОЙ СТРЕЛКИ(ЛЕВАЯ) В /10 КОМИКСЕ */}
                                {parseInt(location.pathname.replace(`/comics/${post.id}`, `${post.id}`)) === 1  && count === 0 &&
                                <div>
                                    <ArrowLeft  style={ count === 0 ? {fill: 'gray', stroke: 'gray',cursor: 'default'} : {fill: 'white', stroke: 'white',cursor: 'pointer'}} className='comics-svg' />
                                </div>   
                                }
                                 {/* ОТРИСОВКА СЕРОЙ СТРЕЛКИ(ЛЕВОЙ) ВО ВСЕХ ОСТАЛЬНЫХ ЭЛЕМЕНТАХ /1-/9 */}
                                 {post.id == parseInt(location.pathname.replace(`/comics/${post.id}`, `${post.id}`)) && parseInt(location.pathname.replace(`/comics/${post.id}`, `${post.id}`)) !== 10  && count === 0 &&  parseInt(location.pathname.replace(`/comics/${post.id}`, `${post.id}`)) !== 1 
                                 &&
                                <Link onClick={(e) => setCount(0)} to={`/comics/${parseInt(location.pathname.replace(`/comics/${post.id}`, `${post.id}`)) - 1}`}>
                                    <ArrowLeft   style={ count === 0 ? {fill: 'white', stroke: 'white',cursor: 'pointer'} : {fill: 'white', stroke: 'white',cursor: 'pointer'}} className='comics-svg' />
                                </Link>   
                                }
                                {/* ОТРИСОВКА БЕЛОЙ СТРЕЛКИ В 1-9 */}
                                {post.id == parseInt(location.pathname.replace(`/comics/${post.id}`, `${post.id}`)) && parseInt(location.pathname.replace(`/comics/${post.id}`, `${post.id}`)) !== 10  && count !== 0 &&
                                 <ArrowLeft onClick={IsDecrement}  style={ count !== 0 ? {fill: 'white', stroke: 'white',cursor: 'pointer'} :{fill: 'white', stroke: 'white',cursor: 'pointer'} } className='comics-svg' />
                                }
                                {/* ОТРИСОВКА СЕРОЙ СТРЕЛКИ(ЛЕВОЙ) В /10 КОМИКСЕ */}
                                {parseInt(location.pathname.replace(`/comics/${post.id}`, `${post.id}`)) === 10  && count === 0 &&
                                <Link onClick={() => setCount(0)} to={`/comics/${parseInt(location.pathname.replace(`/comics/${post.id}`, `${post.id}`)) - 1}`}>
                                    <ArrowLeft  style={ count === 0 ? {fill: 'gray', stroke: 'gray',cursor: 'default'} : {fill: 'white', stroke: 'white',cursor: 'pointer'}} className='comics-svg' />
                                </Link>   
                                }
                                {/* ОТРИСОВКА БЕЛОЙ СТРЕЛКИ(ЛЕВОЙ) В /10 КОМИКСЕ */}
                                 {parseInt(location.pathname.replace(`/comics/${post.id}`, `${post.id}`)) == 10  && count === 1 &&
                                <div>
                                    <ArrowLeft onClick={IsDecrement}  style={ count === 1 ? {fill: 'white', stroke: 'white',cursor: 'pointer'}:{fill: 'gray', stroke: 'gray',cursor: 'default'}} className='comics-svg' />
                                </div>   
                                }
                            </div>
                            <div style={{fontSize: '20px',display: 'flex', alignItems: 'center'}}>
                                {`Comics ${parseInt(location.pathname.replace(`/comics/${post.id}`, `${post.id}`))}, Page ${count + 1}`}
                                
                            </div>
                            <div>
                              
                                {/* ОТРИСОВКА СЕРОЙ СТРЕЛКИ(ПРАВОЙ) ВО ВСЕХ ОСТАЛЬНЫХ ЭЛЕМЕНТАХ /1-/9 */}
                                {post.id == parseInt(location.pathname.replace(`/comics/${post.id}`, `${post.id}`)) && parseInt(location.pathname.replace(`/comics/${post.id}`, `${post.id}`)) !== 10  && count === 2 &&
                                <Link onClick={() => setCount(0)} to={`/comics/${parseInt(location.pathname.replace(`/comics/${post.id}`, `${post.id}`)) + 1}`}>
                                    <ArrowLeft   style={ count === 2 ? {transform: 'rotate(180deg)',fill: 'white', stroke: 'white',cursor: 'pointer'} : {transform: 'rotate(180deg)',fill: 'white', stroke: 'white',cursor: 'pointer'}} className='comics-svg' />
                                </Link>   
                                }
                                {/* ОТРИСОВКА БЕЛОЙ СТРЕЛКИ В 1-9 */}
                                {post.id == parseInt(location.pathname.replace(`/comics/${post.id}`, `${post.id}`)) && parseInt(location.pathname.replace(`/comics/${post.id}`, `${post.id}`)) !== 10  && count !== 2 &&
                                 <ArrowLeft onClick={IsIncrement}  style={ count !== 2 ? {transform: 'rotate(180deg)',fill: 'white', stroke: 'white',cursor: 'pointer'} :{transform: 'rotate(180deg)',fill: 'gray', stroke: 'gray',cursor: 'default'} } className='comics-svg' />
                                }
                                {/* ОТРИСОВКА СЕРОЙ СТРЕЛКИ(ПРАВОЙ) В /10 КОМИКСЕ */}
                                 {parseInt(location.pathname.replace(`/comics/${post.id}`, `${post.id}`)) === 10  && count === 1 &&
                                <div>
                                    <ArrowLeft  style={ count === 1 ? {transform: 'rotate(180deg)',fill: 'gray', stroke: 'gray',cursor: 'default'} : {transform: 'rotate(180deg)',fill: 'white', stroke: 'white',cursor: 'pointer'}} className='comics-svg' />
                                </div>   
                                }
                                 {/* ОТРИСОВКА БЕЛОЙ СТРЕЛКИ(ПРАВОЙ) В /10 КОМИКСЕ */}
                                {parseInt(location.pathname.replace(`/comics/${post.id}`, `${post.id}`)) == 10  && count === 0 &&
                                <div>
                                    <ArrowLeft onClick={IsIncrement}  style={ count === 0 ? {transform: 'rotate(180deg)',fill: 'white', stroke: 'white',cursor: 'pointer'}:{transform: 'rotate(180deg)',fill: 'gray', stroke: 'gray',cursor: 'default'}} className='comics-svg' />
                                </div>   
                                }
                                
                            </div>
                           </nav>
                        </section>
                    :
                    null
                    )
                })}
                
           
        </>
    )
}