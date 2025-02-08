import { useQuery } from '@tanstack/react-query';
import { Line } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
} from 'chart.js';
import { AlertTriangle, Droplets, Wind, Thermometer } from 'lucide-react';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

// Simulated data - in a real app, this would come from your FastAPI backend
const fetchEnvironmentalData = async () => {
  // Simulated API call
  return {
    airQuality: {
      current: 42,
      history: [35, 38, 40, 42, 39, 41, 42],
      status: 'good'
    },
    waterQuality: {
      current: 85,
      history: [82, 84, 83, 85, 86, 84, 85],
      status: 'excellent'
    },
    temperature: {
      current: 23.5,
      history: [22, 22.5, 23, 23.5, 23, 23.2, 23.5],
      status: 'normal'
    }
  };
};

const chartOptions = {
  responsive: true,
  plugins: {
    legend: {
      position: 'top' as const,
    },
  },
};

export function Dashboard() {
  const { data, isLoading } = useQuery({
    queryKey: ['environmentalData'],
    queryFn: fetchEnvironmentalData
  });

  if (isLoading) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-green-600"></div>
      </div>
    );
  }

  const chartData = {
    labels: ['6 days ago', '5 days ago', '4 days ago', '3 days ago', '2 days ago', 'Yesterday', 'Today'],
    datasets: [
      {
        label: 'Air Quality Index',
        data: data?.airQuality.history,
        borderColor: 'rgb(75, 192, 192)',
        tension: 0.1,
      },
      {
        label: 'Water Quality Index',
        data: data?.waterQuality.history,
        borderColor: 'rgb(54, 162, 235)',
        tension: 0.1,
      },
      {
        label: 'Temperature (°C)',
        data: data?.temperature.history,
        borderColor: 'rgb(255, 99, 132)',
        tension: 0.1,
      }
    ],
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">Environmental Dashboard</h1>
      
      {/* Status Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <div className="bg-white rounded-xl shadow-lg p-6">
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center">
              <Wind className="w-6 h-6 text-green-600 mr-2" />
              <h3 className="text-lg font-semibold">Air Quality</h3>
            </div>
            {data?.airQuality.status === 'good' ? (
              <span className="bg-green-100 text-green-800 text-sm font-medium px-2.5 py-0.5 rounded">Good</span>
            ) : (
              <span className="bg-yellow-100 text-yellow-800 text-sm font-medium px-2.5 py-0.5 rounded">Warning</span>
            )}
          </div>
          <p className="text-3xl font-bold">{data?.airQuality.current}</p>
          <p className="text-gray-600">AQI (Air Quality Index)</p>
        </div>

        <div className="bg-white rounded-xl shadow-lg p-6">
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center">
              <Droplets className="w-6 h-6 text-blue-600 mr-2" />
              <h3 className="text-lg font-semibold">Water Quality</h3>
            </div>
            <span className="bg-green-100 text-green-800 text-sm font-medium px-2.5 py-0.5 rounded">Excellent</span>
          </div>
          <p className="text-3xl font-bold">{data?.waterQuality.current}%</p>
          <p className="text-gray-600">Water Quality Index</p>
        </div>

        <div className="bg-white rounded-xl shadow-lg p-6">
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center">
              <Thermometer className="w-6 h-6 text-red-600 mr-2" />
              <h3 className="text-lg font-semibold">Temperature</h3>
            </div>
            <span className="bg-blue-100 text-blue-800 text-sm font-medium px-2.5 py-0.5 rounded">Normal</span>
          </div>
          <p className="text-3xl font-bold">{data?.temperature.current}°C</p>
          <p className="text-gray-600">Average Temperature</p>
        </div>
      </div>

      {/* Alerts Section */}
      <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 mb-8">
        <div className="flex items-center">
          <AlertTriangle className="w-5 h-5 text-yellow-400 mr-2" />
          <p className="text-yellow-700">
            <span className="font-bold">Alert:</span> Slightly elevated air pollution levels detected in the industrial zone.
            Consider taking preventive measures.
          </p>
        </div>
      </div>

      {/* Chart */}
      <div className="bg-white rounded-xl shadow-lg p-6">
        <h3 className="text-xl font-semibold mb-4">7-Day Environmental Trends</h3>
        <Line options={chartOptions} data={chartData} />
      </div>
    </div>
  );
}