import { 
  Leaf, 
  BarChart3, 
  TreePine,
  Droplets,
  Trophy,
  Users,
  Globe,
  ArrowRight,
  Github,
  Sparkles
} from 'lucide-react';
import { Link } from 'react-router-dom';

function FeatureCard({ icon: Icon, title, description }: { 
  icon: React.ElementType, 
  title: string, 
  description: string 
}) {
  return (
    <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-[1.02] hover:bg-gradient-to-br hover:from-white hover:to-green-50">
      <div className="w-12 h-12 bg-gradient-to-br from-green-100 to-emerald-100 rounded-lg flex items-center justify-center mb-4 group-hover:animate-pulse">
        <Icon className="w-6 h-6 text-green-600" />
      </div>
      <h3 className="text-xl font-semibold mb-2 bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  );
}

export function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-green-50 via-emerald-50 to-white">
      {/* Hero Section */}
      <header className="container mx-auto px-4 py-16 md:py-24">
        <div className="max-w-4xl mx-auto text-center relative">
          <div className="absolute inset-0 -z-10">
            <div className="absolute inset-0 bg-gradient-to-r from-green-200/30 to-emerald-200/30 rounded-full blur-3xl transform -translate-x-1/2"></div>
            <div className="absolute inset-0 bg-gradient-to-l from-teal-200/30 to-green-200/30 rounded-full blur-3xl transform translate-x-1/2"></div>
          </div>
          
          <div className="flex items-center justify-center mb-6 animate-bounce">
            <div className="relative">
              <div className="absolute inset-0 bg-green-400 rounded-full blur-lg opacity-50"></div>
              <Leaf className="w-16 h-16 text-green-600 relative z-10" />
              <Sparkles className="w-6 h-6 text-yellow-400 absolute -top-2 -right-2 animate-pulse" />
            </div>
          </div>
          
          <h1 className="text-6xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-green-600 via-emerald-600 to-teal-600 bg-clip-text text-transparent animate-gradient">
            EcoTrack
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 mb-8 animate-fade-in">
            AI-Powered Smart Environmental Monitor
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link
              to="/register"
              className="bg-gradient-to-r from-green-600 to-emerald-600 text-white px-8 py-3 rounded-lg font-semibold hover:from-green-700 hover:to-emerald-700 transition-all duration-300 transform hover:scale-[1.02] active:scale-[0.98] flex items-center gap-2 shadow-lg hover:shadow-xl"
            >
              Get Started <ArrowRight className="w-4 h-4" />
            </Link>
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white text-gray-800 px-8 py-3 rounded-lg font-semibold border border-gray-200 hover:border-gray-300 transition-all duration-300 transform hover:scale-[1.02] active:scale-[0.98] flex items-center gap-2 shadow-lg hover:shadow-xl"
            >
              <Github className="w-4 h-4" /> View on GitHub
            </a>
          </div>
        </div>
      </header>

      {/* Features Grid */}
      <section className="container mx-auto px-4 py-16">
        <h2 className="text-3xl font-bold text-center mb-12 bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent">Key Features</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <FeatureCard
            icon={BarChart3}
            title="AI-Powered Analysis"
            description="Advanced machine learning algorithms analyze satellite imagery and sensor data to detect environmental changes."
          />
          <FeatureCard
            icon={TreePine}
            title="Deforestation Tracking"
            description="Monitor forest coverage changes and identify areas at risk using satellite imagery."
          />
          <FeatureCard
            icon={Droplets}
            title="Water Quality Monitoring"
            description="Real-time tracking of water pollution levels through IoT sensors and AI analysis."
          />
          <FeatureCard
            icon={Users}
            title="Community Driven"
            description="Crowdsourced data collection and reporting system for local environmental issues."
          />
          <FeatureCard
            icon={Trophy}
            title="Gamification"
            description="Earn rewards and track progress for taking eco-friendly actions in your community."
          />
          <FeatureCard
            icon={Globe}
            title="Global Impact"
            description="Scalable solution that can be deployed worldwide to combat environmental challenges."
          />
        </div>
      </section>

      {/* Tech Stack Section */}
      <section className="bg-gradient-to-r from-green-900 to-emerald-900 text-white py-16 transform skew-y-1">
        <div className="container mx-auto px-4 transform -skew-y-1">
          <h2 className="text-3xl font-bold text-center mb-12">Powered by Modern Technology</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 text-center">
            {['React', 'FastAPI', 'TensorFlow', 'IoT', 'AWS', 'Blockchain'].map((tech) => (
              <div key={tech} className="bg-white/10 backdrop-blur-lg p-4 rounded-lg transform hover:scale-105 transition-transform">
                <p className="font-semibold">{tech}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Impact Section */}
      <section className="container mx-auto px-4 py-16">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6 bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent">Making a Real Impact</h2>
          <p className="text-gray-600 mb-8">
            EcoTrack combines cutting-edge technology with environmental consciousness to create
            a sustainable future. Join us in our mission to monitor, protect, and preserve our planet.
          </p>
          <div className="relative group">
            <div className="absolute -inset-1 bg-gradient-to-r from-green-600 to-emerald-600 rounded-xl blur opacity-25 group-hover:opacity-50 transition duration-1000"></div>
            <img
              src="https://images.unsplash.com/photo-1497436072909-60f360e1d4b1"
              alt="Beautiful forest landscape"
              className="relative rounded-xl shadow-2xl w-full h-64 object-cover group-hover:scale-[1.01] transition-transform duration-300"
            />
          </div>
        </div>
      </section>
    </div>
  );
}