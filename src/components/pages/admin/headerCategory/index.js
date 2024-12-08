import React, { useState } from 'react';

function headerCategory(props) {

  const goBack = () => {
    window.history.back();
  };

  
  return (
    <div className='header_category'>
      <h2>{props.title}</h2>
      <a style={props.addLink ? {display:'block'} : {display:'none'}} href={props.addLink === 'back' ? '#' : props.addLink} onClick={props.addLink === 'back' ? goBack : undefined}>{props.linkTitle} </a>
    </div>
  )
}

export default headerCategory;
