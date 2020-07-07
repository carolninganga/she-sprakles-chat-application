import React, { Component } from 'react';
import {
  Route,
  BrowserRouter as Router,
  Switch,
  Redirect
} from 'react-router-dom';
import './App.css';
import Home from './Pages/Home/Home';
import Chat from './Pages/Chat/Chat';
import Signup from './Pages/Login/Login';
import firebase from './Services/firebase';
import { toast, ToastContainer } from 'react-toastify';

class App extends Component {

  showToast = (type, message) => {
    switch (type) {
      case 0:
        toast.warning(message)
        break;
        case 1:
          toast.success(message)
          default:
            break;
    }

    constructor(){
      super();
      this.state = {
        authenticated: false,
        loading: true
      };
    }

    componentDidMount(){
      firebase.auth().onAuthStateChanged(user => {
        if(user){
          this.setState({
            authenticated : true,
            loading: false
          });

        } else {
          this.setState({
            authenticated: false,
            loading: false
          });
        }
      })
    }
      render(){
        return()
      }
    }

  }
}



