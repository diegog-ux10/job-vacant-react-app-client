import {
  BrowserRouter as Router,
  Route,
  Routes,
} from 'react-router-dom'
import { BaseLayout } from './features/shared/layouts'
import { AuthLayout } from './features/auth/layouts'
import { AdminPage, HomePage } from './features/shared/pages'
import { LoginPage } from './features/auth/pages'



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
