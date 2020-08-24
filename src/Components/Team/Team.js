import React from 'react';
import './Team.scss';
import Player from '../Player/Player';
import playersData from '../../helpers/data/playersData';

class Team extends React.Component {
  state = {
    players: [],
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

  render() {
    const { players } = this.state;
    const playerCards = players.map((player) => <Player key={player.id} player={player} deletePlayer={this.deletePlayer}/>);

    return (
      <div className="Team">
        <h2 className="userName">{this.props.userInfo.name}'s Team Lineup</h2>
        <div className="cardStack mx-auto d-flex justify-content-center flex-wrap">
          {playerCards}
        </div>
      </div>
    );
  }
}

export default Team;
