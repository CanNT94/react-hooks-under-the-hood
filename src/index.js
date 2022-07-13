import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import {useState} from './hooks';

const App = () => {
    const [countA, setCountA] = useState(1);
    const [countB, setCountB] = useState(-1);
    return (
        <div>
            <div>
                <h1>Count A: {countA} </h1>
                <button onClick={() => setCountA(countA - 1)}>Subtract</button>
                <button onClick={() => setCountA(countA + 1)}>Add</button>
            </div>
            <div>
                <h1>Count B: {countB} </h1>
                <button onClick={() => setCountB(countB - 1)}>Subtract</button>
                <button onClick={() => setCountB(countB + 1)}>Add</button>
            </div>
        </div>
    )
}

export const render = () => {
    ReactDOM.render(<App />, document.getElementById('root'));
};

render();


