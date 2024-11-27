import Image from 'next/image';
import Link from 'next/link';
import Navbar from './components/Navbar';

export default function Home() {
	return (
		<main className="flex flex-col min-h-screen">
			<Navbar />
			{/* Hero Section */}
			<section className="relative h-screen flex items-center justify-center text-white">
				<Image src="https://cdn.pixabay.com/photo/2015/01/09/11/11/seminar-594125_1280.jpg" alt="Hero Background" fill className="object-cover" priority />
				<div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/75 to-black/80 backdrop-blur-[2px]"></div>
				<div className="container mx-auto px-6 text-center z-10">
					<h1 className="text-5xl md:text-7xl font-bold mb-6 animate-fade-in font-syne tracking-tight">42 STARTUP CLUB</h1>
					<p className="text-xl md:text-1xl mb-8 text-gray-300 max-w-2xl mx-auto">
						42 StartUp Club is a community of visionary entrepreneurs.
						<br />
						Building the future together.
					</p>
					<div className="flex gap-4 justify-center">
						<Link href="/startup-dashboard">
							<button className="text-white bg-[#1B3B5D] hover:bg-white hover:text-[#1B3B5D] text-sm font-medium py-2 px-6 border border-[#1B3B5D] hover:border-[#1B3B5D] transition-all duration-200 mr-4">
								Startups
							</button>
						</Link>
						<Link href="/investor-dashboard">
							<button className="text-white bg-[#1B3B5D] hover:bg-white hover:text-[#1B3B5D] text-sm font-medium py-2 px-6 border border-[#1B3B5D] hover:border-[#1B3B5D] transition-all duration-200">
								Investors
							</button>
						</Link>
					</div>
				</div>
			</section>

			{/* Features Section */}
			<section className="py-32 bg-gradient-to-b from-white to-gray-50">
				<div className="container mx-auto px-6">
					<h2 className="text-4xl font-bold text-center mb-4">Why Join Us?</h2>
					<p className="text-gray-600 text-center mb-16 max-w-2xl mx-auto">Experience the power of collective growth and innovation</p>
					<div className="grid grid-cols-1 md:grid-cols-3 gap-8">
						<div className="group p-8 rounded-2xl bg-white border border-gray-100 hover:border-gray-200 transition-all duration-300 hover:shadow-[0_8px_30px_rgb(0,0,0,0.04)] relative">
							<div className="bg-gradient-to-br from-[#1B3B5D]/10 to-[#1B3B5D]/5 w-16 h-16 rounded-xl flex items-center justify-center mb-6 group-hover:scale-105 transition-transform duration-300">
								<svg className="w-7 h-7 text-[#1B3B5D]" viewBox="0 0 24 24" fill="currentColor">
									<path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm0-12c-2.21 0-4 1.79-4 4s1.79 4 4 4 4-1.79 4-4-1.79-4-4-4zm0 6c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2z" />
								</svg>
							</div>
							<h3 className="text-xl font-semibold mb-3">Exclusive Network</h3>
							<p className="text-gray-600 leading-relaxed">Connect with carefully selected founders and entrepreneurs.</p>
						</div>
						<div className="group p-8 rounded-2xl bg-white border border-gray-100 hover:border-gray-200 transition-all duration-300 hover:shadow-[0_8px_30px_rgb(0,0,0,0.04)] relative">
							<div className="bg-gradient-to-br from-[#1B3B5D]/10 to-[#1B3B5D]/5 w-16 h-16 rounded-xl flex items-center justify-center mb-6 group-hover:scale-105 transition-transform duration-300">
								<svg className="w-7 h-7 text-[#1B3B5D]" viewBox="0 0 24 24" fill="currentColor">
									<path d="M19 4h-1V2h-2v2H8V2H6v2H5c-1.11 0-1.99.9-1.99 2L3 20c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 16H5V10h14v10zm0-12H5V6h14v2zm-7 5h5v5h-5v-5z" />
								</svg>
							</div>
							<h3 className="text-xl font-semibold mb-3">Monthly Meetups</h3>
							<p className="text-gray-600 leading-relaxed">Regular in-person events and knowledge sharing sessions.</p>
						</div>
						<div className="group p-8 rounded-2xl bg-white border border-gray-100 hover:border-gray-200 transition-all duration-300 hover:shadow-[0_8px_30px_rgb(0,0,0,0.04)] relative">
							<div className="bg-gradient-to-br from-[#1B3B5D]/10 to-[#1B3B5D]/5 w-16 h-16 rounded-xl flex items-center justify-center mb-6 group-hover:scale-105 transition-transform duration-300">
								<svg className="w-7 h-7 text-[#1B3B5D]" viewBox="0 0 24 24" fill="currentColor">
									<path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16H5V5h14v14zM7 10h2v7H7zm4-3h2v10h-2zm4 6h2v4h-2z" />
								</svg>
							</div>
							<h3 className="text-xl font-semibold mb-3">Growth Resources</h3>
							<p className="text-gray-600 leading-relaxed">Access to exclusive tools, mentorship, and funding opportunities.</p>
						</div>
					</div>
				</div>
			</section>

			{/* CTA Section */}
			<section className="py-32 bg-gray-100">
				<div className="container mx-auto px-6 text-center">
					<h2 className="text-4xl font-bold mb-8">Ready to Join the Club?</h2>
					<p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
						Applications are currently open for ambitious entrepreneurs who want to be part of something extraordinary.
					</p>
					<div className="flex flex-col md:flex-row gap-4 justify-center pt-0">
						<div className="flex gap-4 justify-center">
							<Link href="#">
								<button className="text-white bg-[#1B3B5D] hover:bg-white hover:text-[#1B3B5D] text-sm font-medium py-2 px-6 border border-[#1B3B5D] hover:border-[#1B3B5D] transition-all duration-200 mr-4">
									Apply Now
								</button>
							</Link>
							<Link href="#">
								<button className="text-white bg-[#1B3B5D] hover:bg-white hover:text-[#1B3B5D] text-sm font-medium py-2 px-6 border border-[#1B3B5D] hover:border-[#1B3B5D] transition-all duration-200 mr-4">
									Learn More
								</button>
							</Link>
						</div>
					</div>
				</div>
			</section>
		</main>
	);
}
