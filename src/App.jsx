import {
  BrowserRouter,
  Routes,
  Route,
  Navigate,
} from 'react-router-dom';

import AppLayout from './ui/AppLayout';
import Dashboard from './pages/Dashboard';
import Products from './pages/Products';
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<AppLayout />}>
          <Route
            index
            element={<Navigate replace to="dashboard" />}
          />
          <Route path="dashboard" element={<Dashboard />} />
          <Route path="products" element={<Products />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
