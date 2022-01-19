import { Route, Routes } from 'react-router-dom'
import './App.css'
import Auth from './screens/Auth/auth'
import Home from './screens/Home/home'
import Welcome from './screens/Welcome/welcome'

const routes = [
  {
    key: 0,
    path: '/',
    exact: true,
    element: <Welcome />,
  },
  {
    key: 1,
    path: '/home',
    element: <Home />,
  },
  {
    key: 2,
    path: '/sign-up',
    element: <Auth type={'sign_up'} />,
  },
  {
    key: 3,
    path: '/sign-in',
    element: <Auth type={'sign_in'} />,
  },
]

function App() {
  return (
    <Routes>
      {routes.map(({ path, exact, element, key }) => (
        <Route path={path} element={element} exact={exact} key={key} />
      ))}
    </Routes>
  )
}

export default App
