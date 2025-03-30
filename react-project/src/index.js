import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import {BrowserRouter, Routes, Route} from "react-router-dom";
import Layout from './Layout';
import Home from './pages/Home';
import Account from './pages/Account';
import Recent from './pages/Recent';
import Settings from './pages/Settings';
import Plans from './pages/Plans';
//import About from './pages/About';
//import Nopage from './pages/Nopage';

function App(){
    return(
        <BrowserRouter basename={process.env.PUBLIC_URL}>
          <Routes>
            <Route path="/" element={<Layout />}>
              <Route index element={<Home />} />
              <Route path="account" element={<Account />} />
              <Route path="recent" element={<Recent />} />
              <Route path="settings" element={<Settings />} />
              <Route path="plans" element={<Plans />} />
              {/* <Route index element={<Account />} /> */}
              {/* <Route path="about" element={<About />} />
              <Route path="blog" element={<Blog />} />
              <Route path="*" element={<Nopage/>} /> */}
            </Route>
          </Routes>
        </BrowserRouter>
      );
};

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
