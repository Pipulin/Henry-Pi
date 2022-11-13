import React from 'react';
import {Link} from 'react-router-dom'
import './landingPage.css'
import ingreso from '../landingPage/ingreso.png'





export default function LandingPage(){
    return(
        <div className='landingHome'>            
            <Link to = '/home'>                
                <img className='go' src={ingreso}></img>
            </Link>

        </div>
    )
}