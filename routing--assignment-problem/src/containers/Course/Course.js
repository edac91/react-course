import React, { Component } from 'react';

class Course extends Component {
    render () {

        let title = this.props.match.params.title;
        let id = this.props.match.params.id;

        return (
            <div>
                <h1>{title}</h1>
                <p>You selected the Course with ID: {id}</p>
            </div>
        );
    }
}

export default Course;
