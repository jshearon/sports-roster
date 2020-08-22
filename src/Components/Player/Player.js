import React from 'react';

class Player extends React.Component {
  render() {
    const { player } = this.props;
    return (
      <div className="card text-center">
        <div className="card-header"><h5>TEAM NAME</h5></div>
        <div className="card-body">
          <img src={player.imageUrl} alt={player.name} />
        </div>
        <div className="card-footer">{player.name}</div>
      </div>
    );
  }
}

export default Player;
