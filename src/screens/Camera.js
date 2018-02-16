import React, { Component } from 'react';
import { getUserMedia } from '../services/camera';

class Camera extends Component {
    constructor(props) {
        super(props);

        this.state = {
            videoSrc: '',
            stream: null
        }
    }
    componentDidMount() {
        getUserMedia (
            { video: true },
            (stream) => {
                this.setState({
                    videoSrc: window.URL.createObjectURL(stream),
                    stream
                });
            },
            err => {
                console.log('Error', err);
            }
        );
    }
    componentWillUnmount() {
        this.state.stream.getTracks().forEach((track) => {
            track.stop();
        });
    }

    render() {
        const videoElement = (<video autoPlay src={ this.state.videoSrc } />);

        return (
            <div>
                { getUserMedia ? videoElement : 'Camera not available' }
            </div>
        );
    }
}

export default Camera;