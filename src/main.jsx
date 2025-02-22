import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import { BrowserRouter, Route, Routes } from 'react-router';
import App from './App.jsx';
import Navbar from './components/navbar';
import Auth from './components/auth';
import AuthProvider from './AuthProvider.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AuthProvider>
      <BrowserRouter>
        <Routes>
          <Route
            path='/'
            element={
              <>
                <Navbar />
                <App />
              </>
            }
          />
          <Route path='/auth' element={<Auth />} />
        </Routes>
      </BrowserRouter>
    </AuthProvider>
  </StrictMode>
);
