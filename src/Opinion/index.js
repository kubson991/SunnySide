import './Opinion.css'
import React from 'react'

function index(props) {
    return (
        <article className='testimony'>
            <img src={props.img} alt='genericImage'></img>
            <p className='content'>{props.content}</p>
            <div>
                <h1>{props.name}</h1>
                <p className='job'>{props.job}</p>
            </div>

        </article>
    )
}

export default index
