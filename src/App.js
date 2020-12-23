import React from 'react';

function App() {
  return (
    <div className='App'>
      <div className='top-circle'></div>
      <div className='bottom-circle'></div>
      <div className='card'>
        <div className='card-top'></div>
        <div className='card-bottom'>
          <div className='profile-img'></div>
          <div className='info'>
            <p>
              Victor Crest <span>26</span>
            </p>
            <p className='city'>London</p>
          </div>
          <div className='social'>
            <div>
              <p>80K</p>
              <p>Followers</p>
            </div>
            <div>
              <p>803K</p>
              <p>Likes</p>
            </div>
            <div>
              <p>1.4K</p>
              <p>Photos</p>
            </div>
          </div>
        </div>
      </div>
      <div class='attribution'>
        Challenge by Frontend Mentor. Coded by Rashid Gerard.
      </div>
    </div>
  );
}

export default App;
