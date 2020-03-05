import React from 'react';
import axios from 'axios';
import './style.css';
import Card from './card';

class App extends React.Component {

  constructor(props){
    super(props);
    this.state = {
      cards:[],
      expandedCard:[]
    }
    this.accordionContent =[];

  }
  
 

  bodyToggle = (id) => {

      const updatedCardSelection = this.state.expandedCard.map( cardId =>{
        return cardId !== id
      })

      updatedCardSelection.push(id);

      this.setState({ expandedCard:updatedCardSelection })
  
   /* const classList = this.accordionContent[id].classList;
    console.log(classList); */
}

  componentDidMount(){
    console.log('here...')
    axios.get('https://my-json-server.typicode.com/journeymanavi/mock-json-api/posts').then((response)=>{
      console.log(response.data);
      this.setState({ cards:response.data })
    })
  }
 
 render(){
   const { cards } = this.state;
  return (
    <div className="container">
      { cards.map( (card, key) => 
              <div className="card" key={ card.id }>
                <Card card={card}/>
            </div>
      )}
    </div>
  )}
}

export default App;
