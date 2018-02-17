import React, { Component } from 'react';
import './Camera.css';

class Camera extends Component {
    constructor(props) {
        super(props);

        this.state = {
            stream: null,
            snapTaken: false,
            error: ''
        }
    }

    async componentDidMount () {
        try {
            const stream = await navigator.mediaDevices.getUserMedia({
                video: true
            });
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

    snapshot() {
        this.canvasNode.width = this.videoNode.videoWidth;
        this.canvasNode.height = this.videoNode.videoHeight;
        const ctx = this.canvasNode.getContext('2d');
        ctx.imageSmoothingEnabled = true;
        ctx.drawImage(this.videoNode, 0, 0, this.canvasNode.width, this.canvasNode.height);
        this.imgNode.src = this.canvasNode.toDataURL('image/webp');
        this.setState({ snapTaken: true });
    }

    renderError() {
        return <div className="camera">{this.state.error}</div>;
    }

    renderVideo() {
        const videoDisplay = this.state.snapTaken ? 'none' : 'block';
        const imgDisplay = this.state.snapTaken ? 'block' : 'none';

        return (
            <div className="camera">
                <video
                    ref={videoNode => { this.videoNode = videoNode; }}
                    className="camera__video"
                    onClick={() => { this.snapshot(); }}
                    style={{ display: videoDisplay }}
                />
                <img
                    src=""
                    alt=""
                    className="camera__img"
                    ref={ imgNode => { this.imgNode = imgNode; }}
                    style={{ display: imgDisplay }}
                />
                <canvas className="camera__canvas" ref={ canvasNode => { this.canvasNode = canvasNode; }} />
            </div>
        );
    }
    render() {
        return this.state.error ? this.renderError() : this.renderVideo();
    }
}

export default Camera;