import React from 'react';


export default (props) => {
    
    const { card } = props;
    const [ expanded, setExpanded ] = React.useState(false)

    const dateDiff =(date)=>{
        const today = new Date();
        const pre = new Date(date);
        const diffTime = today.getTime() - pre.getTime(); //in miliseconds
        const  Days = Math.round(diffTime / (1000 * 3600 * 24));
        return Days +' days ago';
      }
  
        return (
            <>
            <div className="card-top-container">
                    <img src={ card.bannerImage } alt=""/>
                        <div className="text">
                            { card.title }
                        </div>
                        <div className="days">
                            { dateDiff(card['published-on']) }
                        </div> 
                        <div className={expanded? 'button-container  expanded':'button-container'} onClick={()=> setExpanded(!expanded) } >
                            <div className="cotent">
                                +
                            </div>
                        </div>                                        
                </div>            
                    <div className='card-bottom-container'>
                        <div>
                        <p className={expanded? 'content expanded':'content'}>
                             { card.body }
                        </p>
                        </div>                        
                       
                    </div>
            </>
        ) 
}