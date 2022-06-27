import { NavLink } from "react-router-dom";

import '../styles/roadmap.scss'

export default function Roadmap() {
    return(
        <>
        <section className="roadmap">
            <h1>Roadmap</h1>
            <div className="roadmap-nav">
                <NavLink  className="roadmap-link" to={'/Roadmap'}>2021</NavLink>
                <NavLink  className="roadmap-link" to={'/Roadmap/2'}>2022</NavLink>
                <NavLink  className="roadmap-link" to={'/Roadmap/3'}>2023</NavLink>
                <NavLink  className="roadmap-link" to={'/Roadmap/4'}>2024</NavLink>
            </div>
        </section>
        </>
    )
}