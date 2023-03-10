import { Login } from './pages/login'
import { createBrowserRouter, Navigate, RouterProvider } from 'react-router-dom'
import { ListUsers } from './pages/ListUsers'
import Cookies from 'js-cookie'

function PrivateRoute({ children }) {
	const token = Cookies.get('token')
	if (token) {
		return children
	}
	return <Navigate to="/" />
}

function ProtectedRoute({ children }) {
	const token = Cookies.get('token')
	if (token) {
		return <Navigate to="/app" />
	}
	return children
}

const router = createBrowserRouter([
	{
		path: '/',
		element: (
			<ProtectedRoute>
				<Login />
			</ProtectedRoute>
		)
	},
	{
		path: '/app',
		element: (
			<PrivateRoute>
				<ListUsers />
			</PrivateRoute>
		)
	}
])

export function App() {
	return <RouterProvider router={router} />
}
