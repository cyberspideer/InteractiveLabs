import React from 'react';

class Square extends React.Component {
  render() {
    return (
      <button className="square" onClick={this.props.onSquareClick}>
        {this.props.value}
      </button>
    );
  }
}

export default Square;
