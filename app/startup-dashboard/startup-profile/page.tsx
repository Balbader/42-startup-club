'use client';

import { FaUsers, FaChartLine, FaMoneyBillWave, FaLinkedin, FaGithub, FaGlobe } from 'react-icons/fa';
import { FaXTwitter } from 'react-icons/fa6';
import { HiOutlineLightBulb } from 'react-icons/hi';
import Image from 'next/image';
import StartupNavbar from '../startup-navbar';

export default function StartupDashboard() {
	const startupInfo = {
		name: 'CodeMentor',
		tagline: 'Peer-to-peer programming education platform',
		stage: 'Series A',
		foundingDate: '2023',
		industry: 'Artificial Intelligence',
		location: '42 StartUp Club, Station F - Paris',
		teamSize: 5,
	};

	const kpis = [
		{ title: 'Monthly Revenue', value: '€100K+', growth: '+30%', icon: FaMoneyBillWave },
		{ title: 'Active Users', value: '12,500', growth: '+25%', icon: FaUsers },
		{ title: 'Customer Growth', value: '32%', growth: '+8%', icon: FaChartLine },
	];

	const timeline = [
		{
			phase: 'Short-term Goals (Q1-Q2 2024)',
			goals: ['Launch beta version of AI analytics platform', 'Reach 100,000 active users', 'Secure Series A funding of €3M', 'Expand team to 15 members'],
		},
		{
			phase: 'Long-term Goals (2024-2025)',
			goals: ['Expand to international markets', 'Achieve €10M ARR', 'Launch enterprise solution', 'Series B funding round'],
		},
	];

	return (
		<>
			<div className="pb-10">
				<StartupNavbar />
			</div>
			<div className="min-h-screen bg-gray-50 p-8 pt-20">
				{/* Header Section */}
				<div className="max-w-7xl mx-auto">
					<div className="bg-white rounded-lg shadow-lg p-6 mb-8">
						<div className="flex flex-col space-y-6">
							<div className="flex items-center justify-between">
								<div className="flex items-center gap-6">
									<div className="relative w-16 h-16">
										<Image src="/coding.png" alt="TechVision AI Logo" width={64} height={64} className="rounded-lg object-contain" priority />
									</div>
									<div>
										<h1 className="text-3xl font-bold text-gray-900">{startupInfo.name}</h1>
										<p className="text-lg text-gray-600 mt-2">{startupInfo.tagline}</p>
									</div>
								</div>
								<div className="flex items-center gap-4">
									<div className="flex items-center gap-3 mr-4">
										<a href="https://techvision.ai" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-purple-600 transition-colors duration-200">
											<FaGlobe className="w-6 h-6" />
										</a>
										<a
											href="https://linkedin.com/company/techvision-ai"
											target="_blank"
											rel="noopener noreferrer"
											className="text-gray-600 hover:text-blue-600 transition-colors duration-200"
										>
											<FaLinkedin className="w-6 h-6" />
										</a>
										<a
											href="https://twitter.com/techvision_ai"
											target="_blank"
											rel="noopener noreferrer"
											className="text-gray-600 hover:text-blue-400 transition-colors duration-200"
										>
											<FaXTwitter className="w-6 h-6" />
										</a>
										<a
											href="https://github.com/techvision-ai"
											target="_blank"
											rel="noopener noreferrer"
											className="text-gray-600 hover:text-gray-900 transition-colors duration-200"
										>
											<FaGithub className="w-6 h-6" />
										</a>
									</div>
									<a href="mailto:contact@techvision.ai" className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-full transition-colors duration-200">
										Contact Us
									</a>
									<div className="bg-blue-100 px-4 py-2 rounded-full">
										<span className="text-blue-800 font-semibold">{startupInfo.stage}</span>
									</div>
								</div>
							</div>
							<div className="border-t pt-6">
								<p className="text-sm text-gray-600 max-w-3xl">
									CodeMentor is a peer-to-peer programming education platform that connects learners with experienced mentors. Our platform facilitates real-time collaboration and
									personalized learning experiences to help individuals enhance their coding skills and achieve their career goals.
								</p>
							</div>
						</div>
					</div>

					{/* Company Info Section */}
					<div className="bg-white rounded-lg shadow-lg p-6 mb-8">
						<h2 className="text-xl font-semibold text-gray-900 mb-6">Company Information</h2>
						<div className="grid grid-cols-2 md:grid-cols-4 gap-8">
							<div>
								<div className="flex items-center gap-2 mb-2">
									<p className="text-sm font-medium text-gray-500">Founded</p>
								</div>
								<p className="text-lg font-semibold text-gray-900">{startupInfo.foundingDate}</p>
							</div>
							<div>
								<div className="flex items-center gap-2 mb-2">
									<p className="text-sm font-medium text-gray-500">Industry</p>
								</div>
								<p className="text-lg font-semibold text-gray-900">{startupInfo.industry}</p>
							</div>
							<div>
								<div className="flex items-center gap-2 mb-2">
									<p className="text-sm font-medium text-gray-500">Location</p>
								</div>
								<p className="text-lg font-semibold text-gray-900">{startupInfo.location}</p>
							</div>
							<div>
								<div className="flex items-center gap-2 mb-2">
									<p className="text-sm font-medium text-gray-500">Team Size</p>
								</div>
								<p className="text-lg font-semibold text-gray-900">{startupInfo.teamSize} members</p>
							</div>
						</div>
					</div>

					{/* KPIs Section */}
					<div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
						{kpis.map((kpi, index) => (
							<div key={index} className="bg-white rounded-lg shadow-lg p-6">
								<div className="flex items-center justify-between">
									<div>
										<p className="text-gray-500">{kpi.title}</p>
										<p className="text-2xl font-bold mt-2">{kpi.value}</p>
									</div>
									<div className="bg-blue-100 p-3 rounded-full">
										<kpi.icon className="w-6 h-6 text-blue-600" />
									</div>
								</div>
								<div className="mt-4">
									<span className="text-green-500 font-semibold">{kpi.growth}</span>
									<span className="text-gray-500 ml-2">vs last month</span>
								</div>
							</div>
						))}
					</div>

					{/* Timeline Section */}
					<div className="bg-white rounded-lg shadow-lg p-6">
						<h2 className="text-2xl font-bold mb-6">Growth Timeline</h2>
						<div className="space-y-8">
							{timeline.map((phase, index) => (
								<div key={index} className="relative">
									<div className="flex items-center">
										<div className="bg-blue-500 rounded-full p-2">
											<HiOutlineLightBulb className="w-6 h-6 text-white" />
										</div>
										<h3 className="text-xl font-semibold ml-4">{phase.phase}</h3>
									</div>
									<div className="ml-12 mt-4">
										<ul className="list-disc space-y-2">
											{phase.goals.map((goal, goalIndex) => (
												<li key={goalIndex} className="text-gray-600">
													{goal}
												</li>
											))}
										</ul>
									</div>
								</div>
							))}
						</div>
					</div>
				</div>
			</div>
		</>
	);
}
