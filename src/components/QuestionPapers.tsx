export default function QuestionPapers() {
  return (
    <div className="space-y-8">
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-bold text-gray-800">Question Papers</h2>
        <button className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700">
          Add Question Paper
        </button>
      </div>
      <div className="bg-white rounded-lg p-8 shadow-sm">
        <p className="text-gray-600">Question Papers content will be displayed here.</p>
      </div>
    </div>
  );
}
