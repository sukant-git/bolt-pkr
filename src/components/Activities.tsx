export default function Activities() {
  const activitiesData = [
    { name: "Assingement", maxMarks: 5 },
    { name: "Seminar", maxMarks: 5 },
    { name: "Quiz", maxMarks: 5 },
    { name: "Group Discussion", maxMarks: 5 },
  ];

  return (
    <div className="space-y-8">
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-bold text-gray-800">Activities</h2>
        <button className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700">
          Add Activity
        </button>
      </div>
      <div className="bg-white rounded-lg p-8 shadow-sm">
        <table className="w-full text-left">
          <thead>
            <tr className="bg-gray-100">
              <th className="p-4 font-semibold">Name</th>
              <th className="p-4 font-semibold">Max Marks</th>
            </tr>
          </thead>
          <tbody>
            {activitiesData.map((activity, index) => (
              <tr key={index} className="border-b">
                <td className="p-4">{activity.name}</td>
                <td className="p-4">{activity.maxMarks}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
