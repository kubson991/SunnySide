import React from 'react'
import './information.css'
function Information(props) {
    return (
        <section className='informationContainer' style={{'--xd':props.color}}>
            <h1>{props.title}</h1>  
            <p>{props.info}</p>   
            <a href='/'>LEARN MORE</a>          
        </section>
    )
}

export default Information
