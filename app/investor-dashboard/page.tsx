'use client';

import InvestorNavbar from './investor-navbar';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import Image from 'next/image';
import Link from 'next/link';

// Type definitions
interface InvestorMetrics {
	investmentsMade: string;
	totalInvested: string;
	portfolioCompanies: string;
}

interface Investor {
	id: string;
	name: string;
	logo: string;
	investorType: string;
	description: string;
	metrics: InvestorMetrics;
}

// Mock data - replace with actual API call later
const investors: Investor[] = [
	{
		id: '1',
		name: 'Tech Ventures Capital',
		logo: '/world.png',
		investorType: 'VC Fund',
		description: 'Early-stage technology investor focused on B2B SaaS',
		metrics: {
			investmentsMade: '25+',
			totalInvested: '€50M+',
			portfolioCompanies: '20 Active',
		},
	},
	{
		id: '2',
		name: 'Green Future Fund',
		logo: '/volunteer.png',
		investorType: 'Impact Fund',
		description: 'Sustainable and clean technology investment fund',
		metrics: {
			investmentsMade: '15+',
			totalInvested: '€30M+',
			portfolioCompanies: '12 Active',
		},
	},
	{
		id: '3',
		name: 'Digital Innovation Partners',
		logo: '/idea.png',
		investorType: 'Angel Group',
		description: 'Collective of tech entrepreneurs investing in early-stage startups',
		metrics: {
			investmentsMade: '40+',
			totalInvested: '€20M+',
			portfolioCompanies: '35 Active',
		},
	},
	{
		id: '4',
		name: 'Health Tech Capital',
		logo: '/devices.png',
		investorType: 'VC Fund',
		description: 'Specialized in digital health and biotech investments',
		metrics: {
			investmentsMade: '20+',
			totalInvested: '€45M+',
			portfolioCompanies: '18 Active',
		},
	},
	{
		id: '5',
		name: 'Blockchain Ventures',
		logo: '/cube.png',
		investorType: 'Crypto Fund',
		description: 'Focused on blockchain and Web3 investments',
		metrics: {
			investmentsMade: '30+',
			totalInvested: '€25M+',
			portfolioCompanies: '25 Active',
		},
	},
];

function InvestorCard({ investor }: { investor: Investor }) {
	return (
		<Card className="hover:shadow-lg transition-shadow">
			<CardHeader className="space-y-1">
				<div className="flex items-center justify-between">
					<div className="flex items-center space-x-4">
						<div className="relative w-12 h-12">
							<Image src={investor.logo} alt={`${investor.name} logo`} fill className="object-contain rounded-full" />
						</div>
						<div>
							<h3 className="font-semibold text-lg">{investor.name}</h3>
							<Badge variant="secondary">{investor.investorType}</Badge>
						</div>
					</div>
				</div>
			</CardHeader>
			<CardContent>
				<p className="text-sm text-muted-foreground mb-4">{investor.description}</p>
				<div className="grid grid-cols-3 gap-4 text-sm">
					<div>
						<p className="font-medium">Investments</p>
						<p className="text-muted-foreground">{investor.metrics.investmentsMade}</p>
					</div>
					<div>
						<p className="font-medium">Total Invested</p>
						<p className="text-muted-foreground">{investor.metrics.totalInvested}</p>
					</div>
					<div>
						<p className="font-medium">Portfolio</p>
						<p className="text-muted-foreground">{investor.metrics.portfolioCompanies}</p>
					</div>
				</div>
			</CardContent>
		</Card>
	);
}

export default function CurrentInvestors() {
	return (
		<>
			<div className="min-h-screen bg-background">
				<InvestorNavbar />
				<main className="container mx-auto px-4 py-8">
					<div className="mb-8">
						<h1 className="text-3xl font-bold mb-2">Our Investors</h1>
						<p className="text-muted-foreground">Meet the investors supporting innovation at 42 StartUp Club</p>
					</div>
					<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
						{investors.map((investor) => (
							<Link href={`/investor-dashboard/investor-profile`} key={investor.id}>
								<InvestorCard key={investor.id} investor={investor} />
							</Link>
						))}
					</div>
				</main>
			</div>
		</>
	);
}
