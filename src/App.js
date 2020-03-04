import React from 'react';
import axios from 'axios';
import './style.css';

class App extends React.Component {

  constructor(props){
    super(props);
    this.state = {
      cards:[],
      expandedCard:[]
    }
    this.accordionContent =[];

  }
  
  dateDiff(date){
    const today = new Date();
    const pre = new Date(date);
    const diffTime = today.getTime() - pre.getTime(); //in miliseconds
    const  Days = Math.round(diffTime / (1000 * 3600 * 24));
    return Days +' days ago';
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
                <div className="card-top-container">
                    <img src={ card.bannerImage } alt=""/>
                        <div className="text">
                            { card.title }
                        </div>
                        <div className="days">
                            { this.dateDiff(card['published-on']) }
                        </div> 
                        <div className="button-container" onClick={ this.bodyToggle.bind(this, card.id) } >
                            <div className="cotent">
                                +
                            </div>
                        </div>                                        
                </div>            
                    <div className="card-bottom-container" ref={accordionContent => this.accordionContent[key] = accordionContent}>
                        <p className="bottom-text">
                             { card.body }

                        </p>
                       
                    </div>
            </div>
      )}
    </div>
  )}
}

export default App;
