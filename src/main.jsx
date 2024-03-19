import React from 'react'
import ReactDOM from 'react-dom/client'

import './index.css'
import {

  RouterProvider,
} from "react-router-dom";
import router from './Routes/router';
import AuthProvider from './Providers/AuthProvider';
import { Toaster } from 'react-hot-toast';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>
    <Toaster></Toaster>
    <div className='max-w-screen-xl mx-auto'>
     <RouterProvider router={router} />
     </div>
    </AuthProvider>
  </React.StrictMode>,
)
