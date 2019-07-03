import React, {Component} from 'react';

import {helloTitle, helloText} from "../constants";

export default class Hello extends Component {
    render() {
        return (
            <div className="container">
                <div className="hello-text">
                    <span>{helloTitle}</span>
                    <span>{helloText}</span>
                </div>
                <div className="hello-photo"></div>
            </div>
        )
    }
}
