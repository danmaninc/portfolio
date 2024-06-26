import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import {HashRouter, Route, Routes} from "react-router-dom";
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
      <HashRouter>
          <Routes>
              <Route path="/" element={<App/>}/>
              <Route path="/hw2" element={<Homework2/>}/>
          </Routes>
          {/*<App/>*/}
      </HashRouter>
      {/*<RouterProvider router={router} />*/}
  </React.StrictMode>,
)
