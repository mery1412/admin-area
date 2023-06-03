import React from 'react';
import Dashboard_user from './components/dashboard_users';
import Dashboard_hotels from './components/dashboard_hotels';
import Dashboard_dest from './components/dashboard_dest';
import Dashboard_rest from './components/dashboard_rest';
import Dashboard_forms from './components/dashboard_forms';
import UploadForm from './components/adminUpload';
import EditForm from './components/adminEdit';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import TSt from './components/tst';
const  App =() => {
  return (
    <Router>
    <Routes>
      <Route  path="/usersDashboard" element={<Dashboard_user/>} />
      <Route  path="/hotelsDashboard" element={<Dashboard_hotels/>} />
      <Route  path="/destDashboard" element={<Dashboard_dest/>} />
      <Route  path="/restDashboard" element={<Dashboard_rest/>} />
      <Route  path="/formsDashboard" element={<Dashboard_forms/>} />
      <Route  path="/adminUpload" element={<UploadForm/>} />
      <Route  path="/adminEdit" element={<EditForm/>} />
    </Routes>
  </Router>

  );
}

export default App;
