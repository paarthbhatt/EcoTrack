import { Link, useLocation } from 'react-router-dom';
import { Leaf } from 'lucide-react';

export function Navbar() {
  const location = useLocation();
  
  const isActive = (path: string) => location.pathname === path;
  
  return (
    <nav className="bg-white shadow-lg">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <Link to="/" className="flex items-center space-x-2">
            <Leaf className="w-8 h-8 text-green-600" />
            <span className="text-xl font-bold text-gray-800">EcoTrack</span>
          </Link>
          
          <div className="hidden md:flex space-x-8">
            <Link
              to="/"
              className={`${
                isActive('/') ? 'text-green-600' : 'text-gray-600'
              } hover:text-green-600 transition-colors`}
            >
              Home
            </Link>
            <Link
              to="/dashboard"
              className={`${
                isActive('/dashboard') ? 'text-green-600' : 'text-gray-600'
              } hover:text-green-600 transition-colors`}
            >
              Dashboard
            </Link>
            <Link
              to="/analysis"
              className={`${
                isActive('/analysis') ? 'text-green-600' : 'text-gray-600'
              } hover:text-green-600 transition-colors`}
            >
              Analysis
            </Link>
            <Link
              to="/iot"
              className={`${
                isActive('/iot') ? 'text-green-600' : 'text-gray-600'
              } hover:text-green-600 transition-colors`}
            >
              IoT Network
            </Link>
          </div>
          
          <div className="hidden md:flex items-center space-x-4">
            <Link
              to="/login"
              className="text-gray-600 hover:text-green-600 transition-colors"
            >
              Login
            </Link>
            <Link
              to="/register"
              className="bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 transition-colors"
            >
              Get Started
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}