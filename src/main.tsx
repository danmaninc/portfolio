import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import {HashRouter as Router, Route, Routes} from "react-router-dom";
import {Homework2} from "./hw2/main.tsx";
ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
      <Router>
          <Routes>
            <Route path="/" element={<App/>}/>
            <Route path="hw2/" element={<Homework2/>}/>
          </Routes>
      </Router>
      {/*<RouterProvider router={router} />*/}
  </React.StrictMode>,
)
