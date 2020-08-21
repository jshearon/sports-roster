import React from 'react';

class Player extends React.Component {
  render() {
    const { player } = this.props;
    return (
      <div className="card text-center w-25">
        <div className="card-header"><h5>{player.name}</h5></div>
        <div className="card-body">
          <img className="w-100" src={player.imageUrl} alt={player.name} />
        </div>
        <div className="card-footer text-muted">{player.position}</div>
      </div>
    );
  }
}

export default Player;
