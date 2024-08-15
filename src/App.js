
import './App.css';


import React, { Component } from 'react'
import { Navbar } from './Components/NavBar1';
import News from './Components/News';
// import { Router, Routes } from 'react-router-dom';
import LoadingBar from 'react-top-loading-bar';
import {
  BrowserRouter as Router,
  Route,
  Routes,
} from "react-router-dom";




export default class App extends Component {
  pagesize = 10
  apikey= process.env.REACT_APP_NEWS_API  
  state={
    progress:0
  }
  setProgress=(progress)=>{
    this.setState({progress:progress})
  }

  render() {
    return (
      <div>
        <Router>
          <Navbar />
          <LoadingBar
            color='#f11946'
            progress={this.state.progress}
           
          />
          <Routes>

            <Route exact path="/" element={<News setProgress={this.setProgress} apikey={this.apikey} pagesize={this.pageSize} country="in" category="genral" />} />
            <Route exact path="/business" element={<News setProgress={this.setProgress} apikey={this.apikey} pagesize={this.pageSize} key="business" country="in" category="business" />} />
            <Route exact path="/entertainment" element={<News setProgress={this.setProgress} apikey={this.apikey} pagesize={this.pageSize} key="entertainment" country="in" category="entertainment" />} />
            <Route exact path="/genral" element={<News setProgress={this.setProgress} apikey={this.apikey} pagesize={this.pageSize} country="in" key="genral" category="genral" />} />
            <Route exact path="/health" element={<News setProgress={this.setProgress} apikey={this.apikey} pagesize={this.pageSize} country="in" key="health" category="health" />} />
            <Route exact path="/science" element={<News setProgress={this.setProgress} apikey={this.apikey} pagesize={this.pageSize} country="in" key="science" category="science" />} />
            <Route exact path="/sports" element={<News setProgress={this.setProgress} apikey={this.apikey} pagesize={this.pageSize} country="in" key="sports" category="sports" />} />
            <Route exact path="/technology" element={<News setProgress={this.setProgress} apikey={this.apikey} pagesize={this.pageSize} country="in" key="technology" category="technology" />} />
          </Routes>
        </Router>
      </div>
    )
  }
}

