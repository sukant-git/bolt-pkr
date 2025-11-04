import { useNavigate } from "react-router-dom";
import { classesData } from "../data";

export default function Batches() {
  const navigate = useNavigate();

  const batches = classesData.reduce((acc, curr) => {
    const key = `${curr.batch}-${curr.regulation}`;
    if (!acc[key]) {
      acc[key] = { 
        years: curr.batch, 
        regulation: curr.regulation, 
        students: 0 
      };
    }
    acc[key].students += curr.sections.reduce((sAcc, sCurr) => sAcc + sCurr.students.length, 0);
    return acc;
  }, {} as Record<string, { years: string; regulation: string; students: number }>);

  const batchesData = Object.values(batches);

  const handleViewBatch = (batch: { years: string; regulation: string }) => {
    navigate(`/batches/${batch.years}/${batch.regulation}`);
  };

  return (
    <div className="space-y-8">
      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-bold text-neutral-800">Batches</h2>
      </div>
      <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
        {batchesData.map((batch, index) => (
          <div
            key={index}
            className="flex flex-col justify-between p-8 transition-shadow bg-gray-200 rounded-lg shadow-soft hover:shadow-medium"
          >
            <div>
              <h3 className="text-lg font-bold text-neutral-800">
                {batch.years}
              </h3>
              <p className="text-neutral-600">{batch.regulation}</p>
              <p className="text-neutral-600">{batch.students} Students</p>
            </div>
            <button
              onClick={() => handleViewBatch(batch)}
              className="self-start px-4 py-2 mt-4 text-white rounded-lg bg-primary hover:bg-primary/90"
            >
              View
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}