import {
  BrowserRouter as Router,
  Route,
  Routes,
} from 'react-router-dom'
import Tailwind from './features/shared/pages/Prueva/Tailwind.jsx'
import { BaseLayout } from './features/shared/pages/layouts/base-layout'
import { HomePage } from './features/shared/pages/HomePage/home-page'
import { LoginPage } from './features/auth/pages/LoginPage/login-page'

function App() {

  return (
    <Router>
      <Tailwind/>
      <Routes>
            <Route
              path="/"
              element={
                <BaseLayout>
                  <HomePage />
                </BaseLayout>
              }
            />
            <Route
              path="/login"
              element={
                <BaseLayout>
                  <LoginPage />
                </BaseLayout>
              }
            />
            <Route
              path="/admin"
              element={
                <BaseLayout>
                  <HomePage />
                </BaseLayout>
              }
            />
      </Routes>
    </Router>
  )
}

export default App
