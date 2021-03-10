import React from 'react';
import ReactDOM from 'react-dom';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

class Data extends React.Component {
    render() {
        return (
            <nav>
                <ul className="nav">
                    <li><a id="info"><FontAwesomeIcon icon="address-card" />Basic Information</a></li>
                    <li><a id="exp"><FontAwesomeIcon icon="briefcase" />Work Experience</a></li>
                    <li><a id="edu"><FontAwesomeIcon icon="graduation-cap" />Education</a></li>
                    <li><a id="skills"><FontAwesomeIcon icon="laptop-code" />Skills</a></li>
                    <li><a id="interests"><FontAwesomeIcon icon="guitar" />Interests</a></li>
                    <li><a id="refs"><FontAwesomeIcon icon="registered" />References</a></li>
                </ul>
            </nav>
        );
    }
}

export default Data;
