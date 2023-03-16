import './App.css';
import {BrowserRouter, Routes, Route} from "react-router-dom";
import LoadingBar from 'react-top-loading-bar'
import React, { useState } from 'react'
import PropTypes from 'prop-types'
import Navbar from './components/Navbar';
import News from './components/News';

const App = (props)=>{
  const [progress,setProgress] = useState(0);
  const updateProgress = (progress) => {
    setProgress(progress);
  }
    return (
      <div>
        <BrowserRouter>
          <Navbar/>
          <LoadingBar
            height={3}
            color='#f11946'
            progress={progress}
          />
          <Routes>
            <Route exact path="/" element={<News setProgress={updateProgress} apiKey={props.apiKey}  key="general" pageSize={props.pageSize} country="gb" category="general"/>} />
            <Route exact path="/general" element={<News setProgress={updateProgress} apiKey={props.apiKey}  key="general" pageSize={props.pageSize} country="gb" category="general"/>} />
            <Route exact path="/business" element={<News setProgress={updateProgress} apiKey={props.apiKey}  key="business" pageSize={props.pageSize} country="gb" category="business"/>} />
            <Route exact path="/entertainment" element={<News setProgress={updateProgress} apiKey={props.apiKey}  key="entertainment" pageSize={props.pageSize} country="gb" category="entertainment"/>} />
            <Route exact path="/health" element={<News setProgress={updateProgress} apiKey={props.apiKey}  key="health" pageSize={props.pageSize} country="gb" category="health"/>} />
            <Route exact path="/science" element={<News setProgress={updateProgress} apiKey={props.apiKey}  key="science" pageSize={props.pageSize} country="gb" category="science"/>} />
            <Route exact path="/sports" element={<News setProgress={updateProgress} apiKey={props.apiKey}  key="sports" pageSize={props.pageSize} country="gb" category="sports"/>} />
            <Route exact path="/technology" element={<News setProgress={updateProgress} apiKey={props.apiKey}  key="technology" pageSize={props.pageSize} country="gb" category="technology"/>} />
          </Routes>
        </BrowserRouter>
        
      </div>
    )
}
App.defaultProps = {
  pageSize: 9,
  apiKey: process.env.REACT_APP_NEWS_API
}
App.propTypes = {
  pageSize: PropTypes.number,
  apiKey: PropTypes.string
}

export default App