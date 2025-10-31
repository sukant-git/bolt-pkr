export default function StudentMarks() {
  const studentMarksData = [
    {
      course: "19ECY07 - SENSORS FOR ENGINEERING APPLICATIONS",
      batch: "2022 - 2026",
    },
  ];

  return (
    <div className="space-y-8">
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-bold text-gray-800">Student Marks</h2>
        <button className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700">
          Add Student Marks
        </button>
      </div>

      <div className="bg-white rounded-lg p-8 shadow-sm">
        <div className="space-y-4">
          <div className="flex items-center space-x-4">
            <label htmlFor="programme" className="font-semibold">Programme</label>
            <select id="programme" className="p-2 border rounded-lg">
              <option>Select Programme</option>
            </select>
          </div>
          <div className="flex space-x-4">
            <button className="px-4 py-2 bg-gray-200 rounded-lg">Search</button>
            <button className="px-4 py-2 bg-gray-200 rounded-lg">Filter</button>
            <button className="px-4 py-2 bg-gray-200 rounded-lg">Reset</button>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {studentMarksData.map((marks, index) => (
          <div key={index} className="bg-white rounded-lg p-8 shadow-sm flex flex-col justify-between">
            <div>
              <h3 className="text-lg font-bold text-gray-800">{marks.course}</h3>
              <p className="text-gray-600">{marks.batch}</p>
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
