import React from 'react'
import {Link} from 'react-router-dom'
import ImgLanding from '../components/landingTitle.png';
import './landingPage.css'



export default function LandingPage(){
    return(
        <div className='container'>
            <h1> Welcome to...</h1>
            <div className="fotoApi">
                <img src={ImgLanding} alt="ImgLanding" className="ImgLanding"></img>
             </div>
             <br/>
            <Link to = '/home'>
                <button className='entrar'> Enter </button>
            </Link>
        </div>
    )
}

