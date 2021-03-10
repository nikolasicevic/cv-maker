import React from 'react';
import ReactDOM from 'react-dom';
import Section from './Section';

class App extends React.Component {
    render() {
        return (
            <main>
                <Section id="data" />
                <Section id="settings" />
            </main>
        );
    }
}

export default App;
