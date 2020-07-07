import React, { Component } from 'react';
import './Footer.css';

class Footer extends Component {
    Copyright=()=>{
        <h2 variant="body2" color="textSecondary" align="center">
            {'Copyright @'}
            {'Caroline'}
            {new Date().getFullYear()}
            {'.'}
        </h2>
    }


    render() {
        return (
            <div>
                
            </div>
        )
    }
}

export default
