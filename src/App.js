import React, {Component} from 'react';
import './App.css';

import LoadingBar from './components/loadingBar/LoadingBar';
import Counter from './components/counter/Counter';
import Record from './components/record/Record';

const loadingImg = require('./assets/25.gif');
const foundImg = require('./assets/done_Icon.png');
  
class App  extends Component {
  
 state = {
    families: [
      {id:0, name: "Accident History", duration: 1000, image: loadingImg},
      {id:1, name: "Title Information", duration: 5000, image: loadingImg},
      {id:2, name: "Liens", duration: 2000, image: loadingImg},
      {id:3, name: "Mileage Rollback", duration: 29000, image: loadingImg},
      {id:4, name: "Sale Records", duration: 25000, image: loadingImg},
      {id:5, name: "Theft & Recovery", duration: 20000, image: loadingImg},

      {id:6, name: "Airbage Deployment", duration: 500, image: loadingImg},
      {id:7, name: "Service History", duration: 5500, image: loadingImg},
      {id:8, name: "Registration History", duration: 22000, image: loadingImg},
      {id:9, name: "Hail Damage", duration: 11000, image: loadingImg},
      {id:10, name: "Flood Damage", duration: 29200, image: loadingImg},
      {id:11, name: "Structural Damage", duration: 18000, image: loadingImg},
      
      {id:12, name: "Lease & Taxi Use", duration: 7000, image: loadingImg},
      {id:13, name: "Hidden Damage", duration: 2000, image: loadingImg},
      {id:14, name: "Junk & Salvage", duration: 5000, image: loadingImg},
      {id:15, name: "Manufacture's Recall History", duration: 15000, image: loadingImg},
      {id:16, name: "Lemon Check", duration: 9000, image: loadingImg},
      {id:17, name: "Owner History", duration: 19000, image: loadingImg},
    ],
  }
  
  componentDidMount() {
    this.state.families.forEach(item => { 
      setTimeout(() => {
        const families = this.state.families.slice();
        const itemFound = families.filter(i => i.id === item.id)[0];
        itemFound.image = foundImg;
        this.setState({families: families})
      }, item.duration)       
    })
}

  render () {
    return (
      <div className="text-center">
      <a href="https://freelancewebdesignusa.com" target="_blank" className="freelance-logo">Freelance Web Design USA</a>

      <div className="App">
        <LoadingBar />
        <Counter />
        <div className= "loading">
        <div className="loading-content">
          <div className="container">
              <div className="row">
                    {this.state.families.map((item) => {
                      return (
                        <Record
                          key={item.id}
                          itemId= {item.id}
                          name= {item.name}
                          image= {item.image}                            
                        />
                      )}
                    )}                   
                  </div>
              </div>
            </div>
          </div>
        </div>
      </div>
  );
}
}

export default App;
