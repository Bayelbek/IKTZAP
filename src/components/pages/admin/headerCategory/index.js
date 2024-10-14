import React from 'react'

function headerCategory(props) {
  return (
    <div className='header_category'>
      <h2>{props.title}</h2>
      <a href={props.addLink}>Добавить </a>
    </div>
  )
}

export default headerCategory;
