import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import { BaseLayout } from './features/shared/pages/layouts/base-layout'
import { HomePage } from './features/shared/pages/HomePage/home-page'
import { LoginPage } from './features/auth/pages/LoginPage/login-page'
import { useSelector } from 'react-redux'

function App() {
  const { isAuthenticated } = useSelector((state) => state.user)
  return (
    <Router>
      <Routes>
        {!isAuthenticated ? (
          <>
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
          </>
        ) : (
          <>
            <Route
              path="/"
              element={
                <BaseLayout>
                  <HomePage />
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
          </>
        )}
      </Routes>
    </Router>
  )
}

export default App
