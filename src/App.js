import './App.css';
import {BrowserRouter, Routes, Route} from "react-router-dom";
import LoadingBar from 'react-top-loading-bar'
import React, { useState } from 'react'
import Navbar from './components/Navbar';
import News from './components/News';

const App = (props)=>{
  const pageSize = 9;
  const apiKey = process.env.REACT_APP_NEWS_API;
  const [progress,setProgress] = useState(0);

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
            <Route exact path="/" element={<News setProgress={setProgress} apiKey={apiKey}  key="general" pageSize={pageSize} country="gb" category="general"/>} />
            <Route exact path="/general" element={<News setProgress={setProgress} apiKey={apiKey}  key="general" pageSize={pageSize} country="gb" category="general"/>} />
            <Route exact path="/business" element={<News setProgress={setProgress} apiKey={apiKey}  key="business" pageSize={pageSize} country="gb" category="business"/>} />
            <Route exact path="/entertainment" element={<News setProgress={setProgress} apiKey={apiKey}  key="entertainment" pageSize={pageSize} country="gb" category="entertainment"/>} />
            <Route exact path="/health" element={<News setProgress={setProgress} apiKey={apiKey}  key="health" pageSize={pageSize} country="gb" category="health"/>} />
            <Route exact path="/science" element={<News setProgress={setProgress} apiKey={apiKey}  key="science" pageSize={pageSize} country="gb" category="science"/>} />
            <Route exact path="/sports" element={<News setProgress={setProgress} apiKey={apiKey}  key="sports" pageSize={pageSize} country="gb" category="sports"/>} />
            <Route exact path="/technology" element={<News setProgress={setProgress} apiKey={apiKey}  key="technology" pageSize={pageSize} country="gb" category="technology"/>} />
          </Routes>
        </BrowserRouter>
        
      </div>
    )
}

export default App