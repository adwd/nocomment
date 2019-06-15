import React from 'react';
import ReactDOM from 'react-dom';

const App = () => {
  return (
    <div style={{ minWidth: '300px' }}>
      <h4>
        NoComment <small>removes social comments.</small>{' '}
      </h4>
      <p>Get away from grumpy stuff. Live kindly!</p>
      <div>
        Icons made by{' '}
        <a
          href="https://www.flaticon.com/authors/pixel-buddha"
          title="Pixel Buddha"
        >
          Pixel Buddha
        </a>{' '}
        from{' '}
        <a href="https://www.flaticon.com/" title="Flaticon">
          www.flaticon.com
        </a>{' '}
        is licensed by{' '}
        <a
          href="http://creativecommons.org/licenses/by/3.0/"
          title="Creative Commons BY 3.0"
          target="_blank"
        >
          CC 3.0 BY
        </a>
      </div>
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById('app'));
