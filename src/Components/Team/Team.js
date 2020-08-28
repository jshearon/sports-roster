import React from 'react';
import './Team.scss';
import Player from '../Player/Player';
import playersData from '../../helpers/data/playersData';
import PlayerForm from '../PlayerForm/PlayerForm';

class Team extends React.Component {
  state = {
    players: [],
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

  showAddForm = () => {
    this.setState({ displayForm: true });
  }

  render() {
    const { players } = this.state;
    const playerCards = players.map((player) => <Player key={player.id} player={player} deletePlayer={this.deletePlayer}/>);

    return (
      <div className="Team">
        <button className="addPlayerButton btn btn-primary m-3" onClick={this.showAddForm}>Add A Player</button>
        <h2 className="userName">{this.props.userInfo.name}'s Team Lineup</h2>
        <div className="cardStack mx-auto d-flex justify-content-center flex-wrap">
          {
            this.state.displayForm
              ? <PlayerForm addPlayer={this.addPlayer} userId={this.props.userInfo.id} />
              : playerCards
          }
        </div>
      </div>
    );
  }
}

export default Team;
