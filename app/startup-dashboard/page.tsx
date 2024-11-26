'use client';

import { FaUsers, FaChartLine, FaMoneyBillWave } from 'react-icons/fa';
import { HiOutlineLightBulb } from 'react-icons/hi';
import Navbar from "../components/Navbar";

export default function StartupDashboard() {
  const startupInfo = {
    name: "TechVision AI",
    tagline: "Revolutionizing AI-driven Business Analytics",
    stage: "Seed Stage",
    foundingDate: "2023",
    industry: "Artificial Intelligence",
    location: "42 StartUp Club, Station F - Paris",
    teamSize: 5,
  };

  const kpis = [
    { title: "Monthly Revenue", value: "€25,000", growth: "+15%", icon: FaMoneyBillWave },
    { title: "Active Users", value: "1,200", growth: "+25%", icon: FaUsers },
    { title: "Customer Growth", value: "32%", growth: "+8%", icon: FaChartLine },
  ];

  const timeline = [
    {
      phase: "Short-term Goals (Q1-Q2 2024)",
      goals: [
        "Launch beta version of AI analytics platform",
        "Reach 2,000 active users",
        "Secure seed funding of €500K",
        "Expand team to 10 members"
      ]
    },
    {
      phase: "Long-term Goals (2024-2025)",
      goals: [
        "Expand to international markets",
        "Achieve €1M ARR",
        "Launch enterprise solution",
        "Series A funding round"
      ]
    }
  ];

  return (
    <>
      <div className="pb-10">
        <Navbar />
      </div>
      <div className="min-h-screen bg-gray-50 p-8 pt-20">
        {/* Header Section */}
        <div className="max-w-7xl mx-auto">
          <div className="bg-white rounded-lg shadow-lg p-6 mb-8">
            <div className="flex items-center justify-between">
              <div>
                <h1 className="text-3xl font-bold text-gray-900">{startupInfo.name}</h1>
                <p className="text-lg text-gray-600 mt-2">{startupInfo.tagline}</p>
              </div>
              <div className="bg-blue-100 px-4 py-2 rounded-full">
                <span className="text-blue-800 font-semibold">{startupInfo.stage}</span>
              </div>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-6">
              <div className="border-r border-gray-200">
                <p className="text-sm text-gray-500">Founded</p>
                <p className="font-semibold">{startupInfo.foundingDate}</p>
              </div>
              <div className="border-r border-gray-200">
                <p className="text-sm text-gray-500">Industry</p>
                <p className="font-semibold">{startupInfo.industry}</p>
              </div>
              <div className="border-r border-gray-200">
                <p className="text-sm text-gray-500">Location</p>
                <p className="font-semibold">{startupInfo.location}</p>
              </div>
              <div>
                <p className="text-sm text-gray-500">Team Size</p>
                <p className="font-semibold">{startupInfo.teamSize} members</p>
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
                        <li key={goalIndex} className="text-gray-600">{goal}</li>
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
