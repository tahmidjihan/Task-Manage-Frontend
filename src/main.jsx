import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import { BrowserRouter, Route, Routes } from 'react-router';
import App from './App.jsx';
import Navbar from './components/navbar';
import Auth from './components/auth';
import AuthProvider from './AuthProvider.jsx';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AuthProvider>
      <QueryClientProvider client={new QueryClient()}>
        <BrowserRouter>
          <Navbar />
          <Routes>
            <Route path='/' element={<App />} />
            <Route path='/auth' element={<Auth />} />
          </Routes>
        </BrowserRouter>
      </QueryClientProvider>
    </AuthProvider>
  </StrictMode>
);
