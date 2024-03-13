import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Provider } from 'react-redux';

import './utils/index.css';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import Connexion from './pages/Connexion';
import Profil from './pages/Profil';
import Error from './pages/Error';
import ProtectedRoute from './utils/ProtectedRoute';
import store from './utils/store';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Router>
      <Provider store={store}>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/sign-in" element={<Connexion />} />
          <Route element={<ProtectedRoute />}>
            <Route path="/profil" element={<Profil />} />
          </Route>
          <Route path="*" element={<Error />} />
        </Routes>
        <Footer />
      </Provider>
    </Router>
  </React.StrictMode>
);