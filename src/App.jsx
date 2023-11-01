import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from 'react-router-dom'
import { BaseLayout } from './features/shared/layouts'
import { AuthLayout } from './features/auth/layouts'
import { AdminPage, HomePage } from './features/shared/pages'
import { LoginPage } from './features/auth/pages'
import { useAuthStore } from './features/shared'

function App() {
  const { status } = useAuthStore()

  if (status === 'checking') {
    return <h3>Cargando...</h3>
  }

  return (
    <>
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
          {status === 'non-authenticated' ? (
            <>
              <Route path="/admin" element={<Navigate to="/login" />} />
              <Route
                path="/login"
                element={
                  <AuthLayout>
                    <LoginPage />
                  </AuthLayout>
                }
              />
            </>
          ) : (
            <>
              <Route path="/admin" element={<AdminPage />} />
              <Route path="/login" element={<Navigate to="/admin" />} />
            </>
          )}
        </Routes>
      </Router>
    </>
  )
}

export default App

//cambio de jose gregorio