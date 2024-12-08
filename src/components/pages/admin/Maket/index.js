import React from 'react'

function Maket(props) {
  return (
      <a className={props.className ? props.className : ''} href={props.id ? `/adminPanel/category/${props.id}` : '#'}>
          <img  src={props.image} alt="" />
          <b className="name">{props.title}</b> 
          <p className="description">{props.position}</p>
      </a>
  )
}

export default Maket;
