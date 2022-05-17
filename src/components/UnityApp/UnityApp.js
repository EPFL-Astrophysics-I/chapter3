import React from 'react';
import Unity, { UnityContent } from 'react-unity-webgl';
import './UnityApp.css';
import defaultLoaderImage from './loader-default.png';
import comingSoonImage from './coming-soon.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';

class UnityApp extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      id: 'unity-app-' + this.props.index,
      progress: 0,
      isLoading: false,
      startLoading: false,
      image:
        this.props.json === ''
          ? comingSoonImage
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
        {this.state.isLoading ? (
          <p id='loading'>
            Loading... {(100 * this.state.progress).toFixed()} %
          </p>
        ) : (
          <p id='not-loading'></p>
        )}
        {this.props.json === '' ? placeholder : unityPlayer}
        <div className='unity-app-description'>
          <h3>{this.props.name}</h3>
          {this.props.github ? (
            <a href={this.props.github}>
              <FontAwesomeIcon icon={faGithub} color='#969696' size='lg' />
            </a>
          ) : (
            <p></p>
          )}
          <p>{this.props.description}</p>
        </div>
      </div>
    );
  }
}

export default UnityApp;
