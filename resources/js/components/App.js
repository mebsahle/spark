import React from 'react';
import ReactDOM from 'react-dom';
import Header from './Header';

function App() {
    return (
       <div>
           <Header />
       </div>
    );
}

export default App;

if (document.getElementById('app')) {
    ReactDOM.render(<App />, document.getElementById('app'));
}