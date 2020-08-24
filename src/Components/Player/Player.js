import React from 'react';
import './Player.scss';

class Player extends React.Component {
  removePlayerEvent = (e) => {
    e.preventDefault();
    const { player, deletePlayer } = this.props;
    deletePlayer(player.id);
  }

  render() {
    const { player } = this.props;
    return (
      <div className="card text-center">
        <div className="card-header"><h5>{player.teamname}</h5></div>
        <div className="card-body">
          <img src={player.imageUrl} alt={player.name} />
          <div className="player-position">{player.position}</div>
        </div>
        <div className="card-footer">{player.name}</div>
        <button className="deletePlayer btn btn-danger" onClick={this.removePlayerEvent}>Remove Player</button>
      </div>
    );
  }
}

export default Player;
