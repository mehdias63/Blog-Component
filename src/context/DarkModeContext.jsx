'use client'
import { createContext, useContext, useEffect, useState } from 'react'
import useLocalStorageState from '../hooks/useLocalStorageState'

const DarkModeContext = createContext()

export function DarkModeProvider({ children }) {
	const [hasMounted, setHasMounted] = useState(false)

	// مقدار اولیه را روی false بگذار، چون در SSR window نداریم
	const [isDarkMode, setIsDarkMode] = useLocalStorageState(
		'isDarkMode',
		false,
	)

	const toggleDarkMode = () => setIsDarkMode(prev => !prev)

	// بررسی وضعیت واقعی دارک مود فقط بعد از mount
	useEffect(() => {
		if (!hasMounted) {
			const prefersDark = window.matchMedia(
				'(prefers-color-scheme: dark)',
			).matches
			setIsDarkMode(prev => (prev !== null ? prev : prefersDark))
			setHasMounted(true)
		}
	}, [])

	useEffect(() => {
		if (!hasMounted) return

		if (isDarkMode) {
			document.documentElement.classList.add('dark-mode')
			document.documentElement.classList.remove('light-mode')
		} else {
			document.documentElement.classList.add('light-mode')
			document.documentElement.classList.remove('dark-mode')
		}
	}, [isDarkMode, hasMounted])

	// از رندر قبل از mount جلوگیری کن (اختیاری)
	if (!hasMounted) return null

	return (
		<DarkModeContext.Provider value={{ isDarkMode, toggleDarkMode }}>
			{children}
		</DarkModeContext.Provider>
	)
}

export function useDarkMode() {
	const context = useContext(DarkModeContext)

	if (context === undefined)
		throw new Error(
			'DarkModeContext was used outside of DarkModeProvider',
		)

	return context
}
