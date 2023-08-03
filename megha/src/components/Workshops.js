import React from 'react'
import Bullet from './Bullet'

const Workshops = ({ws}) => {
  return (
  <div className='container'>
   <div className="title">
    <h1 data-text="WORKSHOPS"><span>WORKSHOPS</span> </h1>
    </div>
   
      <div className='cards'>
                {
                  ws.map( (workshop) => {
                        return <Bullet key={workshop.id} {...workshop}/>
                    } )
                }
            </div>
            </div>
  );
};

export default Workshops;
