import '@/styles/globals.css'
import vazirFont from '@/constants/localFont'
import Header from '@/components/Header'
import { Toaster } from 'react-hot-toast'
import AuthProvider from '@/context/AuthContext'
import ReactQueryProvider from '@/providers/ReactQueryProvider'

export const metadata = {
	title: {
		template: '%s | بلااگ اپ',
		default: 'بلاگ اپ',
	},
	description: 'وب اپلیکیشن مدیریت بلاگ ها و نظرات کاربران',
}

export default function RootLayout({ children }) {
	return (
		<html lang="fa" dir="rtl">
			<body
				className={`${vazirFont.variable} font-sans min-h-screen`}
			>
				<Toaster />
				<ReactQueryProvider>
					<AuthProvider>{children}</AuthProvider>
				</ReactQueryProvider>
			</body>
		</html>
	)
}
