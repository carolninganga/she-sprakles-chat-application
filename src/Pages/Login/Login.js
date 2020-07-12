import React, { Component } from 'react';
import { Link } from "react-router-dom";
import firebase from "../../Services/firebase";
import LoginString from "../Login/LoginStrings";
import { Card } from "react-bootstrap";

import Avatar from "@material-ui/core/Avatar";
import CssBaseline from "@material-ui/core/CssBaseline";
import TextField from "@material-ui/core/TextField";
import FormControlLable from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import Grid from "@material-ui/core/Grid";
import LocalOutlinedIcon from "@material-ui/icons/LockOpenOutlined";
import Typography from "@material-ui/core/Typography";


export default class Login extends Component {
    constructor(props){
        super(props)
        this.state ={
            isLoading: true,
            error: null,
            email: "",
            password: "",

        }
    }
    render() {
        const paper = {
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            paddingLeft: '10px',
            paddingRight: '10px'
        }
        const rightcomponent={
            boxShadow: '0 80px #8088888',
            backgroundColor: 'smokeygrey',
        }
        const root={
            height: '100vh',
            background: "linear-gradient(90deg, #e3ffe7 0%, #d9e7ff 100%",
            marginBottom:'50px'
        }
        const Signinesee = {
            display: 'flex',
            flexDirection: 'column',
            alignItem: 'center',
            color: 'White',
            marginBottom: '20px',
            backgroundColor: '#1ebea5',
            width: '100%',
            boxShadow: "0 5px 5px #8088888",
            heigth: "10rem",
            paddingTop: "48px",
            opacity: "0.5",
            borderBottom: "5px solid green",

        }
        const form = {
            width: "100%",
            marginTop: '50px'
        }
        const avatar = {
            backgroundColor: 'green',
        }

        return (
            <div>
                
            </div>
        )
    }
}
