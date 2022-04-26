import React from 'react'
import Card from './components/Card'
import NavBar from './components/NavBar'
import './index.css'
import data from './data'



export default function App(){
    let cards = data.map(item => <Card item={item} />)

    return (
        <div>
            <NavBar />
            <div className='main'>
                {cards}
            </div>
        </div>
    )
}