import { useState } from 'react';
import { 
  Wifi, 
  WifiOff, 
  Activity, 
  Battery, 
  Signal, 
  AlertTriangle,
  RefreshCw
} from 'lucide-react';

interface SensorData {
  id: string;
  name: string;
  location: string;
  status: 'online' | 'offline' | 'warning';
  battery: number;
  signal: number;
  lastUpdate: string;
}

const mockSensors: SensorData[] = [
  {
    id: 'sensor-001',
    name: 'Air Quality Sensor A1',
    location: 'Industrial Zone',
    status: 'online',
    battery: 85,
    signal: 92,
    lastUpdate: '2 minutes ago'
  },
  {
    id: 'sensor-002',
    name: 'Water Quality Monitor W1',
    location: 'River Delta',
    status: 'warning',
    battery: 15,
    signal: 78,
    lastUpdate: '5 minutes ago'
  },
  {
    id: 'sensor-003',
    name: 'Temperature Sensor T1',
    location: 'City Center',
    status: 'online',
    battery: 65,
    signal: 88,
    lastUpdate: '1 minute ago'
  },
  {
    id: 'sensor-004',
    name: 'Pollution Monitor P1',
    location: 'Park Area',
    status: 'offline',
    battery: 0,
    signal: 0,
    lastUpdate: '2 hours ago'
  }
];

export function IoT() {
  const [sensors, setSensors] = useState<SensorData[]>(mockSensors);
  const [refreshing, setRefreshing] = useState(false);

  const refreshData = () => {
    setRefreshing(true);
    // Simulate API call to update sensor data
    setTimeout(() => {
      setRefreshing(false);
    }, 1500);
  };

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'online':
        return <Wifi className="w-5 h-5 text-green-500" />;
      case 'offline':
        return <WifiOff className="w-5 h-5 text-gray-500" />;
      case 'warning':
        return <AlertTriangle className="w-5 h-5 text-yellow-500" />;
      default:
        return null;
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'online':
        return 'bg-green-100 text-green-800';
      case 'offline':
        return 'bg-gray-100 text-gray-800';
      case 'warning':
        return 'bg-yellow-100 text-yellow-800';
      default:
        return '';
    }
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-bold">IoT Sensor Network</h1>
        <button
          onClick={refreshData}
          className="flex items-center bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 transition-colors"
        >
          <RefreshCw className={`w-5 h-5 mr-2 ${refreshing ? 'animate-spin' : ''}`} />
          Refresh Data
        </button>
      </div>

      {/* Network Overview */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <div className="bg-white rounded-xl shadow-lg p-6">
          <div className="flex items-center justify-between mb-2">
            <h3 className="text-lg font-semibold">Active Sensors</h3>
            <Activity className="w-5 h-5 text-green-600" />
          </div>
          <p className="text-3xl font-bold">
            {sensors.filter(s => s.status === 'online').length}/{sensors.length}
          </p>
        </div>

        <div className="bg-white rounded-xl shadow-lg p-6">
          <div className="flex items-center justify-between mb-2">
            <h3 className="text-lg font-semibold">Network Status</h3>
            <Signal className="w-5 h-5 text-blue-600" />
          </div>
          <p className="text-3xl font-bold">Good</p>
        </div>

        <div className="bg-white rounded-xl shadow-lg p-6">
          <div className="flex items-center justify-between mb-2">
            <h3 className="text-lg font-semibold">Alerts</h3>
            <AlertTriangle className="w-5 h-5 text-yellow-600" />
          </div>
          <p className="text-3xl font-bold">2</p>
        </div>
      </div>

      {/* Sensors List */}
      <div className="bg-white rounded-xl shadow-lg overflow-hidden">
        <div className="p-6">
          <h2 className="text-xl font-semibold mb-4">Sensor Network</h2>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Status
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Sensor
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Location
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Battery
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Signal
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Last Update
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {sensors.map((sensor) => (
                <tr key={sensor.id}>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="flex items-center">
                      {getStatusIcon(sensor.status)}
                      <span className={`ml-2 px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${getStatusColor(sensor.status)}`}>
                        {sensor.status.charAt(0).toUpperCase() + sensor.status.slice(1)}
                      </span>
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm font-medium text-gray-900">{sensor.name}</div>
                    <div className="text-sm text-gray-500">ID: {sensor.id}</div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    {sensor.location}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="flex items-center">
                      <Battery className="w-4 h-4 mr-2 text-gray-400" />
                      <span className="text-sm text-gray-900">{sensor.battery}%</span>
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="flex items-center">
                      <Signal className="w-4 h-4 mr-2 text-gray-400" />
                      <span className="text-sm text-gray-900">{sensor.signal}%</span>
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    {sensor.lastUpdate}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}