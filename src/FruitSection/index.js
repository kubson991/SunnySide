import React from 'react'
import './FruitSection.css'
function index(props) {
    return (
        <section id="xd" className='FruitContainer'  style={{'--BGM': `url(${props.img})`, '--color':props.color ,'--BG':`url(${props.imgD})`}}>
           <h1>{props.title}</h1> 
           <p>{props.content}</p>
        </section>
    )
}

export default index
