import React, { Component } from 'react'
import Particles from 'react-particles-js'; // eslint-disable-line semi
import Clarifai from 'clarifai';
import FaceRecognition from './components/FaceRecognition/FaceRecognition';
import Navigation from './components/Navigation/Navigation';
import Signin from './components/Signin/Signin';
import Register from './components/Register/Register';
import Logo from './components/Logo/Logo';
import ImageLinkForm from './components/ImageLinkForm/ImageLinkForm';
import Name from './components/Name/Name';
import './App.css';

const app = new Clarifai.App({
  apiKey: ''
});

const particlesOptions = {
  particles: {
    number: {
      value: 50,
      density: {
        enable: true,
        value_area: 800
      }
    }
  }
}

class App extends Component {
   constructor() {
     super();
       this.state = {
        input: '',
        imageUrl: '',
        boxes: [],
        name: '',
        route: 'signin',
        isSignedIn: false
       }
   }

  calculateFaceLocations = (data) => {
    return data.outputs[0].data.regions.map(face => {
      const clarifaiFace = face.region_info.bounding_box;
      const image = document.getElementById('inputimage');
      const width = Number(image.width);
      const height = Number(image.height);
      console.log('clarifaiFace', clarifaiFace);
      return {
        leftCol: clarifaiFace.left_col * width,
        topRow: clarifaiFace.top_row * height,
        rightCol: width - (clarifaiFace.right_col * width),
        bottomRow: height - (clarifaiFace.bottom_row * height)      
      }  
    });  
  }
  
  displayFaceBoxes = (boxes) => {
    this.setState({boxes: boxes});
    console.log('detect', boxes);
  }

  displayName = (data) => {
    const name = data.outputs[0].data.regions[0].data.concepts[0].name
    console.log(name)
    this.setState({name: name})
  } 

  onInputChange =(event) => {
    this.setState ({input: event.target.value});
  }
    
  onButtonSubmit = () => { 
    this.setState({imageUrl: this.state.input});
    app.models
      .predict(
        Clarifai.CELEBRITY_MODEL,
      //Clarifai.FACE_DETECT_MODEL,
        this.state.input)
         // .then(response => this.displayFaceBox (this.calculateFaceLocations(response)))
         .then (response => {
           console.log('response',response);
           this.displayFaceBoxes (this.calculateFaceLocations(response))
         })
        //.then (response => console.log('this.calculateFaceLocations(response)',this.calculateFaceLocatios(response))) //equals new state of box
          .catch(err => console.log(err));    
    app.models
     .predict(
        Clarifai.CELEBRITY_MODEL,
        this.state.input)
          .then(response=> this.displayName(response))
          .catch(err => console.log(err));    
  }
  
  onRouteChange = (route) => {
    if (route === 'signout') {
      this.setState({isSignedIn: false})
    } else if (route === 'home') {
      this.setState({isSignedIn: true})
    } 
    this.setState({route: route});
  }
   
  render(){
    const { isSignedIn, route, name, boxes, imageUrl } = this.state;
    console.log('render imageUrl', imageUrl, 'boxes', boxes )
    return (
      <div className="App">
      <Particles className='particles' 
      params={particlesOptions}
    />
        <Navigation isSignedIn={isSignedIn} onRouteChange={this.onRouteChange} />
        { route === 'home'
          ? <div>
              <Logo />
              <ImageLinkForm 
                onInputChange={this.onInputChange}
                onButtonSubmit={this.onButtonSubmit}
              />
              <Name name={name} />
              <FaceRecognition boxes={boxes} imageUrl={imageUrl} />
            </div>  
          : (
              route === 'signin'  
              ? <Signin onRouteChange={this.onRouteChange} />
              : <Register onRouteChange={this.onRouteChange} />
          )
        }
      </div>
    );
  }      
}

export default App;
