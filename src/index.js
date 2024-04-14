import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { createBrowserRouter, RouterProvider,} from "react-router-dom";
//Pages
import Homepage from './Components/Pages/Homepage';
import About from './Components/Pages/About';
import Applicationform from './Components/Pages/ApplicationForm';
import Profile from './Components/Pages/Profile';
import Contact from './Components/Pages/Contact';
import Dashboard from './Components/Pages/Dashboard';
import Errorpage from './Components/Pages/Errorpage';
import Projectlistapp from './Components/Pages/Projectlist.app';
import Projectlisthome from './Components/Pages/Projectlist.home';


const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
    // This page will render if a route is not found
    errorElement: <Errorpage />,
  },
  {
    path: "/applicationform",
    element: <Applicationform/>,
  },
  {
    path: "/profile",
    element: <Profile/>,
  },
  {
    path: "/homepage",
    element: <Homepage/>,
  },
  {
    path: "/contact",
    element: <Contact/>,
  },
  {
    path: "/about",
    element: <About/>,
  },
  {
    path: "/dashboard",
    element: <Dashboard/>,
  },
  {
    path: "/projectlist.home",
    element: <Projectlisthome/>,
  },
  {
    path: "/projectlist.app",
    element: <Projectlistapp/>,
  },
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();