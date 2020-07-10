import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import "./Signup.css";
import firebase from '../../Services/firebase';

import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';

export default class Signup extends Component {
    constructor(){
        super();
        this.state = {
            email:"",
            password:"",
            name:"",
            error: null
        }
    }
}