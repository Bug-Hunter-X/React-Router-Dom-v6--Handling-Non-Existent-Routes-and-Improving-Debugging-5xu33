// bugSolution.js
import { useLocation, Navigate, Outlet } from 'react-router-dom';

function ErrorBoundary() {
  const location = useLocation();
  return (
    <div>
      <h1>Error: Route not found</h1>
      <p>The requested URL {location.pathname} was not found.</p>
    </div>
  );
}

export default function App() {
  return (
    <div>
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/*" element={<ErrorBoundary />} />
      </Routes>
    </div>
  );
}

function Home() {
  return (
    <div>
      <h1>Home Page</h1>
    </div>
  );
}