import Activities from './Activities';
import AttainmentCalculation from './AttainmentCalculation';
import Batches from './Batches';
import BloomsLevels from './BloomsLevels';
import CO from './CO';
import CalculationMetrics from './CalculationMetrics';
import Classes from './Classes';
import CourseEndSurvey from './CourseEndSurvey';
import Courses from './Courses';
import Departments from './Departments';
import ExamTypes from './ExamTypes';
import PO from './PO';
import PSO from './PSO';
import Programmes from './Programmes';
import QuestionPapers from './QuestionPapers';
import QuestionPatterns from './QuestionPatterns';
import Questions from './Questions';
import Regulations from './Regulations';
import StudentMarks from './StudentMarks';

interface DashboardContentProps {
  activeSection: string;
  user: { name: string; role: string };
  currentPage: string;
}

export default function DashboardContent({ activeSection, user, currentPage }: DashboardContentProps) {
  const renderContent = () => {
    if (currentPage === 'home') {
      if (activeSection === 'home') {
        return (
          <div className="space-y-8">
            <div className="bg-white rounded-lg p-8 shadow-soft">
              <h2 className="text-2xl font-bold text-neutral-800 mb-4">Dashboard</h2>
              <p className="text-neutral-600 mb-2">
                Welcome to your dashboard. You're logged in as <span className="font-semibold text-primary">{user.name}</span>.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-bold text-neutral-800 mb-4">Courses</h3>
              <div className="bg-white rounded-lg p-6 shadow-soft">
                <h4 className="text-lg font-semibold text-neutral-800 mb-2">
                  19ECY07 - SENSORS FOR ENGINEERING APPLICATIONS
                </h4>
                <p className="text-neutral-600 mb-4">2022 - 2026</p>
                <button className="text-primary hover:underline font-medium">
                  View Course
                </button>
              </div>
            </div>
          </div>
        );
      }
      if (activeSection === 'regulations') {
        return <Regulations />;
      }
      if (activeSection === 'batches') {
        return <Batches />;
      }
      if (activeSection === 'departments') {
        return <Departments />;
      }
      if (activeSection === 'programmes') {
        return <Programmes />;
      }
      if (activeSection === 'classes') {
        return <Classes />;
      }
      if (activeSection === 'courses') {
        return <Courses />;
      }
    }

    if (currentPage === 'exam') {
      if (activeSection === 'home') {
        return (
          <div className="space-y-8">
            <div className="bg-gray-700 rounded-lg p-8 shadow-soft">
              <div className="flex gap-4 mb-6">
                <div>
                  <label className="block text-sm font-medium text-neutral-700 mb-2">Batch</label>
                  <select className="px-4 py-2 border border-neutral-300 rounded-lg focus:ring-2 focus:ring-primary">
                    <option>Select Batch</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-neutral-700 mb-2">Programme</label>
                  <select className="px-4 py-2 border border-neutral-300 rounded-lg focus:ring-2 focus:ring-primary">
                    <option>Select Programme</option>
                  </select>
                </div>
                <div className="flex-1">
                  <label className="block text-sm font-medium text-neutral-700 mb-2">Search</label>
                  <input type="text" placeholder="Search Course" className="w-full px-4 py-2 border border-neutral-300 rounded-lg focus:ring-2 focus:ring-primary" />
                </div>
                <div className="flex gap-2 items-end">
                  <button className="px-6 py-2 bg-primary text-white rounded-lg hover:bg-primary/90">Filter</button>
                  <button className="px-6 py-2 bg-neutral-200 text-neutral-800 rounded-lg hover:bg-neutral-300">Reset</button>
                </div>
              </div>

              <div className="bg-neutral-50 rounded-lg p-6">
                <h4 className="text-lg font-semibold text-neutral-800 mb-2">
                  19ECY07 - SENSORS FOR ENGINEERING APPLICATIONS
                </h4>
                <p className="text-neutral-600 mb-2">2022 - 2026</p>
                <p className="text-neutral-600 mb-4">B.Tech IT</p>
                <button className="text-primary hover:underline font-medium">View</button>
              </div>
            </div>
          </div>
        );
      }
      if (activeSection === 'blooms-levels') {
        return <BloomsLevels />;
      }
      if (activeSection === 'activities') {
        return <Activities />;
      }
      if (activeSection === 'exam-types') {
        return <ExamTypes />;
      }
      if (activeSection === 'question-patterns') {
        return <QuestionPatterns />;
      }
      if (activeSection === 'questions') {
        return <Questions />;
      }
      if (activeSection === 'question-papers') {
        return <QuestionPapers />;
      }
      if (activeSection === 'student-marks') {
        return <StudentMarks />;
      }
      if (activeSection === 'course-end-survey') {
        return <CourseEndSurvey />;
      }
    }

    if (currentPage === 'attainment') {
      if (activeSection === 'home') {
        return (
          <div className="space-y-8">
            <div className="bg-white rounded-lg p-8 shadow-soft">
              <h2 className="text-2xl font-bold text-neutral-800 mb-4">Attainment</h2>
              <p className="text-neutral-600">
                Welcome to the Attainment section. You're logged in as <span className="font-semibold text-primary">{user.name}</span>.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-bold text-neutral-800 mb-4">Courses</h3>
              <div className="bg-white rounded-lg p-6 shadow-soft">
                <h4 className="text-lg font-semibold text-neutral-800 mb-2">
                  19ECY07 - SENSORS FOR ENGINEERING APPLICATIONS
                </h4>
                <p className="text-neutral-600 mb-4">2022 - 2026</p>
                <button className="text-primary hover:underline font-medium">
                  View Course
                </button>
              </div>
            </div>
          </div>
        );
      }
      if (activeSection === 'po') {
        return <PO />;
      }
      if (activeSection === 'co') {
        return <CO />;
      }
      if (activeSection === 'pso') {
        return <PSO />;
      }
      if (activeSection === 'calculation-metrics') {
        return <CalculationMetrics />;
      }
      if (activeSection === 'attainment-calculation') {
        return <AttainmentCalculation />;
      }
    }

    return (
      <div className="bg-white rounded-lg p-8 shadow-soft">
        <h2 className="text-2xl font-bold text-neutral-800 mb-4">
          {activeSection.charAt(0).toUpperCase() + activeSection.slice(1).replace(/-/g, ' ')}
        </h2>
        <p className="text-neutral-600">
          Content for {activeSection} will be displayed here.
        </p>
      </div>
    );
  };

  return renderContent();
}
