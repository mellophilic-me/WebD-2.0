import React, { useState } from "react";


function Bullet({ id, name, info}) {
  const [hover, setHover] = useState(false);
  const descriptionDetails = hover ? info: "";
  




  function hoverHandler() {
  
    setHover(true);
  }

  function outHoverHandler() {
    setHover(false);
  }

  return (
   
    
       <div className="ca  ">
      
        <div className="card" onMouseEnter={hoverHandler}
        onMouseLeave={outHoverHandler}>
          <div className="wrap">
          <h4 className="text" contenteditable data-text={name}><span >{name}</span></h4> 
          </div>
         
          </div>
          
          <div className="disc">
        <p>  {descriptionDetails}</p>
        
    </div>
   
    </div>
   
           
     
   
  );
}

export default Bullet;