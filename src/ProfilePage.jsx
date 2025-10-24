import React from "react";
import { Home, Star, Heart, Filter, LogOut, Menu } from "lucide-react";

export default function ProfilePage() {
  return (
    <div className="flex h-screen bg-gray-50">
      {/* Sidebar */}
      <aside className="w-20 md:w-56 bg-white shadow-lg flex flex-col justify-between">
        <div>
          <div className="flex items-center justify-center md:justify-start p-4 border-b">
            <Menu className="w-6 h-6 text-gray-600 md:hidden" />
            <h1 className="hidden md:block text-xl font-semibold ml-2">Menu</h1>
          </div>
          <nav className="flex flex-col mt-4 space-y-2 px-2">
            <SidebarButton icon={<Filter />} label="Filter" />
            <SidebarButton icon={<Heart />} label="Favorites" />
            <SidebarButton icon={<Star />} label="Rated" />
            <SidebarButton icon={<Home />} label="Recommend" />
          </nav>
        </div>
        <div className="p-4 border-t">
          <SidebarButton icon={<LogOut />} label="Logout" />
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-6 overflow-y-auto">
        {/* Profile Header */}
        <div className="flex flex-col sm:flex-row sm:items-center gap-4 bg-white rounded-2xl shadow p-6 mb-6">
          <img
            src="https://via.placeholder.com/100"
            alt="Profile"
            className="w-24 h-24 rounded-full object-cover border"
          />
          <div>
            <h2 className="text-2xl font-semibold text-gray-800">John Doe</h2>
            <p className="text-gray-500 text-sm">Joined January 2024</p>
            <p className="text-gray-700 mt-2 max-w-lg">
              Passionate designer and art enthusiast. Sharing my favorite pieces and discoveries.
            </p>
          </div>
        </div>

        {/* Recently Rated Section */}
        <section>
          <h3 className="text-xl font-semibold mb-4">Recently Rated</h3>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {Array.from({ length: 6 }).map((_, i) => (
              <div
                key={i}
                className="bg-white rounded-xl shadow p-4 hover:shadow-md transition-shadow"
              >
                <img
                  src={`https://picsum.photos/300/200?random=${i}`}
                  alt="Artwork"
                  className="w-full h-40 object-cover rounded-lg mb-3"
                />
                <div className="flex items-center justify-between">
                  <h4 className="font-medium text-gray-800">Artwork {i + 1}</h4>
                  <Star className="w-5 h-5 text-yellow-500" fill="currentColor" />
                </div>
              </div>
            ))}
          </div>
        </section>
      </main>
    </div>
  );
}

function SidebarButton({ icon, label }) {
  return (
    <button className="flex items-center justify-center md:justify-start w-full text-gray-700 hover:bg-gray-100 rounded-lg p-2 transition-colors">
      <span className="w-6 h-6">{icon}</span>
      <span className="hidden md:inline ml-3">{label}</span>
    </button>
  );
}