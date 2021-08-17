import React from 'react';
import "./card.styles.css"
export const Card = (props)=>
       ( <div className = "card-container">
           <img src={`https://robohash.org/Inderjeet/${props.monster.id}`} alt="Monster-Img" />
            <h2>{props.monster.name}</h2>
            <p className = "monster-email">{props.monster.email}</p>
        </div>)

    