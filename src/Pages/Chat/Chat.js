import React, { Component } from 'react';
import LoginString from "../Login/LoginStrings";

export default class Chat extends Component {
    constructor(props){
        super(props)
        this.currentUserName = localStorage.getItem(LoginString.Name)
    }
    render() {
        return (
            <div>
                {this.currentUserName}
            </div>
        )
    }
}

