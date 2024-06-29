import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import {BrowserRouter, Route, Routes} from "react-router-dom";
import {Homework2} from "./hw2/main.tsx";
// import {Route, Routes} from "react-router-dom";
// import {Homework2} from "./hw2/main.tsx";
// import {Homework2} from "./hw2/main.tsx";

// const router = createBrowserRouter(createRoutesFromElements([
//     <Route path="/" element={<App/>}/>,
//     <Route path="hw2/" element={<Homework2/>}/>]
// ), { basename: '/portfolio'})

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
      <BrowserRouter>
          <Routes>
              <Route path="/" element={<App/>}/>
              <Route path="/hw2" element={<Homework2/>}/>
          </Routes>
          {/*<App/>*/}
      </BrowserRouter>
      {/*<RouterProvider router={router} />*/}
  </React.StrictMode>,
)
