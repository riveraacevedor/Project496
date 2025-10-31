import Sidebar from '../components/Sidebar';
import TopBar from '../components/Topbar';

export default function TitlesLibrary() {
  return (
    <div className="flex h-screen w-screen">
      {/* Sidebar */}
      <Sidebar />

      {/* Main content area */}
      <div className="flex-1 flex flex-col">
        {/* Top Bar */}
        <TopBar />

        {/* Page content */}
        <div className="flex-1 p-4 overflow-auto">
          {/* Your category tabs and title cards go here */}
        </div>
      </div>
    </div>
  );
}
