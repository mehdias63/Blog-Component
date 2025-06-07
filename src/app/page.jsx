'use client'
import Button from '@/ui/Button'
import Link from 'next/link'
import Image from 'next/image'
import { motion } from 'framer-motion'

export default function Home() {
	return (
		<section className="min-h-screen flex flex-col-reverse md:flex-row items-center justify-between px-6 lg:px-20 py-16 gap-12 xl:max-w-screen-xl mx-auto">
			{/* Text section */}
			<motion.div
				initial={{ opacity: 0, y: 40 }}
				animate={{ opacity: 1, y: 0 }}
				transition={{ duration: 0.8 }}
				className="text-center md:text-right max-w-xl backdrop-blur-lg rounded-2xl p-8"
			>
				<h1 className="text-4xl lg:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-sky-500 to-purple-600 leading-tight mb-6 p-1">
					مدیریت حرفه‌ای بلاگ، ساده و سریع
				</h1>
				<p className="text-secondary-600 text-lg md:text-xl leading-relaxed my-8 md:my-16">
					از نوشتن اولین پست تا مدیریت نظرات و آنالیز بازخوردها همه در
					یک محیط یکپارچه. وقتشه بلاگت رو ارتقا بدی!
				</p>
				<div className="flex flex-col sm:flex-row justify-center md:justify-start gap-4">
					<Button variant="primary" className="w-full sm:w-auto">
						<Link href="/profile">🚀 مدیریت بلاگ ها</Link>
					</Button>
					<Button variant="secondary" className="w-full sm:w-auto">
						<Link href="/blogs">📖 مشاهده بلاگ‌ ها</Link>
					</Button>
				</div>
			</motion.div>
			<div className="w-full md:min-w-[300px]">
				<Image
					src="/images/undraw_join_6quk.svg"
					alt="مدیریت بلاگ"
					width={40}
					height={40}
					className="w-full h-auto"
				/>
			</div>
		</section>
	)
}
