import React from 'react';
import Card from './Card';


const CardList = ({robots}) =>{

  const CardComponent = robots.map( (user,i) => {
    return  <Card key={i} id={robots[i].id} name={robots[i].name} email={robots[i].email} />
  }); //close map

  return(
    <div>
        {CardComponent}
    </div>
  );

}

export default CardList;

//we need key=i (keyprop) as we want each card to have unique key because 
//if a card gets deeted, browser has to create entire dom.. and it shud quickly find which card got deltd
//keyprop shud be somethng dat doesnt chng ... so an id shud be used insted of foorloop index