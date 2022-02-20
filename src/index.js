import React from 'react';
import ReactDOM from 'react-dom';
// import the component
import SingleComment from './SingleComment';
import UserCard from './UserCard';
// importar imágenes
import profile1 from './images/image-1.jpg';
import profile2 from './images/image-2.png';
import profile3 from './images/image-3.png';

const App = () => {
  return(
    <div className='ui comments'>
      <UserCard>
        <SingleComment 
          name='macaco'
          date='Today at 17:00PM' 
          text='I love being a NFT'
          picture={profile1}
        />
      </UserCard>
      <UserCard>
        <SingleComment 
          name='monkey' 
          date='Today at 19:00PM' 
          text='I eat bananas'
          picture={profile2}
        />
      </UserCard>
      <UserCard>
        <SingleComment 
          name='simio' 
          date='Today at 21:00PM' 
          text='sopa du macaco'
          picture={profile3}
        />
      </UserCard>
    </div>
  )
}

ReactDOM.render(
  <App />,
  document.querySelector('#root')
)