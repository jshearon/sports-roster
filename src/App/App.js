import React from 'react';
import firebase from 'firebase/app';
import 'firebase/auth';
import fbConnection from '../helpers/data/connection';

import './App.scss';

import Navbar from '../Components/Navbar/Navbar';

fbConnection();

class App extends React.Component {
  state = {
    authed: false,
  }

  componentDidMount() {
    this.listener = firebase.auth().onAuthStateChanged((user) => {
      user ? this.setState({ authed: true }) : this.setState({ authed: false });
    });
  }

  componentWillUnmount() {
    this.listener();
  }

  render() {
    const { authed } = this.state;

    const displayContent = () => {
      if (authed) {
        return <div className="noLoginMessage">no content yet</div>;
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
