import '@/styles/globals.css'
import vazirFont from '@/constants/localFont'
import Header from '@/components/Header'

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
				<Header />
				<div className="container xl:max-w-screen-xl">{children}</div>
			</body>
		</html>
	)
}
