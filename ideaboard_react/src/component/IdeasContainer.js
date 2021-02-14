import React, { Component } from 'react';
import axios from 'axios';
import Idea from './Idea'

class IdeasContainer extends Component {

    constructor(props) {
        super(props)
        this.state = {
            ideas: []
        }
    }

    componentDidMount(){
        axios.get('/api/v1/ideas.json')
        .then(response => {
            console.log(response);
            this.setState({ideas: response.data});
        })
        .catch(error => console.error(error))
    }

    render(){
        return (
            <div>
                {this.state.ideas.map((idea) => {
                    return(
                       <Idea idea={idea} key={idea.id} />
                    )
                })}
            </div>
        )
    }
}

export default IdeasContainer;