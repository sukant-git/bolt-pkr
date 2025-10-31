export default function PO() {
  return (
    <div className="space-y-8">
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-bold text-gray-800">PO</h2>
        <button className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700">
          Add PO
        </button>
      </div>
      <div className="bg-white rounded-lg p-8 shadow-sm">
        <p className="text-gray-600">PO content will be displayed here.</p>
      </div>
    </div>
  );
}
