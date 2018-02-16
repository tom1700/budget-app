import React, { Component } from 'react';
import './Camera.css';

class Camera extends Component {
    constructor(props) {
        super(props);

        this.state = {
            stream: null,
            error: ''
        }
    }
    async componentDidMount () {
        try {
            const stream = await navigator.mediaDevices.getUserMedia({ video: true });
            this.videoNode.srcObject = stream;
            this.videoNode.play();
            this.setState({
                stream
            });
        } catch(err) {
            console.log(err);
            this.setState({
                error: 'Camera not available'
            });
        }
    }
    componentWillUnmount() {
        this.state.stream.getTracks().forEach((track) => {
            track.stop();
        });
    }

    renderVideo() {
        return (<video
            ref={videoNode => { this.videoNode = videoNode; }}
            className="camera"
        />);
    }
    render() {
        return (
            <div>
                { this.state.error ? this.state.error: this.renderVideo() }
            </div>
        );
    }
}

export default Camera;