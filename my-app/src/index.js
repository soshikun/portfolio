import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Home from './components/Home/Home.tsx';
import {
  createBrowserRouter,
  RouterProvider,
} from 'react-router-dom';
import reportWebVitals from './reportWebVitals';
import ErrorPage from './components/ErrorPage/ErrorPage.tsx';
import Navigation from './components/Navigation/Navigation.tsx';

const router = createBrowserRouter([
  {
    path: '/',
    element: <div><Navigation /><Home /></div>,
    errorElement: <div><Navigation /><ErrorPage /></div>
  },
  {
    path: '/projects',
    element: <div><Navigation /><Home /></div>,
  },
  {
    path: '/about',
    element: <div><Navigation /><Home /></div>,
  },
  {
    path: '/education',
    element: <div><Navigation /><Home /></div>,
  },
  {
    path: '/workExperience',
    element: <div><Navigation /><Home /></div>,
  },
  {
    path: '/funFacts',
    element: <div><Navigation /><Home /></div>,
  },
  {
    path: '/contact',
    element: <div><Navigation /><Home /></div>,
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
