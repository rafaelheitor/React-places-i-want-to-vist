import React from 'react'
import {BiBeenHere} from 'react-icons/bi'

export default function Card(props){
    console.log(props)
    return (
        <section className='card'>
            <div className='card--country'>
                <div>
                <BiBeenHere />
                <small>{props.item.location}</small>
                </div>
            <a href={props.item.googleMapsUrl}>View on Google Maps</a>
            </div>
            <h1>{props.item.title}</h1>
            <img src={props.item.imageUrl} alt={props.item.title}/>
            <h4>{props.item.startDate} - {props.item.endDate} </h4>
            <p>{props.item.description}</p>
            <hr />            
        </section>
    )
}