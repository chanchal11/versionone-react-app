import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Navigate, Routes } from 'react-router-dom';
import UserListPage from './pages/UserListPage';
import UserDetailPage from './pages/UserDetailPage';
import { Container, LinearProgress } from '@mui/material';
import './i18n';
import './App.css';
import LanguageSwitcher from './components/LanguageSwitcher';

const App: React.FC = () => {

  const [ loading, setLoading ] = useState(true);

  return (
    <Router>
      <Container>
      { loading && <LinearProgress />}
        <Routes>
          <Route path="/" element={<UserListPage setLoading={setLoading}  />} />
          <Route path="/user-detail" element={<UserDetailPage setLoading={setLoading} />} />
          <Route path='*' element={<Navigate to="/" />}   />
        </Routes>
        <LanguageSwitcher />
      </Container>
    </Router>
  );
};

export default App;
