'use client';

import Link from 'next/link';
import StartupNavbar from './startup-navbar';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import Image from 'next/image';

// Type definitions
interface StartupKPIs {
	revenue: string;
	users: string;
	growth: string;
}

interface Startup {
	id: string;
	name: string;
	logo: string;
	fundingStage: string;
	description: string;
	kpis: StartupKPIs;
}

// Mock data - replace with actual API call later
const startups: Startup[] = [
	{
		id: '1',
		name: 'TechFlow',
		logo: '/circular-arrows.png',
		fundingStage: 'Seed',
		description: 'AI-powered workflow automation platform',
		kpis: {
			revenue: '€50K MRR',
			users: '1,000+',
			growth: '+15% MoM',
		},
	},
	{
		id: '2',
		name: 'EcoShare',
		logo: '/green-technology.png',
		fundingStage: 'Pre-seed',
		description: 'Sustainable resource sharing marketplace',
		kpis: {
			revenue: '€20K MRR',
			users: '500+',
			growth: '+25% MoM',
		},
	},
	{
		id: '3',
		name: 'CodeMentor',
		logo: '/coding.png',
		fundingStage: 'Series A',
		description: 'Peer-to-peer programming education platform',
		kpis: {
			revenue: '€200K MRR',
			users: '10,000+',
			growth: '+30% MoM',
		},
	},
	{
		id: '4',
		name: 'HealthTrack',
		logo: '/heart-rate.png',
		fundingStage: 'Seed',
		description: 'AI-driven personal health monitoring system',
		kpis: {
			revenue: '€75K MRR',
			users: '2,500+',
			growth: '+20% MoM',
		},
	},
	{
		id: '5',
		name: 'CryptoSafe',
		logo: '/solana.png',
		fundingStage: 'Pre-seed',
		description: 'Secure cryptocurrency wallet and exchange platform',
		kpis: {
			revenue: '€15K MRR',
			users: '300+',
			growth: '+40% MoM',
		},
	},
	{
		id: '6',
		name: 'SmartHome',
		logo: '/smart-home.png',
		fundingStage: 'Seed',
		description: 'IoT solutions for home automation and energy efficiency',
		kpis: {
			revenue: '€100K MRR',
			users: '5,000+',
			growth: '+18% MoM',
		},
	},
	{
		id: '7',
		name: 'FoodLoop',
		logo: '/waste.png',
		fundingStage: 'Pre-seed',
		description: 'Restaurant food waste reduction and management platform',
		kpis: {
			revenue: '€30K MRR',
			users: '150+',
			growth: '+22% MoM',
		},
	},
];

function StartupCard({ startup }: { startup: Startup }) {
	return (
		<Card className="hover:shadow-lg transition-shadow">
			<CardHeader className="space-y-1">
				<div className="flex items-center justify-between">
					<div className="flex items-center space-x-4">
						<div className="relative w-12 h-12">
							<Image src={startup.logo} alt={`${startup.name} logo`} fill className="object-contain rounded-full" />
						</div>
						<div>
							<h3 className="font-semibold text-lg">{startup.name}</h3>
							<Badge variant="secondary">{startup.fundingStage}</Badge>
						</div>
					</div>
				</div>
			</CardHeader>
			<CardContent>
				<p className="text-sm text-muted-foreground mb-4">{startup.description}</p>
				<div className="grid grid-cols-3 gap-4 text-sm">
					<div>
						<p className="font-medium">Revenue</p>
						<p className="text-muted-foreground">{startup.kpis.revenue}</p>
					</div>
					<div>
						<p className="font-medium">Users</p>
						<p className="text-muted-foreground">{startup.kpis.users}</p>
					</div>
					<div>
						<p className="font-medium">Growth</p>
						<p className="text-muted-foreground">{startup.kpis.growth}</p>
					</div>
				</div>
			</CardContent>
		</Card>
	);
}

export default function CurrentStartups() {
	return (
		<div className="min-h-screen bg-background">
			<StartupNavbar />
			<main className="container mx-auto px-4 py-8">
				<div className="mb-8">
					<h1 className="text-3xl font-bold mb-2">Current Startups</h1>
					<p className="text-muted-foreground">Discover the innovative startups currently being incubated at 42 StartUp Club</p>
				</div>
				<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
					{startups.map((startup) => (
						<Link href={`/startup-dashboard/startup-profile`} key={startup.id}>
							<StartupCard key={startup.id} startup={startup} />
						</Link>
					))}
				</div>
			</main>
		</div>
	);
}
