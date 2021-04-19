import React from 'react'

export const GifGridItem = ({id, title, url}) => {

    return (
        <div className="card animate__animated animate__tada">
            <img src={url} alt={title} id={id}></img>
            <p>{title}</p>
        </div>
    )
}
