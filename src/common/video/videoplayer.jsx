import React, { Component } from 'react'
//import ReactPlayer from 'react-player'

class VideoPlayer extends Component 
{
    constructor(props) {
        super(props);
        this.myRef = null
        this.setRef = element => {
          this.myRef = element
        }
    }

    componentDidMount() {
        //this.myRef.play()
    }

    render() {
        return (

        <div>
            <video ref={this.setRef} controls={true} width="640" height="360" style={{ maxWidth: '100%' }}>
                <source src={this.props.videoUrl} type="video/mp4" />
            </video>
        </div>
    )}
}

export default VideoPlayer

//<ReactPlayer url={['1_conhecendo_simulador.mp4']} controls={true}/>