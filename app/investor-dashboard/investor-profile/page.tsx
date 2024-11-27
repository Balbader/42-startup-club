'use client';

import { FaUsers, FaMoneyBillWave, FaLinkedin, FaGithub, FaGlobe } from 'react-icons/fa';
import { FaXTwitter } from 'react-icons/fa6';
import Image from 'next/image';
import InvestorNavbar from '../investor-navbar';

function StartupProfile({ startupInfo }) {
	return (
		<div className="bg-white rounded-lg shadow-lg p-6 mb-8">
			<div className="grid grid-cols-2 md:grid-cols-4 gap-8">
				<div>
					<div className="flex items-center gap-2 mb-2">
						<p className="text-sm font-medium text-gray-500">Name</p>
					</div>
					<p className="text-lg font-semibold text-gray-900">{startupInfo.name}</p>
				</div>
				<div>
					<div className="flex items-center gap-2 mb-2">
						<p className="text-sm font-medium text-gray-500">Tagline</p>
					</div>
					<p className="text-lg font-semibold text-gray-900">{startupInfo.tagline}</p>
				</div>
				<div>
					<div className="flex items-center gap-2 mb-2">
						<p className="text-sm font-medium text-gray-500">Stage</p>
					</div>
					<p className="text-lg font-semibold text-gray-900">{startupInfo.stage}</p>
				</div>
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
	);
}

export default function InvestorDashboard() {
	const startupInfo = {
		name: 'Tech Ventures Capital',
		tagline: 'Empowering B2B SaaS Innovators',
		stage: 'Early-Stage VC',
		foundingDate: '2020',
		industry: 'Venture Capital',
		location: 'Silicon Valley, CA',
		teamSize: 15,
	};

	const kpis = [
		{ title: 'Monthly Investments', value: '€300k - 1.5M', growth: '+20%', icon: FaMoneyBillWave },
		{ title: 'Portfolio Companies', value: '25', growth: '+30%', icon: FaUsers },
	];

	const selectionCriteria = [
		'Strong founding team with a proven track record',
		'Innovative product with a clear market need',
		'Scalable business model',
		'Demonstrated traction and growth potential',
		'Alignment with our investment thesis',
	];

	return (
		<>
			<div className="pb-10">
				<InvestorNavbar />
			</div>
			<div className="min-h-screen bg-gray-50 p-8 pt-20">
				{/* Header Section */}
				<div className="max-w-7xl mx-auto">
					<div className="bg-white rounded-lg shadow-lg p-6 mb-8">
						<div className="flex flex-col space-y-6">
							<div className="flex items-center justify-between">
								<div className="flex items-center gap-6">
									<div className="relative w-16 h-16">
										<Image src="/world.png" alt="TechVision AI Logo" width={64} height={64} className="rounded-lg object-contain" priority />
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
										Apply For Funding
									</a>
									<div className="bg-blue-100 px-4 py-2 rounded-full">
										<span className="text-blue-800 font-semibold">{startupInfo.stage}</span>
									</div>
								</div>
							</div>
							<div className="border-t pt-6">
								<p className="text-sm text-gray-600 max-w-3xl">
									Tech Ventures Capital is dedicated to supporting early-stage B2B SaaS companies. We provide strategic guidance and capital to help startups scale and succeed in
									the competitive tech landscape.
								</p>
							</div>
						</div>
					</div>

					<StartupProfile startupInfo={startupInfo} />

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

					{/* Selection Criteria Section */}
					<div className="bg-white rounded-lg shadow-lg p-6">
						<h2 className="text-2xl font-bold mb-6">Selection Criteria</h2>
						<ul className="list-disc pl-5 space-y-2">
							{selectionCriteria.map((criteria, index) => (
								<li key={index} className="text-gray-600">
									{criteria}
								</li>
							))}
						</ul>
					</div>
				</div>
			</div>
		</>
	);
}
