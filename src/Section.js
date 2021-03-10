import React from 'react';
import ReactDOM from 'react-dom';
import Data from './Data';
import Settings from './Settings';

class Section extends React.Component {
    getSection(id) {
        if (id === 'data') {
            return <Data />;
        }

        return <Settings />;
    }

    render() {
        let id = this.props.id;

        return (
            <section id={id}>
                {this.getSection(id)} 
            </section>
        );
    }
}

export default Section;
