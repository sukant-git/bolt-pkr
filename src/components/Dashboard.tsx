import { useState } from 'react';
import Header from './Header';
import Sidebar from './Sidebar';
import DashboardContent from './DashboardContent';

interface DashboardProps {
  user: { name: string; role: string };
  onLogout: () => void;
}

export default function Dashboard({ user, onLogout }: DashboardProps) {
  const [currentPage, setCurrentPage] = useState('home');
  const [activeSection, setActiveSection] = useState('home');

  return (
    <div className="min-h-screen bg-gray-50">
      <Header user={user} onLogout={onLogout} currentPage={currentPage} setCurrentPage={setCurrentPage} />
      <div className="flex">
        <Sidebar activeSection={activeSection} setActiveSection={setActiveSection} role={user.role} currentPage={currentPage} />
        <main className="flex-1 p-8">
          <DashboardContent activeSection={activeSection} user={user} currentPage={currentPage} />
        </main>
      </div>
    </div>
  );
}
