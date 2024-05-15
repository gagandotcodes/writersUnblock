import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import LandingPage from './pages/LandingPage';
import ChooseMethod from './pages/ChooseMethod';
import Layout from './components/Layout';
import EnterManually from './pages/EnterManually';
import Titles from './pages/Titles';

const router = createBrowserRouter([
  {
    path: "/",
    element: <LandingPage/>,
  },
  {
    path: "/choose-method",
    element: <ChooseMethod/>,
  },
  {
    path: "/enter-manually",
    element: <EnterManually/>,
  },
  {
    path: "/titles",
    element: <Titles/>,
  },
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
     <Layout/>
     <RouterProvider router={router} />
  </React.StrictMode>
);

reportWebVitals();
