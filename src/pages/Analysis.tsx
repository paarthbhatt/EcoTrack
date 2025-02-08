import { Camera, Upload, RefreshCw } from 'lucide-react';
import { useState } from 'react';

export function Analysis() {
  const [analyzing, setAnalyzing] = useState(false);
  const [results, setResults] = useState<null | {
    deforestation: number;
    pollution: number;
    recommendations: string[];
  }>(null);

  const handleAnalysis = () => {
    setAnalyzing(true);
    // Simulate API call to FastAPI backend with TensorFlow model
    setTimeout(() => {
      setResults({
        deforestation: 15.3,
        pollution: 28.7,
        recommendations: [
          "Implement reforestation programs in affected areas",
          "Monitor industrial emissions more strictly",
          "Enhance water treatment facilities"
        ]
      });
      setAnalyzing(false);
    }, 2000);
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">Environmental Analysis</h1>

      {/* Upload Section */}
      <div className="bg-white rounded-xl shadow-lg p-8 mb-8">
        <div className="flex items-center justify-center w-full">
          <label className="flex flex-col items-center justify-center w-full h-64 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 hover:bg-gray-100">
            <div className="flex flex-col items-center justify-center pt-5 pb-6">
              <Upload className="w-10 h-10 mb-3 text-gray-400" />
              <p className="mb-2 text-sm text-gray-500">
                <span className="font-semibold">Click to upload</span> or drag and drop
              </p>
              <p className="text-xs text-gray-500">
                Satellite imagery or environmental data (MAX. 20MB)
              </p>
            </div>
            <input type="file" className="hidden" />
          </label>
        </div>
      </div>

      {/* Analysis Controls */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
        <div className="bg-white rounded-xl shadow-lg p-6">
          <h3 className="text-xl font-semibold mb-4">Satellite Image Analysis</h3>
          <p className="text-gray-600 mb-4">
            Upload satellite imagery to detect deforestation and land use changes using our AI model.
          </p>
          <button
            onClick={handleAnalysis}
            disabled={analyzing}
            className="flex items-center justify-center w-full bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 transition-colors disabled:bg-gray-400"
          >
            {analyzing ? (
              <>
                <RefreshCw className="w-5 h-5 mr-2 animate-spin" />
                Analyzing...
              </>
            ) : (
              <>
                <Camera className="w-5 h-5 mr-2" />
                Start Analysis
              </>
            )}
          </button>
        </div>

        <div className="bg-white rounded-xl shadow-lg p-6">
          <h3 className="text-xl font-semibold mb-4">Real-time Data Processing</h3>
          <p className="text-gray-600 mb-4">
            Connect to IoT sensors to process real-time environmental data and detect anomalies.
          </p>
          <button
            className="flex items-center justify-center w-full bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors"
          >
            <RefreshCw className="w-5 h-5 mr-2" />
            Connect to Sensors
          </button>
        </div>
      </div>

      {/* Results Section */}
      {results && (
        <div className="bg-white rounded-xl shadow-lg p-6">
          <h3 className="text-xl font-semibold mb-4">Analysis Results</h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
            <div className="p-4 bg-red-50 rounded-lg">
              <p className="text-gray-700 font-semibold">Deforestation Risk</p>
              <p className="text-2xl font-bold text-red-600">{results.deforestation}%</p>
            </div>
            
            <div className="p-4 bg-yellow-50 rounded-lg">
              <p className="text-gray-700 font-semibold">Pollution Level</p>
              <p className="text-2xl font-bold text-yellow-600">{results.pollution}%</p>
            </div>
          </div>

          <div className="border-t pt-4">
            <h4 className="font-semibold mb-2">Recommendations:</h4>
            <ul className="list-disc list-inside space-y-2">
              {results.recommendations.map((rec, index) => (
                <li key={index} className="text-gray-600">{rec}</li>
              ))}
            </ul>
          </div>
        </div>
      )}
    </div>
  );
}