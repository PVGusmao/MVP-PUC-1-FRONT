import { useEffect } from 'react';
import { useAuth } from './context/Auth.context';

import AppRoutes from './routes/App.routes';
import AuthRoutes from './routes/Auth.routes';

import api from './service/api';

function App() {
  const { loggedIn, setLoggedIn } = useAuth();

  useEffect(() => {
    api.get('/exercise')
      .then((res) => {
        setLoggedIn(true)
      })
      .catch((error) => console.log(error))
  }, [])

  return (
    <div className=''>
      {
        !loggedIn ? <AuthRoutes /> : <AppRoutes />
      }
    </div>
  )
}

export default App
