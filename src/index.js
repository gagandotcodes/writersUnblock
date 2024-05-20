// import React from 'react';
// import ReactDOM from 'react-dom/client';
// import './index.css';
// import reportWebVitals from './reportWebVitals';
// import {
//   createBrowserRouter,
//   RouterProvider,
// } from "react-router-dom";
// import LandingPage from './pages/LandingPage';
// import ChooseMethod from './pages/ChooseMethod';
// import Layout from './components/Layout';
// import EnterManually from './pages/EnterManually';
// import Titles from './pages/Titles';
// import Submit from './pages/Submit';

// const router = createBrowserRouter([
//   {
//     path: "/",
//     element: <LandingPage/>,
//   },
//   {
//     path: "/choose-method",
//     element: <ChooseMethod/>,
//   },
//   {
//     path: "/enter-manually",
//     element: <EnterManually/>,
//   },
//   {
//     path: "/titles",
//     element: <Titles/>,
//   },
//   {
//     path: "/submit",
//     element: <Submit/>,
//   },
// ]);

// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//   <React.StrictMode>
//      <Layout/>
//      <RouterProvider router={router} />
//   </React.StrictMode>
// );

// reportWebVitals();


import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";
import { AnimatePresence, motion } from 'framer-motion';
import LandingPage from './pages/LandingPage';
import ChooseMethod from './pages/ChooseMethod';
import Layout from './components/Layout';
import EnterManually from './pages/EnterManually';
import Titles from './pages/Titles';
import Submit from './pages/Submit';

const App = () => {
  const location = useLocation();

  return (
    <>
      <Layout />
      <AnimatePresence>
        <Routes location={location} key={location.pathname}>
          <Route 
            path="/" 
            element={<PageWrapper><LandingPage /></PageWrapper>} 
          />
          <Route 
            path="/choose-method" 
            element={<PageWrapper><ChooseMethod /></PageWrapper>} 
          />
          <Route 
            path="/enter-manually" 
            element={<PageWrapper><EnterManually /></PageWrapper>} 
          />
          <Route 
            path="/titles" 
            element={<PageWrapper><Titles /></PageWrapper>} 
          />
          <Route 
            path="/submit" 
            element={<PageWrapper><Submit /></PageWrapper>} 
          />
        </Routes>
      </AnimatePresence>
    </>
  );
};

const PageWrapper = ({ children }) => (
  <motion.div
  initial={{ opacity: 0 }}
  animate={{ opacity: 1 }}
  exit={{ opacity: 1 }}
  transition={{ duration: 0.5, ease: "easeInOut" }}
  // style={{  width: '100%' }}
  >
    {children}
  </motion.div>
);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Router>
      <App />
    </Router>
  </React.StrictMode>
);

reportWebVitals();
