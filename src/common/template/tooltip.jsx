import React, { Component } from 'react';

class Tooltip extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showTooltip: false
    }
    this.handleMouseEnter = this.handleMouseEnter.bind(this)
    this.handleMouseLeave = this.handleMouseLeave.bind(this)
  }
 
  handleMouseEnter(){
    this.setState({ showTooltip: true });
  }

  handleMouseLeave(){
    this.setState({ showTooltip: false });
  }

  render() {
    const { text, children } = this.props;
    const { showTooltip } = this.state;

    return (
      <div style={{ display: 'inline-block' }}>
        <div
          onMouseEnter={this.handleMouseEnter}
          onMouseLeave={this.handleMouseLeave}
        >
          {children}
        </div>

        {showTooltip && (
          <div style={{
            position: 'absolute',
            backgroundColor: '#555',
            color: '#fff',
            padding: '5px',
            borderRadius: '5px',
            zIndex: '9999'
          }}>
            {text}
          </div>
        )}
      </div>
    )
  }
}

export default Tooltip