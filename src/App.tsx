import AuthRoutes from './routes/Auth.routes';
import AppRoutes from './routes/App.routes';
import { useAuth } from './context/Auth.context';

function App() {
  const { loggedIn } = useAuth();

  return (
    <div className=''>
      {
        !loggedIn ? <AuthRoutes /> : <AppRoutes />
      }
    </div>
  )
}

export default App
