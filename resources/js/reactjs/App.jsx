/*import React from 'react';
import { createRoot } from 'react-dom/client'

export default function App(){
    return(
        
        <div>
            <h1>How To Install React in Laravel 9 with Vite</h1>
            <h1>Happy cording</h1>
        </div>
    );
}*/

import { useState } from "react";
import "./App.css";
import Main from "./components/main/Main";
import Navbar from "./components/navbar/Navbar";
import Sidebar from "./components/sidebar/Sidebar";
import LoginUi from "./components/login/LoginUi";
import {Route, BrowserRouter as Router} from "react-router-dom";

const App = () => {
  const [sidebarOpen, setsidebarOpen] = useState(false);
  const openSidebar = () => {
    setsidebarOpen(true);
  };
  const closeSidebar = () => {
    setsidebarOpen(false);
  };
  return (

    <Router>
    <div className="container">
      <Navbar sidebarOpen={sidebarOpen} openSidebar={openSidebar}/>
      <Main />
      <Sidebar sidebarOpen={sidebarOpen} closeSidebar={closeSidebar}/>
    </div>

      <Route path ="/login" components={LoginUi}/> 
    </Router>
  );
};

export default App;

if(document.getElementById('m-app')){
    createRoot(document.getElementById('m-app')).render(<App />)
}