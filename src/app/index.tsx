// @ts-ignore
import React, { Component } from 'react';
import Header from '../header/'
import './index.css';
import Index from "../hello/index";

export default class App extends Component{
  render(){
    return (
        <div>
          <Header />
          <Index />
        </div>
    )
  }
}
