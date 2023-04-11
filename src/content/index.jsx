import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider, Router, Route } from "react-router-dom";

import MainPage from './components/MainPage.jsx';
import DarthVader from './components/DarthVader.jsx';

const router = createBrowserRouter([
  { path: '/', element: <MainPage /> },
  { path: '/darthvader', element: <DarthVader /> },
]);


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <div>
      <React.StrictMode>
        <RouterProvider router={router} />
      </React.StrictMode>
    </div>
);


