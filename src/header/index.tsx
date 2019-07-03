import React, {Component} from 'react';
import './index.css';
import {itemMenu} from '../constants';

export default class Header extends Component {

    render() {
        const menuItem = itemMenu.map((item: string, index: number) => (
            <li key={index}>{item.toUpperCase()}</li>
        ))
        return (
            <div className="container">
                <div className="header">
                    <div className="header-title">NIKITA KORNASEVICH</div>
                    <ul className="header-items">
                        {menuItem}
                    </ul>
                </div>
            </div>
        );
    }

}
