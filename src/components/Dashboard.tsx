import { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import Header from './Header';
import Sidebar from './Sidebar';
import DashboardContent from './DashboardContent';
import Departments from './Departments';
import Regulations from './Regulations';
import Classes from './Classes';
import ClassDetails from './ClassDetails';
import StudentMarks from './StudentMarks';
import Batches from './Batches';
import Courses from './Courses';

interface DashboardProps {
  user: { name: string; role: string };
  onLogout: () => void;
}

export default function Dashboard({ user, onLogout }: DashboardProps) {
  const [currentPage, setCurrentPage] = useState('home');

  return (
    <div className="min-h-screen bg-neutral-100">
      <Header user={user} onLogout={onLogout} currentPage={currentPage} setCurrentPage={setCurrentPage} />
      <div className="flex">
        <Sidebar role={user.role} currentPage={currentPage} />
        <main className="flex-1 p-8">
          <Routes>
            <Route path="/" element={<DashboardContent user={user} currentPage={currentPage} />} />
            <Route path="/departments" element={<Departments />} />
            <Route path="/departments/:departmentName/regulations" element={<Regulations />} />
            <Route path="/regulations" element={<Regulations />} />
            <Route path="/classes" element={<Classes />} />
            <Route path="/classes/:departmentName/:regulationName" element={<Classes />} />
            <Route path="/classes/:departmentName/:regulationName/:className" element={<ClassDetails />} />
            <Route path="/classes/:departmentName/:regulationName/:className/:sectionName/students" element={<StudentMarks />} />
            <Route path="/batches" element={<Batches />} />
            <Route path="/courses" element={<Courses />} />
          </Routes>
        </main>
      </div>
    </div>
  );
}
