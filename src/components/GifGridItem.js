import React from 'react'

export const GifGridItem = ({id, title, url}) => {
   
    return (
        <div className="divItem" >
            <h3 className="animate__animated animate__slideInDown animate__delay-1s">{title}</h3>
            <img className="animate__animated animate__slideInDown" src={url} alt={title}/>
        </div>
    )
}
