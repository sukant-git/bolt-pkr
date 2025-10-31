import { GraduationCap, Bell, ChevronDown, LogOut } from 'lucide-react';
import { useState } from 'react';

interface HeaderProps {
  user: { name: string; role: string };
  onLogout: () => void;
  currentPage: string;
  setCurrentPage: (page: string) => void;
}

export default function Header({ user, onLogout, currentPage, setCurrentPage }: HeaderProps) {
  const [showDropdown, setShowDropdown] = useState(false);

  return (
    <header className="bg-white border-b border-gray-200 px-8 py-4">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-4">
          <div className="bg-blue-600 p-2 rounded-lg">
            <GraduationCap className="w-8 h-8 text-white" />
          </div>
          <h1 className="text-2xl font-bold text-gray-800">ESEC</h1>
        </div>

        <nav className="flex items-center gap-8">
          <button onClick={() => setCurrentPage('home')} className={`font-medium transition ${currentPage === 'home' ? 'text-blue-600 border-b-2 border-blue-600 pb-1' : 'text-gray-600 hover:text-gray-800'}`}>
            Home
          </button>
          <button onClick={() => setCurrentPage('exam')} className={`font-medium transition ${currentPage === 'exam' ? 'text-blue-600 border-b-2 border-blue-600 pb-1' : 'text-gray-600 hover:text-gray-800'}`}>
            Exam
          </button>
          <button onClick={() => setCurrentPage('attainment')} className={`font-medium transition ${currentPage === 'attainment' ? 'text-blue-600 border-b-2 border-blue-600 pb-1' : 'text-gray-600 hover:text-gray-800'}`}>
            Attainment
          </button>

          <div className="flex items-center gap-4 ml-8">
            <button className="relative p-2 hover:bg-gray-100 rounded-lg transition">
              <Bell className="w-5 h-5 text-gray-600" />
              <span className="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full"></span>
            </button>

            <div className="relative">
              <button
                onClick={() => setShowDropdown(!showDropdown)}
                className="flex items-center gap-2 hover:bg-gray-100 px-3 py-2 rounded-lg transition"
              >
                <span className="font-medium text-gray-700">{user.name}</span>
                <ChevronDown className="w-4 h-4 text-gray-600" />
              </button>

              {showDropdown && (
                <div className="absolute right-0 mt-2 w-48 bg-white border border-gray-200 rounded-lg shadow-lg py-2 z-50">
                  <div className="px-4 py-2 border-b border-gray-200">
                    <p className="text-sm text-gray-500">Role: {user.role}</p>
                  </div>
                  <button
                    onClick={onLogout}
                    className="w-full flex items-center gap-2 px-4 py-2 text-red-600 hover:bg-red-50 transition"
                  >
                    <LogOut className="w-4 h-4" />
                    <span>Logout</span>
                  </button>
                </div>
              )}
            </div>
          </div>
        </nav>
      </div>
    </header>
  );
}
