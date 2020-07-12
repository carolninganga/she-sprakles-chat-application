import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import firebase from '../../Services/firebase';
import LoginString from '../Login/LoginStrings';
import './Login.css'
import { Card } from 'react-bootstrap';
import Avatar from '@material-ui/core/Avatar';
import CssBaseLine from '@material-ui/core/CssBaseLine';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Grid from '@material-ui/core/Grid';
import LockOutlinedIcon from '@material-ui/icons/LockOutlineIcon';
import Typography from '@material-ui/core/Typography';
import CssBaseline from '@material-ui/core/CssBaseLine';
export default class Login extends Component {
    constructor() {
        super(props);
        this.state = {
            isLoading: true,
            error: null,
            email: '',
            password: ''
        }
    }

    handleChange(event){
        this.setState({
            [event.target.name]:event.target.value
        })
    }
    render() {
        const paper = {
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            paddingLeft: '10px',
            paddingRight: '10px'
        }
        const rightcomponent = {
            boxShadow: "0 80px 80px #808888",
            backgroundColor: "smokegrey"
        }
        const root = {
            height: "100vh",
            background: "linear-gradient(90deg, #E3FFE7 0%, #D9E7FF 100%)",
            marginBottom: "50px"
        }
        const  Signinesee = {
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            color: 'White',
            marginBottom: '20px',
            backgroundColor: '#1EBEA5',
            width: '100%',
            boxShadow: '0 5px 5px #808888',
            height: '10rem',
            paddingTop: '48px',
            opacity: '0.5',
            borderBottom: '5px solid green'
        }
        const form = {
            width: '100%',
            marginTop: '50px'
        }
        const avatar = {
            backgroundColor: 'green'
        }
        return(
            <Grid container component="main" style={root}>
                <CssBaseline/>
                <Grid item xs={1} sm={4} md={7} className="image" >
                <div className="image1"></div>
                </Grid>
                <Grid item xs={17} sm={8} md={5} style={rightcomponent} elevation={6} square>
                    <Card style={Signinesee}>
                    <div>
                        <Avatar style={avatar}>
                            <LockOutlinedIcon width="50px" height="50px"/>
                        </Avatar>
                    </div>
                    <div>
                        <Typography component="h1" variant="h5"
                            Sign in
                            To
                            />
                    </div>
                    <div>
                        <Link to="/">
                            <button className="btn">
                                <i className="fa fa-home">
                                    WebChat
                                </i>
                            </button>
                        </Link>
                    </div>
                    </Card>
                        <div style={paper}>
                            <form style={form} noValidate onsubmit={this.handleSubmit}>
                            <TextField
                            varient="outlined"
                            margin="normal"
                            required
                            fullWidth
                            id="email"
                            label="Email Address"
                            name="email"
                            autoComplete="email"
                            autoFocus
                            onChange={this.handleChange}
                            value={this.state.email}
                            />
                            <TextField
                            varient="outlined"
                            margin="normal"
                            required
                            fullWidth
                            id="password"
                            label="password"
                            name="password"
                            autoComplete="current-password"
                            autoFocus
                            onChange={this.handleChange}
                            value={this.state.password}
                        />
                        <FormControlLabel 
                        control={<Checkbox value="remember" color="primary"/>}
                        label="Remember me"
                        />
                        <Typography component="h6" varient="h5">
                        {this.state.error ?(
                            <p className="text-danger">{this.state.error}</p>
                        ):null} 
                        </Typography>
            
                            <div className="CenterAligningItems">
                                <button className="buttun1" type="submit">
                                    <span>Login In</span>
                                </button>
                            </div>
                            <div className="CenterAligningItems">
                                <p>Don't have an account</p>
                                <Link to="./signup" variant="body2">
                                    Sign Up
                                </Link>
                            </div>
                            </form>
                        </div>
                </Grid>
            </Grid>
        )
    }
}









