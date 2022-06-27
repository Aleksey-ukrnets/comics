
import { NavLink } from "react-router-dom"
import '../styles/seasons.scss'
import Comics from "./comics"


export default function Seasons () {
    const isDefault = (event) => event.preventDefault();
    return(
        <>
            
            <section className="seasons">
                <nav className="seasons-nav">
                    <NavLink className="seasons-link" to={'/'}>Season 1</NavLink>
                    <NavLink onClick={isDefault} className="seasons-link" to={'/season2'}>Season 2</NavLink>
                    <NavLink onClick={isDefault} className="seasons-link" to={'/season3'}>Season 3</NavLink>
                </nav>
            </section>
            
        </>
    )
}