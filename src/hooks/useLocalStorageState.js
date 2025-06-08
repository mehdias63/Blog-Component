import { useState, useEffect } from 'react'

export default function useLocalStorageState(key, defaultValue) {
	const [state, setState] = useState(defaultValue)

	useEffect(() => {
		if (typeof window === 'undefined') return

		const storedValue = localStorage.getItem(key)
		if (storedValue !== null) {
			setState(JSON.parse(storedValue))
		}
	}, [key])

	useEffect(() => {
		if (typeof window === 'undefined') return

		localStorage.setItem(key, JSON.stringify(state))
	}, [key, state])

	return [state, setState]
}
