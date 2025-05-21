import { createContext, useReducer, useContext } from 'react'

const AuthContext = createContext()

const initialState = {
	user: null,
	isAuthenticated: false,
	isLoading: true,
	error: null,
}

const authReducer = (state, action) => {}

export default function AuthProvider({ children }) {
	const [{ user, isAuthenticated, isLoading, error }, dispatch] =
		useReducer(authReducer, initialState)
	return (
		<AuthContext.Provider
			value={{ user, isAuthenticated, isLoading, signin, signup }}
		>
			{children}
		</AuthContext.Provider>
	)
}

export function useAuth() {
	const context = useContext(AuthContext)
	if (context === undefined) throw new Error('not found Auth Context')
	return context
}
