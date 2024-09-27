// routes.js
import { Routes, Route } from 'react-router-dom';
import TimelinePage from './pages/timeline';

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/timeline" element={<TimelinePage />} />
    </Routes>
  );
};

export default AppRoutes;