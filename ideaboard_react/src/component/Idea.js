import React from 'react'

const Idea = ({idea}) => 
    <div className="tile" key={idea.id}>
        <h4>{idea.title}</h4>
        <hr />
        <p>{idea.body}</p>
    </div>

export default Idea;