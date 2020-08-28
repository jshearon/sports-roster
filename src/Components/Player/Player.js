import React from 'react';
import PropTypes from 'prop-types';
import './Player.scss';
import playerShape from '../../helpers/propz/playerShape';

class Player extends React.Component {
  static propTypes = {
    player: playerShape.playerShape,
    deletePlayer: PropTypes.func.isRequired,
  }

  removePlayerEvent = (e) => {
    e.preventDefault();
    const { player, deletePlayer } = this.props;
    deletePlayer(player.id);
  }

  editPlayerEvent = (e) => {
    e.preventDefault();
  }

  render() {
    const { player } = this.props;
    return (
      <div className="card text-center">
        <div className="card-header"><h5>{player.teamname}</h5></div>
        <div className="card-body">
          <img src={player.imgUrl} alt={player.name} />
          <div className="player-position">{player.position}</div>
        </div>
        <div className="card-footer">{player.name}</div>
        <button className="editPlayer btn btn-warning" onClick={this.editPlayerEvent}>Edit Player</button>
        <button className="deletePlayer btn btn-danger" onClick={this.removePlayerEvent}>Remove Player</button>
      </div>
    );
  }
}

export default Player;
