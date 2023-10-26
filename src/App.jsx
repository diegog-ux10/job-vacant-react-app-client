import {
  BrowserRouter as Router,
  Route,
  Routes,
} from 'react-router-dom'
import { BaseLayout } from './features/shared/pages/layouts/base-layout'
import { HomePage } from './features/shared/pages/HomePage/home-page'
import { LoginPage } from './features/auth/pages/LoginPage/login-page'
import { AdminPage } from './features/shared/pages/AdminPage/admin-page'
import { AuthLayout } from './features/auth/pages/layouts/AuthLayout'

function App() {

  return (
    <Router>
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
                <AuthLayout>
                  <LoginPage />
                </AuthLayout>
              }
            />
            <Route
              path="/admin"
              element={
                <AdminPage />
              }
            />
      </Routes>
    </Router>
  )
}

export default App
