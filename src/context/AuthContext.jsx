'use client'

import {
	getUserApi,
	signupApi,
	signinApi,
	logoutApi,
} from '@/services/authService'
import { useRouter } from 'next/navigation'
import {
	createContext,
	useReducer,
	useContext,
	useEffect,
} from 'react'
import toast from 'react-hot-toast'

const AuthContext = createContext()

const initialState = {
	user: null,
	isAuthenticated: false,
	isLoading: true,
	error: null,
}
const authReducer = (state, action) => {
	switch (action.type) {
		case 'loading':
			return {
				...state,
				isLoading: true,
				error: null,
			}
		case 'rejected':
			return {
				...state,
				isLoading: false,
				error: action.payload,
			}
		case 'signin':
		case 'signup':
		case 'user/loaded':
			return {
				...state,
				user: action.payload,
				isAuthenticated: true,
				isLoading: false,
				error: null,
			}
		case 'logout':
			return {
				user: null,
				isAuthenticated: false,
				isLoading: false,
				error: null,
			}
		default:
			return state
	}
}

export default function AuthProvider({ children }) {
	const router = useRouter()
	const [{ user, isAuthenticated, isLoading, error }, dispatch] =
		useReducer(authReducer, initialState)

	async function signin(values) {
		dispatch({ type: 'loading' })
		try {
			const { user, message } = await signinApi(values)
			dispatch({ type: 'signin', payload: user })
			toast.success(message)
			router.push('/profile')
		} catch (error) {
			const errorMsg = error?.response?.data?.message
			dispatch({ type: 'rejected', payload: errorMsg })
			toast.error(errorMsg)
		}
	}

	async function signup(values) {
		dispatch({ type: 'loading' })
		try {
			const { user, message } = await signupApi(values)
			dispatch({ type: 'signup', payload: user })
			toast.success(message)
			router.push('/profile')
		} catch (error) {
			const errorMsg = error?.response?.data?.message
			dispatch({ type: 'rejected', payload: errorMsg })
			toast.error(errorMsg)
		}
	}

	async function getUser() {
		dispatch({ type: 'loading' })
		try {
			//   await new Promise((resolve) => setTimeout(resolve, 3000));
			const { user } = await getUserApi()
			dispatch({ type: 'user/loaded', payload: user })
		} catch (error) {
			const errorMsg = error?.response?.data?.message
			dispatch({ type: 'rejected', payload: errorMsg })
			// toast.error(errorMsg);
		}
	}

	async function logout() {
		try {
			await logoutApi()
			router.push('/')
			// document.location.href = "/";
			dispatch({ type: 'logout' })
		} catch (error) {
			toast.error(error)
		}
	}

	useEffect(() => {
		async function fetchData() {
			await getUser()
		}
		fetchData()
	}, [])

	return (
		<AuthContext.Provider
			value={{
				user,
				isAuthenticated,
				isLoading,
				signin,
				signup,
				logout,
			}}
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
