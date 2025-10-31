export default function Batches() {
  const batchesData = [
    { years: "2021 - 2025", regulation: "R-2019", students: 128 },
    { years: "2022 - 2026", regulation: "R-2019", students: 63 },
    { years: "2023 - 2027", regulation: "R-2023", students: 128 },
    { years: "2024 - 2028", regulation: "R-2023", students: 0 },
  ];

  return (
    <div className="space-y-8">
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-bold text-gray-800">Batches</h2>
        <button className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700">
          Add Batch
        </button>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {batchesData.map((batch, index) => (
          <div key={index} className="bg-white rounded-lg p-8 shadow-sm flex flex-col justify-between">
            <div>
              <h3 className="text-lg font-bold text-gray-800">{batch.years}</h3>
              <p className="text-gray-600">{batch.regulation}</p>
              <p className="text-gray-600">{batch.students} Students</p>
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
