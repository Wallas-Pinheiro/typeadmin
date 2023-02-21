import { Login } from './pages/login'
import { createBrowserRouter, RouterProvider, } from 'react-router-dom';
import { ListUsers } from './pages/ListUsers';

const router = createBrowserRouter([{
  path: "/",
  element: <Login />,
},
{
  path:"/app",
  element: <ListUsers/>
}
]);

export function App() {
	return <RouterProvider router={router} />
}
