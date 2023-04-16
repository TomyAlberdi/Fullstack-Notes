import React from 'react'

const Note = ({Data}) => {
    return (
        <article className="Note">
            <h4>{Data.title}</h4>
            <div className="text">
                <p>{Data.text}</p>
            </div>
            <div className="controls">
                <h5>controls</h5>
            </div>
        </article>
    )
}

export default Note