import React from 'react';
// eslint-disable-next-line import/no-unresolved
import './PlayerForm.scss';

class AddPlayer extends React.Component {
  state = {
    name: '',
    imgUrl: '',
    position: '',
    teamname: '',
    editing: false,
  }

  stateListener = (e) => {
    e.preventDefault();
    this.setState({ [e.target.id]: e.target.value });
  }

  newPlayerEvent = (e) => {
    e.preventDefault();
    const {
      name,
      imgUrl,
      position,
      teamname,
    } = this.state;
    const { addPlayer, userId } = this.props;
    const newPlayer = {
      name,
      imgUrl,
      position,
      teamname,
      uid: userId,
    };
    addPlayer(newPlayer);
  }

  render() {
    // const { processForm } = this.props;
    return (
      <form className="playerForm">
        <div className="form-group">
          <label htmlFor="name">Player Name</label>
          <input
            type="text"
            className="form-control"
            id="name"
            onChange={this.stateListener}
          />
        </div>
        <div className="form-group">
          <label htmlFor="imgUrl">Player Image</label>
          <input
            type="text"
            className="form-control"
            id="imgUrl"
            onChange={this.stateListener}
          />
        </div>
        <div className="form-group">
          <label htmlFor="position">Position</label>
          <input
            type="text"
            className="form-control"
            id="position"
            onChange={this.stateListener}
          />
        </div>
        <div className="form-group">
          <label htmlFor="teamname">Team Name</label>
          <input
            type="text"
            className="form-control"
            id="teamname"
            onChange={this.stateListener}
          />
        </div>
        <button type="submit" className="btn btn-primary" onClick={this.newPlayerEvent}>Submit</button>
      </form>
    );
  }
}

export default AddPlayer;
