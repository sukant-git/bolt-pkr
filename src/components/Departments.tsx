export default function Departments() {
  const departmentsData = [
    { name: "Information Technology", code: "IT" },
  ];

  return (
    <div className="space-y-8">
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-bold text-gray-800">Departments</h2>
        <button className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700">
          Add Department
        </button>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {departmentsData.map((dept, index) => (
          <div key={index} className="bg-gray-200 rounded-lg p-8 shadow-sm flex flex-col justify-between">
            <div>
              <h3 className="text-lg font-bold text-gray-800">{dept.name}</h3>
              <p className="text-gray-600">{dept.code}</p>
            </div>
            <button className="mt-4 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 self-start">
              View
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
