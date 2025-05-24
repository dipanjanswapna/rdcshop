import Navbar from '../components/Navbar'
import MyCourses from '../components/dashboard/MyCourses'
import PastClasses from '../components/dashboard/PastClasses'
import UpcomingExams from '../components/dashboard/UpcomingExams'
import Analytics from '../components/dashboard/Analytics'
import Notifications from '../components/dashboard/Notifications'
import Leaderboard from '../components/dashboard/Leaderboard'

export default function Dashboard() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content - 2 columns */}
          <div className="lg:col-span-2 space-y-8">
            <MyCourses />
            <PastClasses />
            <UpcomingExams />
          </div>
          {/* Sidebar - 1 column */}
          <div className="space-y-8">
            <Notifications />
            <Leaderboard />
            <Analytics />
          </div>
        </div>
      </div>
    </div>
  );
}
