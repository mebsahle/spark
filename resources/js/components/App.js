import React from 'react';
import ReactDOM from 'react-dom';
import Header from './Header';
import SwipeButtons from './SwipeButtons';
import TinderCards from './TinderCards';

function App() {
    return (
       <div>
           <Header />
           <TinderCards />
           <SwipeButtons />
       </div>
    );
}

export default App;

if (document.getElementById('app')) {
    ReactDOM.render(<App />, document.getElementById('app'));
}
