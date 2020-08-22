import React from 'react';

import './AddPlayer.scss';

class AddPlayer extends React.Component {
  render() {
    const { processForm } = this.props;
    return (
      <form className="addPlayerForm" onSubmit={processForm}>
        <div className="form-group">
          <label htmlFor="exampleInputEmail1">Player Name</label>
          <input type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" />
        </div>
        <div className="form-group">
          <label htmlFor="exampleInputPassword1">Player Image</label>
          <input type="text" className="form-control" id="exampleInputPassword1" placeholder="Password" />
        </div>
        <button type="submit" className="btn btn-primary">Submit</button>
      </form>
    );
  }
}

export default AddPlayer;
