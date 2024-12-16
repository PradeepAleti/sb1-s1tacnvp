import React from 'react';
import { TrendingUp, Users, Package, DollarSign } from 'lucide-react';

const stats = [
  {
    title: 'Total Sales',
    value: '$24,780',
    change: '+12%',
    icon: TrendingUp,
    color: 'bg-blue-500',
  },
  {
    title: 'Active Users',
    value: '573',
    change: '+5%',
    icon: Users,
    color: 'bg-green-500',
  },
  {
    title: 'Inventory Items',
    value: '1,234',
    change: '+8%',
    icon: Package,
    color: 'bg-purple-500',
  },
  {
    title: 'Revenue',
    value: '$45,678',
    change: '+15%',
    icon: DollarSign,
    color: 'bg-yellow-500',
  },
];

export default function Dashboard() {
  return (
    <div className="p-6">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat) => {
          const Icon = stat.icon;
          return (
            <div key={stat.title} className="bg-white rounded-xl shadow-sm p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-gray-600">{stat.title}</p>
                  <h3 className="text-2xl font-bold mt-1">{stat.value}</h3>
                  <p className="text-sm text-green-600 mt-1">{stat.change} from last month</p>
                </div>
                <div className={`${stat.color} p-3 rounded-lg`}>
                  <Icon className="text-white" size={24} />
                </div>
              </div>
            </div>
          );
        })}
      </div>

      <div className="mt-8 grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-white rounded-xl shadow-sm p-6">
          <h3 className="text-lg font-semibold mb-4">Recent Sales</h3>
          {/* Add sales chart or table here */}
        </div>
        <div className="bg-white rounded-xl shadow-sm p-6">
          <h3 className="text-lg font-semibold mb-4">Inventory Status</h3>
          {/* Add inventory chart or table here */}
        </div>
      </div>
    </div>
  );
}