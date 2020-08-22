import React from 'react';
import firebase from 'firebase/app';
import 'firebase/auth';
import fbConnection from '../helpers/data/connection';

import './App.scss';

import Navbar from '../Components/Navbar/Navbar';
import Team from '../Components/Team/Team';
import AddPlayer from '../Components/AddPlayer/AddPlayer';
import authData from '../helpers/data/authData';

fbConnection();

class App extends React.Component {
  state = {
    authed: false,
    authInfo: {},
    displayForm: false,
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

  showAddForm() {
    this.setState({ displayForm: true });
  }

  processForm(e) {
    e.preventDefault();
    console.error(e);
  }

  render() {
    const { authed, userInfo, displayForm } = this.state;

    const displayContent = () => {
      if (authed) {
        if (!displayForm) {
          return <div className="content">
            <button className="addPlayerButton btn btn-primary float-right m-3" onClick={() => this.showAddForm()}>Add A Player</button>
            <Team authed={authed} userInfo={userInfo} />
          </div>;
        }
        return <AddPlayer processForm={this.processForm} />;
      }
      return 'Please log in to view and change your roster';
    };

    return (
      <div className="App">
        <Navbar authed={authed} />
        {displayContent()}
      </div>
    );
  }
}

export default App;
