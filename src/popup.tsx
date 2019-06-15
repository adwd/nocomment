import React from 'react';
import ReactDOM from 'react-dom';

const App = () => {
  return (
    <div style={{ minWidth: '300px' }}>
      <h4>NoComment <small>removes social comments.</small> </h4>
      <p>Get away from grumpy stuff. Live kindly!</p>
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById('app'));
