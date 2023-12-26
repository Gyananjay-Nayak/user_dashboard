import './App.css';
import { Route, Routes, Navigate } from 'react-router-dom';
import routes from './routes/allRoutes';
import Layout from './layout/index';

function App() {
  return (
    <>
      <Routes>
        <Route element={<Layout />}>
          {routes.map((eachComponent) => (
            <Route
              path={eachComponent.path}
              element={eachComponent.component}
              key={eachComponent.path}
            />
          ))}
          <Route path="/" element={<Navigate to="user" replace />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
