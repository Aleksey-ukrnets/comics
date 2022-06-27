

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
import { NavLink } from 'react-router-dom'
import ComingSoon from '../comingsoon'

import '../../styles/comicsPosts.scss'

export default function ComicsPosts() {
   const location = useLocation()
  
  

    const posts = [
        {img1: `${commicsFirst}`, img2: `${commicsSecond}`,img3: `${commicsThird}`,title: 'BattleVerse Chronicles: Season I, Issue 1', id: '/1', text1: 'Meet the first issue of the BattleVerse Chronicles comic. Have fun reading!'},

        {img1: `${commicsFirstSec}`, img2: `${commicsSecondSec}`,img3: `${commicsThirdSec}`,title: 'BattleVerse Chronicles: Season I, Issue 2', id: '/2', text1: 'Follow the crew of Quazar Fire ship and their adventures! Don’t miss any release. We are preparing something special for you!'},

        {img1: `${commicsFirstThrid}`, img2: `${commicsSecondThrid}`,img3: `${commicsThirdThrid}`,title: 'BattleVerse Chronicles: Season I, Issue 3', id: '/3', text1: 'New issue of the Battleverse: Chronicles is out! We promised you something special and we did it!', text2: 'We want the community to help us develop the story. That’s why our next issue will depend on your choice.', text3: 'Check our social media and don’t miss your chance to influence the stories of the BattleVerse.'},

        {img1: `${commicsFirstFour}`, img2: `${commicsSecondFour}`,img3: `${commicsThirdFour}`,title: 'BattleVerse Chronicles: Season I, Issue 4', id: '/4', text1: 'The path has been chosen. Consequences are unpredictable. New issue of “Battleverse: Chronicles” is out!'},

        {img1: `${commicsFirstFive}`, img2: `${commicsSecondFive}`,img3: `${commicsThirdFive}`,title: 'BattleVerse Chronicles: Season I, Issue 5', id: '/5', text1: 'Adventures of Captain’s Beck crew continues! New issue of “Battleverse: Chronicles” is out!'},

        {img1: `${commicsFirstFive}`, img2: `${commicsSecondFive}`,img3: `${commicsThirdFive}`,title: 'BattleVerse Chronicles: Season I, Issue 6', id: '/6', text1: 'A hard situation for Grook and Fives! Will they escape from the evil bots? You will find all the answers in the new issues of “Battleverse: Chronicles”!'},

        {img1: `${commicsFirstFive}`, img2: `${commicsSecondFive}`,img3: `${commicsThirdFive}`,title: 'BattleVerse Chronicles: Season I, Issue 7', id: '/7', text1: 'Things are getting worse. Quazar Fire crew trying to escape, but evil Bots won’t leave them so easy…'},

        {img1: `${commicsFirstFive}`, img2: `${commicsSecondFive}`,img3: `${commicsThirdFive}`,title: 'BattleVerse Chronicles: Season I, Issue 8', id: '/8', text1: 'Reveal some moments from the past of Captain Beck in the brand-new episode!'},

        {img1: `${commicsFirstFive}`, img2: `${commicsSecondFive}`,img3: `${commicsThirdFive}`,title: 'BattleVerse Chronicles: Season I, Issue 9', id: '/9', text1: 'A new issue of the Battleverse: Chronicles is on board! We need your help! Make a hard decision and choose the destiny of Fives!'},

        {img1: `${commicsFirstFive}`, img2: `${commicsSecondFive}`,img3: `${commicsThirdFive}`,title: 'BattleVerse Chronicles: Special Issue #1 ', id: '/10', text1: 'Adventures of Captain’s Beck crew continues! New issue of “Battleverse: Chronicles” is out!'},
       
    ]
    console.log(location.pathname)
    return(
        <>
        <div>
                {posts.map( post => {
                    return(
                        post.id === location.pathname ? 
                        <section className="comics-posts">
                           <div className='comics-posts_main'>
                            <h1 className='comics-posts_title'>{post.title}</h1>
                                <p>{post.text1}</p>
                                <p>{post.text2}</p>
                                <p>{post.text3}</p>
                                <div>
                                    <img src={post.img1} alt="#" />
                                    <img src={post.img2} alt="#" />
                                    <img src={post.img3} alt="#" />
                                </div>
                           </div>
                        </section>
                    :
                    null
                    )
                })}
        </div>        
           
        </>
    )
}