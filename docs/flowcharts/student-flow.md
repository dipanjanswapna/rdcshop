# Student Flow for EduLMS

This document outlines the user journey for a student using the EduLMS platform, designed to mirror the functionality and design of 10MinuteSchool.com. It covers the complete flow from landing on the website to engaging with various features like courses, live classes, chat, exams, and more, with additional features to enhance the experience.

## 1. Landing on the Homepage
- **Objective**: The student discovers the platform and explores its offerings.
- **Actions**:
  - **View Hero Section**: Sees a welcoming banner with a tagline like "Learn Anytime, Anywhere!" and a "Join Now" button.
  - **Explore Categories**: Navigates through course categories (e.g., Class Six, HSC, Engineering, Medical, Study Abroad) via clickable tabs.
  - **View Top Courses**: Browses popular courses displayed in card format (thumbnail, title, price, rating, "Enroll Now" button).
  - **Check Discounts**: Notices a "10% Off on All Courses" banner with a "Get Coupon" button.
  - **Live Class Promotion**: Sees a section promoting live classes with a "Join Live Class" button.
  - **Testimonials**: Reads student reviews (e.g., "This platform helped me ace my exams!" - Rakibul, BUET).
  - **Study Resources**: Finds a "Download Free Notes" link for free resources.
  - **Blog Section**: Explores educational blogs (e.g., "How to Prepare for HSC in 30 Days").
  - **Leaderboard**: Views top students' rankings.
  - **Skill Development & Study Abroad**: Sees sections promoting professional courses and study abroad programs (IELTS, GRE prep).
  - **App Download**: Notices links to download the mobile app from Google Play/App Store.
  - **Footer Links**: Finds About Us, Privacy Policy, Refund Policy, Terms, Contact Us links.
  - **Event Calendar**: Views an interactive calendar showing upcoming live classes, webinars, or events (e.g., "Physics Webinar - May 26, 2025").
  - **Achievement Badges**: Sees a section displaying badges for course completion or exam success (e.g., "Gold Badge: 90% Score in HSC Test").
  - **New Feature - Personalized Recommendations**: Gets tailored course suggestions based on past activity.
  - **New Feature - Video Tutorials**: Accesses short tutorial videos for platform navigation.
  - **New Feature - Success Stories**: Reads inspiring stories from top students.

## 2. Registration / Sign-Up
- **Objective**: The student creates an account to access the platform's features.
- **Actions**:
  - Clicks the "Sign Up" button in the header.
  - **Sign-Up Options**:
    - Enters email, phone number, and password to register manually.
    - Alternatively, uses Google/Facebook login for quick sign-up.
  - Confirms password and agrees to terms.
  - Receives a confirmation message: "Account created successfully! Please log in."
  - **Referral Program**: During sign-up, gets an option to enter a referral code for discounts and earns points to share with friends.
  - **New Feature - Onboarding Quiz**: Takes a short quiz to assess skill level and get initial course recommendations.
  - **New Feature - Profile Picture Upload**: Uploads a profile photo during registration.

## 3. Logging In
- **Objective**: The student logs in to access their personalized dashboard.
- **Actions**:
  - Clicks the "Login" button in the header.
  - Enters email and password or uses Google/Facebook login.
  - Sees a welcome message: "Welcome back, [Student Name]!"
  - Redirected to the student dashboard.
  - **Two-Factor Authentication (2FA)**: After login, sets up 2FA with an OTP sent to their phone for added security.
  - **New Feature - Quick Access Links**: Sees shortcuts to recent courses or exams on the login page.

## 4. Exploring the Student Dashboard
- **Objective**: The student views their personalized learning space.
- **Actions**:
  - Sees sections like:
    - **My Courses**: List of enrolled courses with progress bars (e.g., 60% complete).
    - **Past Classes**: Recorded classes they’ve attended.
    - **Upcoming Exams**: List of scheduled exams with syllabus links.
    - **Classrooms**: Links to join live or recorded classes.
    - **Buy Courses**: Option to explore more courses.
  - Receives notifications (e.g., "New live class scheduled for tomorrow!").
  - Views their rank on the leaderboard (e.g., "You’re in the top 10%!").
  - **Learning Analytics**: Sees a graph showing study time, quiz scores, and improvement trends.
  - **Task Manager**: Views a to-do list for assignments, quizzes, and deadlines (e.g., "Submit Physics Assignment by May 27").
  - **New Feature - Goal Setting**: Sets personal learning goals (e.g., "Complete 3 courses by June").
  - **New Feature - Peer Comparison**: Compares their progress with peers anonymously.

## 5. Browsing and Purchasing Courses (Course Shop)
- **Objective**: The student finds and enrolls in a new course.
- **Actions**:
  - Navigates to the "Course Shop" section from the header or dashboard.
  - **Search and Filter**:
    - Uses the search bar to find courses (e.g., "Physics for HSC").
    - Filters by category, subject, price, or instructor rating.
  - Views course cards with details (thumbnail, title, price, rating).
  - Clicks on a course (e.g., "Game of Physics") to see details.
  - **Course Details**:
    - Reads the course description, instructor name, syllabus, and enrollment count.
    - Watches a trailer video via the "Watch Trailer" button.
    - Checks the Q&A section for student queries.
  - Clicks "Enroll Now" and proceeds to a simulated payment (demo mode).
  - Receives confirmation: "Successfully enrolled in Game of Physics!"
  - **Wishlist**: Adds a course to their wishlist for later purchase.
  - **New Feature - Course Reviews**: Reads and writes reviews for courses.
  - **New Feature - Instructor Bio**: Views detailed instructor profiles.

## 6. Attending Classes (Classroom)
- **Objective**: The student participates in live or recorded classes.
- **Actions**:
  - Navigates to the "Classrooms" section from the dashboard.
  - **Live Class**:
    - Sees a schedule (e.g., "Physics Live Class at 8 PM") and clicks "Join Live Class" (simulated link).
    - Participates in an interactive quiz during the class.
  - **Recorded Class**:
    - Watches a recorded session (e.g., "Physics Chapter 1").
    - Downloads class notes via a "Download Notes" button.
  - **Note-Taking Tool**: Takes notes directly within the classroom interface, which syncs with their dashboard.
  - **Attendance Tracker**: Views their attendance percentage for each course (e.g., "85% attendance in Physics").
  - **New Feature - Screen Sharing**: Instructors can share screens during live classes (simulated).
  - **New Feature - Polls and Surveys**: Participates in live polls to engage with instructors.

## 7. Engaging in Real-Time Chat
- **Objective**: The student communicates with instructors or peers.
- **Actions**:
  - Clicks the "Live Chat" icon in the header.
  - Enters a chat room (e.g., "Physics Discussion Group").
  - Sends messages to the instructor (e.g., "Sir, can you explain Newton’s Laws again?").
  - Receives real-time responses (simulated or via Firebase Realtime Database).
  - **Group Chat Rooms**: Joins group chats with peers for collaborative learning.
  - **Chat History**: Views past conversations for reference.
  - **New Feature - Voice Messages**: Sends voice notes to instructors.
  - **New Feature - Chat Moderation**: Reports inappropriate messages.

## 8. Taking Exams and Model Tests
- **Objective**: The student evaluates their progress through exams.
- **Actions**:
  - Navigates to the "Exams" section from the dashboard.
  - **Upcoming Exams**:
    - Sees a list (e.g., "HSC Physics Test - May 25, 2025").
    - Views the syllabus and clicks "Prepare Now".
  - **Model Tests**:
    - Takes a practice test (e.g., "Physics MCQ Test").
    - Submits answers and gets instant results (e.g., "Score: 85/100").
  - **Past Exams**:
    - Views previous results (e.g., "HSC Mock Test: 90/100").
  - **Personalized Study Plan**: Receives a study plan based on exam performance.
  - **Certificate Generation**: Downloads a certificate after passing an exam.
  - **New Feature - Timed Exams**: Takes exams with a timer (e.g., 60 minutes).
  - **New Feature - Exam Analytics**: Views detailed performance analysis (e.g., weak topics).

## 9. Accessing Additional Features
- **Objective**: The student uses supplementary features to enhance their learning.
- **Actions**:
  - Downloads free resources (e.g., HSC Physics Notes) from the "Study Resources" section.
  - Reads blogs for tips (e.g., "How to Score High in HSC").
  - Explores skill development courses (e.g., "Digital Marketing Basics").
  - Checks study abroad programs (e.g., "IELTS Preparation Course").
  - Views their rank on the leaderboard and strives to improve.
  - **Video Library**: Accesses a library of educational videos beyond enrolled courses.
  - **Community Forum**: Participates in a discussion forum for peer support and Q&A.
  - **New Feature - Gamification**: Earns points for activities (e.g., 10 points for a quiz).
  - **New Feature - Offline Mode**: Downloads courses for offline viewing.
  - **New Feature - Mentor Matching**: Requests a mentor for personalized guidance.

## 10. Managing Profile and Settings
- **Objective**: The student manages their account and preferences.
- **Actions**:
  - Clicks the profile icon in the header.
  - Views their profile (name, email, enrolled courses, badges).
  - Navigates to the dashboard or logs out.
  - Toggles between dark/light mode.
  - Changes language (Bangla/English).
  - **Notification Preferences**: Customizes notification settings.
  - **Payment History**: Views a history of simulated purchases.
  - **New Feature - Privacy Settings**: Controls data sharing preferences.
  - **New Feature - Bookmark Manager**: Saves favorite resources or lessons.

## 11. Logging Out
- **Objective**: The student securely logs out of the platform.
- **Actions**:
  - Clicks the "Logout" button from the profile dropdown.
  - Receives a message: "You have been logged out successfully."
  - Redirected to the homepage.
  - **Session Timeout Alert**: Gets a warning if inactive for 15 minutes, prompting to stay logged in or log out.
  - **New Feature - Logout Confirmation**: Confirms logout with a pop-up to prevent accidental logout.

## Tools and Technologies Used
- **Frontend**: React.js, Tailwind CSS (responsive design).
- **Backend**: Firebase (authentication, Realtime Database for chat and data, hosting).
- **Deployment**: Vercel (hosting), GitHub (version control).

## Notes
- This flow assumes a simulated payment system (demo mode) since the project uses free resources.
- Features like live classes, chat, and forums are implemented using Firebase Realtime Database for real-time functionality.
- The design follows 10MinuteSchool.com’s aesthetic (blue, orange, white color scheme, card-based layout).

---

This student flow ensures a comprehensive and engaging experience for users on the EduLMS platform with enhanced features.