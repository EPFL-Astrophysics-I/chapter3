import React from 'react';
import Unity, { UnityContent } from 'react-unity-webgl';
import './UnityApp.css';
import defaultLoaderImage from './loader-default.png';
import workInProgressImage from './wip-default.png';

class UnityApp extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      id: 'unity-app-' + this.props.index,
      progress: 0,
      isLoading: false,
      canLoad: false,
      image:
        this.props.json === ''
          ? workInProgressImage
          : this.props.image
          ? this.props.image
          : defaultLoaderImage,
    };

    this.unityContent = new UnityContent(props.json, props.unityLoader);
    this.unityContent.on('progress', (progress) => {
      this.setState({ progress: progress });
    });
    this.unityContent.on('loaded', () => {
      this.setState({ isLoading: false });
    });
  }

  componentDidMount() {
    window.addEventListener('resize', this.resize);
    this.resize();
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.resize);
  }

  resize = () => {
    const unityElement = document.getElementById(this.state.id);
    const width = parseFloat(window.getComputedStyle(unityElement).width);

    unityElement.setAttribute(
      'style',
      'height: ' + (width / 16) * 10 + 'px !important'
    );
  };

  render() {
    // const loadingMessage = <p>{this.state.isLoading ? 'Loading...' : ''}</p>;

    // Placeholder work-in-progress image
    const placeholder = (
      <img
        id={this.state.id}
        class='static-image'
        src={this.state.image}
        alt=''
      ></img>
    );

    // Click-to-load Unity player
    const unityPlayer = (
      <div id={this.state.id} className='unity-player'>
        {this.state.canLoad ? (
          <Unity unityContent={this.unityContent} />
        ) : (
          <img
            src={this.state.image}
            onClick={() => {
              this.setState({
                canLoad: !this.state.canLoad,
                isLoading: true,
              });
            }}
            alt=''
          ></img>
        )}
      </div>
    );

    return (
      <div className='unity-app'>
        {this.props.json === '' ? placeholder : unityPlayer}
        <h3>{this.props.name}</h3>
        <p>{this.props.description}</p>
      </div>
    );
  }
}

export default UnityApp;
