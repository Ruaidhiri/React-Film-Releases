import React, {Component} from 'react';

class Film extends Component {
  render() {
    return(
      <div>
        <a href={this.props.link}>{this.props.children}</a>
      </div>
    )
  }
}

export default Film;
