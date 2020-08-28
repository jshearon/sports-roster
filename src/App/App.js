import React from 'react';
import firebase from 'firebase/app';
import 'firebase/auth';
import fbConnection from '../helpers/data/connection';

import './App.scss';

import Navbar from '../Components/Navbar/Navbar';
import Team from '../Components/Team/Team';
import authData from '../helpers/data/authData';

fbConnection();

class App extends React.Component {
  state = {
    authed: false,
    authInfo: {},
  }

  componentDidMount() {
    this.listener = firebase.auth().onAuthStateChanged((user) => {
      user
        ? this.setState({ authed: true, userInfo: authData.userInfo() })
        : this.setState({ authed: false });
    });
  }

  componentWillUnmount() {
    this.listener();
  }

  render() {
    const { authed, userInfo } = this.state;

    return (
      <div className="App">
        <Navbar authed={authed} />
        {
          authed
            ? <div className="content"><Team authed={authed} userInfo={userInfo} /></div>
            : 'Please log in to view and change your roster'
        }
      </div>
    );
  }
}

export default App;
