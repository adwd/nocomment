import moment from 'moment';
import React from 'react';
import ReactDOM from 'react-dom';

let count = 0;

const time = moment().format('YYYY-MM-DD HH:mm:ss');

const App = () => {
  const [count, setCount] = React.useState(0);
  const [url, setUrl] = React.useState('');
  React.useEffect(() => {
    chrome.tabs.query({ active: true, currentWindow: true }, tabs => {
      setUrl(tabs[0].url || '');
    });
  }, []);

  const handleCountUp = () => {
    const c = count + 1;
    setCount(c);
    chrome.browserAction.setBadgeText({ text: count.toString() });
  };

  const handleChangeBackground = () => {
    chrome.tabs.query({ active: true, currentWindow: true }, tabs => {
      chrome.tabs.sendMessage(
        tabs[0].id,
        {
          color: '#555555',
        },
        function(msg) {
          console.log('result message:', msg);
        },
      );
    });
  };

  return (
    <>
      <ul style={{ minWidth: '700px' }}>
        <li>Current URL: {url}</li>
        <li>Current Time: {time}</li>
      </ul>
      <button onClick={handleCountUp}>count up</button>
      <button onClick={handleChangeBackground}>change background</button>
    </>
  );
};

ReactDOM.render(<App />, document.getElementById('app'));
