import React from 'react';
import ReactDOM from 'react-dom';
// importar imágenes

const SingleComment = (props) => {
  console.log(props);
  return(
    <div className='comment'>
      <a href='/' className='avatar'>
        <img src={props.picture} alt='profile picture' />
      </a>
      <div className='content'>
        <a href='/' className='author'>
          {props.name}
        </a>
        <div className='metadata'>
          <span className='date'>
            {props.date}
          </span>
        </div>
        <div className='text'>
          {props.text}
        </div>
      </div>
    </div>
  )
}

export default SingleComment;