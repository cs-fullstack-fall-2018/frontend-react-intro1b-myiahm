import React, { Component } from 'react';

class StudentAccount extends Component {
    render() {
        return (
            <div>
                <h1>{this.props.firstname} has received the letter grade of a {this.props.grade}</h1>
        </div>
    );
    }
}

export default StudentAccount;
