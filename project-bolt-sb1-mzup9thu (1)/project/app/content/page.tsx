export default function Content() {
  const periodicElements = [
    { symbol: 'H', name: 'Hydrogen', number: 1, mass: '1.008' },
    { symbol: 'He', name: 'Helium', number: 2, mass: '4.003' },
    { symbol: 'Li', name: 'Lithium', number: 3, mass: '6.94' },
    { symbol: 'Be', name: 'Beryllium', number: 4, mass: '9.012' },
    { symbol: 'B', name: 'Boron', number: 5, mass: '10.81' },
    { symbol: 'C', name: 'Carbon', number: 6, mass: '12.01' },
    { symbol: 'N', name: 'Nitrogen', number: 7, mass: '14.01' },
    { symbol: 'O', name: 'Oxygen', number: 8, mass: '15.999' }
  ];

  const scienceFacts = [
    { fact: "Light travels at 299,792,458 meters per second", category: "Physics" },
    { fact: "The human brain contains approximately 86 billion neurons", category: "Biology" },
    { fact: "Water boils at 100°C (212°F) at standard atmospheric pressure", category: "Chemistry" },
    { fact: "Earth is approximately 4.54 billion years old", category: "Geology" },
    { fact: "The speed of sound in air is about 343 meters per second", category: "Physics" }
  ];

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Educational Content
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Explore our comprehensive learning materials designed to enhance your understanding 
            of science, mathematics, and critical thinking skills.
          </p>
        </div>

        {/* Educational Text Section */}
        <section className="mb-16">
          <div className="bg-white rounded-lg shadow-sm p-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">The Scientific Method</h2>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
              <div className="space-y-6">
                <p className="text-gray-600 leading-relaxed text-lg">
                  The scientific method is a systematic approach to understanding the natural world 
                  through observation, hypothesis formation, experimentation, and analysis. This 
                  methodical process has been the foundation of scientific discovery for centuries.
                </p>
                
                <div>
                  <h3 className="text-xl font-semibold text-gray-800 mb-3">Steps of the Scientific Method:</h3>
                  <ol className="list-decimal list-inside space-y-2 text-gray-600">
                    <li><strong>Observation:</strong> Notice and describe a phenomenon or problem</li>
                    <li><strong>Question:</strong> Formulate a specific question about the observation</li>
                    <li><strong>Hypothesis:</strong> Propose a testable explanation</li>
                    <li><strong>Prediction:</strong> Make specific predictions based on the hypothesis</li>
                    <li><strong>Experiment:</strong> Design and conduct controlled tests</li>
                    <li><strong>Analysis:</strong> Examine the data and draw conclusions</li>
                    <li><strong>Communication:</strong> Share results with the scientific community</li>
                  </ol>
                </div>

                <p className="text-gray-600 leading-relaxed">
                  Understanding and applying the scientific method helps develop critical thinking 
                  skills that are valuable not only in science but in everyday problem-solving 
                  and decision-making situations.
                </p>
              </div>

              <div>
                <img 
                  src="https://images.pexels.com/photos/2280571/pexels-photo-2280571.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&dpr=1" 
                  alt="Student conducting a science experiment" 
                  className="rounded-lg shadow-md w-full h-80 object-cover"
                />
                <p className="text-sm text-gray-500 mt-2 text-center">
                  Students applying the scientific method in hands-on experiments
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Periodic Table Section */}
        <section className="mb-16">
          <div className="bg-white rounded-lg shadow-sm p-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Periodic Table Elements</h2>
            <p className="text-gray-600 mb-8 text-lg">
              The first eight elements of the periodic table, showcasing atomic structure and properties.
            </p>
            
            <div className="overflow-x-auto">
              <table className="min-w-full border-collapse">
                <thead>
                  <tr className="bg-blue-50">
                    <th className="border border-gray-300 px-4 py-3 text-left font-semibold text-gray-900">
                      Atomic Number
                    </th>
                    <th className="border border-gray-300 px-4 py-3 text-left font-semibold text-gray-900">
                      Symbol
                    </th>
                    <th className="border border-gray-300 px-4 py-3 text-left font-semibold text-gray-900">
                      Element Name
                    </th>
                    <th className="border border-gray-300 px-4 py-3 text-left font-semibold text-gray-900">
                      Atomic Mass (u)
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {periodicElements.map((element, index) => (
                    <tr key={element.number} className={index % 2 === 0 ? 'bg-gray-50' : 'bg-white'}>
                      <td className="border border-gray-300 px-4 py-3 text-gray-700 font-medium">
                        {element.number}
                      </td>
                      <td className="border border-gray-300 px-4 py-3">
                        <span className="bg-blue-100 text-blue-800 font-bold px-2 py-1 rounded text-lg">
                          {element.symbol}
                        </span>
                      </td>
                      <td className="border border-gray-300 px-4 py-3 text-gray-700 font-medium">
                        {element.name}
                      </td>
                      <td className="border border-gray-300 px-4 py-3 text-gray-700">
                        {element.mass}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* Science Facts Section */}
        <section className="mb-16">
          <div className="bg-white rounded-lg shadow-sm p-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Fascinating Science Facts</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {scienceFacts.map((item, index) => (
                <div key={index} className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-lg p-6 border border-blue-100">
                  <div className="mb-3">
                    <span className="bg-blue-100 text-blue-800 text-xs font-medium px-2.5 py-0.5 rounded">
                      {item.category}
                    </span>
                  </div>
                  <p className="text-gray-700 leading-relaxed">
                    {item.fact}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Illustration Section */}
        <section>
          <div className="bg-white rounded-lg shadow-sm p-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Learning Through Visualization</h2>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
              <div>
                <img 
                  src="https://images.pexels.com/photos/8197563/pexels-photo-8197563.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&dpr=1" 
                  alt="Scientific diagrams and educational materials" 
                  className="rounded-lg shadow-md w-full h-80 object-cover"
                />
              </div>
              
              <div className="space-y-4">
                <h3 className="text-2xl font-semibold text-gray-800">
                  Visual Learning Enhancement
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  Visual representations play a crucial role in understanding complex scientific concepts. 
                  Diagrams, charts, and illustrations help students visualize abstract ideas and make 
                  connections between different concepts.
                </p>
                <p className="text-gray-600 leading-relaxed">
                  Research shows that visual learning can improve comprehension by up to 400% and 
                  help students retain information longer. Our platform incorporates various visual 
                  elements to enhance your learning experience.
                </p>
                <div className="bg-green-50 border border-green-200 rounded-lg p-4">
                  <h4 className="font-semibold text-green-800 mb-2">Key Benefits:</h4>
                  <ul className="text-green-700 space-y-1">
                    <li>• Enhanced memory retention</li>
                    <li>• Improved concept understanding</li>
                    <li>• Better pattern recognition</li>
                    <li>• Increased engagement</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}