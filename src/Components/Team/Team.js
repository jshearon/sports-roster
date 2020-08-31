import React from 'react';
import { CSSTransition } from 'react-transition-group';
import './Team.scss';
import Player from '../Player/Player';
import playersData from '../../helpers/data/playersData';
// eslint-disable-next-line import/no-named-as-default-member
import PlayerForm from '../PlayerForm/PlayerForm';

class Team extends React.Component {
  state = {
    players: [],
    editPlayerObject: {},
    displayForm: false,
  }

  getPlayers = () => {
    playersData.getPlayersByTeam(this.props.userInfo.id)
      .then((players) => this.setState({ players }))
      .catch((err) => console.error(err));
  }

  componentDidMount() {
    this.getPlayers();
  }

  deletePlayer = (playerId) => {
    playersData.deletePlayer(playerId)
      .then(() => {
        this.getPlayers();
      })
      .catch((err) => console.error(err));
  }

  addPlayer = (newPlayer) => {
    playersData.createPlayer(newPlayer)
      .then(() => {
        this.getPlayers();
        this.setState({ displayForm: false });
      })
      .catch((err) => console.error(err));
  }

  editPlayer = (playerId, editedPlayer) => {
    playersData.updatePlayer(playerId, editedPlayer)
      .then(() => {
        this.getPlayers();
        this.setState({ editPlayerObject: {}, displayForm: false });
      })
      .catch((err) => console.error(err));
  }

  populateEditForm = (editPlayerObject) => {
    this.setState({ editPlayerObject, displayForm: true });
  }

  showAddForm = (e) => {
    const { displayForm } = this.state;
    displayForm
      ? this.setState({ editPlayerObject: {}, displayForm: !displayForm })
      : this.setState({ displayForm: !displayForm });
  }

  render() {
    const { players, displayForm, editPlayerObject } = this.state;
    const playerCards = players.map((player) => <Player key={player.id} player={player} deletePlayer={this.deletePlayer} showAddForm={this.showAddForm} populateEditForm={this.populateEditForm}/>);

    return (
      <div className="Team">
        <button className="addPlayerButton btn btn-primary m-3" onClick={this.showAddForm}>{displayForm ? 'Cancel' : 'Add A Player'}</button>
        <CSSTransition classNames="slideForm" in={displayForm} timeout={400} appear unmountOnExit>
          <PlayerForm addPlayer={this.addPlayer} editPlayer={this.editPlayer} userId={this.props.userInfo.id} editedPlayer={editPlayerObject} />
        </CSSTransition>
        <h2 className="userName">{this.props.userInfo.name}'s Team Lineup</h2>
        <div className="cardStack mx-auto d-flex justify-content-center flex-wrap">
          {playerCards}
        </div>
      </div>
    );
  }
}

export default Team;
