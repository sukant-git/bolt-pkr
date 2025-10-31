interface SidebarProps {
  activeSection: string;
  setActiveSection: (section: string) => void;
  role: string;
  currentPage: string;
}

const facultyMenuItems = [
  { id: 'home', label: 'Home' },
  { id: 'regulations', label: 'Regulations' },
  { id: 'batches', label: 'Batches' },
  { id: 'departments', label: 'Departments' },
  { id: 'programmes', label: 'Programmes' },
  { id: 'classes', label: 'Classes' },
  { id: 'courses', label: 'Courses' },
];

const examMenuItems = [
  { id: 'home', label: 'Home' },
  { id: 'blooms-levels', label: 'Blooms Levels' },
  { id: 'activities', label: 'Activities' },
  { id: 'exam-types', label: 'Exam Types' },
  { id: 'question-patterns', label: 'Question Patterns' },
  { id: 'questions', label: 'Questions' },
  { id: 'question-papers', label: 'Question Papers' },
  { id: 'student-marks', label: 'Student Marks' },
  { id: 'course-end-survey', label: 'Course End Survey' },
];

const attainmentMenuItems = [
  { id: 'home', label: 'Home' },
  { id: 'po', label: 'PO' },
  { id: 'co', label: 'CO' },
  { id: 'pso', label: 'PSO' },
  { id: 'calculation-metrics', label: 'Calculation Metrics' },
  { id: 'attainment-calculation', label: 'Attainment Calculation' },
];

export default function Sidebar({ activeSection, setActiveSection, role, currentPage }: SidebarProps) {
  let menuItems = [];
  if (currentPage === 'exam') {
    menuItems = examMenuItems;
  } else if (currentPage === 'attainment') {
    menuItems = attainmentMenuItems;
  } else {
    menuItems = role === 'faculty' ? facultyMenuItems : attainmentMenuItems;
  }

  return (
    <aside className="w-64 bg-white border-r border-neutral-200 min-h-[calc(100vh-73px)]">
      <div className="p-6">
        <h2 className="text-primary font-semibold text-lg mb-6">Dashboard</h2>
        <nav className="space-y-1">
          {menuItems.map((item) => (
            <button
              key={item.id}
              onClick={() => setActiveSection(item.id)}
              className={`w-full text-left px-4 py-3 rounded-lg transition ${
                activeSection === item.id
                  ? 'bg-primary/10 text-primary font-medium border-l-4 border-primary'
                  : 'text-neutral-700 hover:bg-neutral-100'
              }`}
            >
              {item.label}
            </button>
          ))}
        </nav>
      </div>
    </aside>
  );
}
