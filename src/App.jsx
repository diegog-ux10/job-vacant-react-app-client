import {
  BrowserRouter as Router,
  Route,
  Routes,
} from 'react-router-dom'
import { BaseLayout } from './features/shared/pages/layouts/base-layout'
import { HomePage } from './features/shared/pages/HomePage/home-page'
import { LoginPage } from './features/auth/pages/LoginPage/login-page'
import { AdminPage } from './features/shared/pages/AdminPage/admin-page'

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
                <BaseLayout>
                  <LoginPage />
                </BaseLayout>
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
