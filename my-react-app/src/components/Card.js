import React, { useState } from 'react'
import './Card.css'

function Card() {
    const [profile_name, setName] = useState('My name');
    const [job, setHob] = useState('Job title');
    const [about, setAbout] = useState('My name');
  return (
    <div className='Card'>
        <div className='upper-container'>
            <div className='image-container'>
                <img src=" " alt=' ' height= "100px" width= "100px" />

            </div>

        </div>
        <div className='lower-container'>
            <h3>{ profice_name }</h3>
            <h4>{ job }</h4>
            <h5>{ about }</h5>

        </div>
        
    </div>
  )
}

export default Card