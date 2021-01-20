import React from 'react';


//we don't pass any props to scroll, but it is wrapped around its children, therefore they are treated as props
const Scroll = (props)=>{
  return (
    <div style={{overflow:'scroll', border:'1px solid black', height:'800px'}}>

      {props.children};

    </div>

  );
}

export default Scroll;