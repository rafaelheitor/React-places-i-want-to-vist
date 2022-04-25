import React from 'react'
import Card from './components/Card'
import './index.css'
import data from './data'



export default function App(){
    let cards = data.map(item => {
     return  <Card item={item} />})

    return (
        <div className='main'>
            {cards}
        </div>
    )
}