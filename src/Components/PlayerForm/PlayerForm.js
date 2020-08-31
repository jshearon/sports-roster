import React from 'react';
// eslint-disable-next-line import/no-unresolved
import './PlayerForm.scss';

class PlayerForm extends React.Component {
  state = {
    name: '',
    imgUrl: '',
    position: '',
    teamname: '',
    playerId: '',
    editing: false,
  }

  componentDidMount() {
    const { editedPlayer } = this.props;
    if (editedPlayer.name) {
      this.setState({
        name: editedPlayer.name,
        imgUrl: editedPlayer.imgUrl,
        position: editedPlayer.position,
        teamname: editedPlayer.teamname,
        playerId: editedPlayer.id,
        editing: true,
      });
    }
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

  editPlayerEvent = (e) => {
    e.preventDefault();
    const {
      name,
      imgUrl,
      position,
      teamname,
      playerId,
    } = this.state;
    const { editPlayer } = this.props;
    const editedPlayer = {
      name,
      imgUrl,
      position,
      teamname,
    };
    editPlayer(playerId, editedPlayer);
  }

  render() {
    const {
      name,
      imgUrl,
      position,
      teamname,
      editing,
    } = this.state;

    return (
      <form className="playerForm">
        <div className="form-group">
          <label htmlFor="name">Player Name</label>
          <input
            type="text"
            className="form-control"
            id="name"
            onChange={this.stateListener}
            value={name}
          />
        </div>
        <div className="form-group">
          <label htmlFor="imgUrl">Player Image</label>
          <input
            type="text"
            className="form-control"
            id="imgUrl"
            onChange={this.stateListener}
            value={imgUrl}
          />
        </div>
        <div className="form-group">
          <label htmlFor="position">Position</label>
          <input
            type="text"
            className="form-control"
            id="position"
            onChange={this.stateListener}
            value={position}
          />
        </div>
        <div className="form-group">
          <label htmlFor="teamname">Team Name</label>
          <input
            type="text"
            className="form-control"
            id="teamname"
            onChange={this.stateListener}
            value={teamname}
          />
        </div>
        {
          editing
            ? <button type="submit" className="btn btn-primary" onClick={this.editPlayerEvent}>Update</button>
            : <button type="submit" className="btn btn-primary" onClick={this.newPlayerEvent}>Submit</button>
        }
      </form>
    );
  }
}

export default PlayerForm;
