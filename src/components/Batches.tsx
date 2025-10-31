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
        <h2 className="text-2xl font-bold text-neutral-800">Batches</h2>
        <button className="px-6 py-2 bg-primary text-white rounded-lg hover:bg-primary/90">
          Add Batch
        </button>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {batchesData.map((batch, index) => (
          <div key={index} className="bg-gray-200 rounded-lg p-8 shadow-soft flex flex-col justify-between hover:shadow-medium transition-shadow">
            <div>
              <h3 className="text-lg font-bold text-neutral-800">{batch.years}</h3>
              <p className="text-neutral-600">{batch.regulation}</p>
              <p className="text-neutral-600">{batch.students} Students</p>
            </div>
            <button className="mt-4 px-4 py-2 bg-primary text-white rounded-lg hover:bg-primary/90 self-start">
              View
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
