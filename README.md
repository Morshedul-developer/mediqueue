# 🏥 MediQueue

**MediQueue** is a modern tutor booking and session management platform built with Next.js 16 and React 19. It allows students to browse available tutors, book sessions, and manage their bookings — all from a clean, responsive interface.

🔗 **Live Site:** [https://mediqueue-indol.vercel.app](https://mediqueue-indol.vercel.app)

---

## ✨ Key Features

- 🔐 **Secure Authentication** — Powered by Better Auth with JWT token-based session management, supporting user registration, login, and protected routes.
- 📋 **Browse Available Tutors** — Students can explore a curated list of tutors with rich profile cards, making it easy to find the right match.
- 📅 **Book & Manage Sessions** — Users can book tutoring sessions and track all upcoming bookings from a dedicated dashboard.
- ❌ **Cancel Bookings** — Students have the ability to cancel any active session directly from their bookings page with real-time UI updates.
- 🌗 **Dark / Light Mode** — Full theme support via `next-themes`, allowing users to switch between dark and light modes seamlessly.
- 📱 **Fully Responsive Design** — Built with Tailwind CSS v4 and HeroUI v3 for a polished experience across all screen sizes.
- ⚡ **Optimized Performance** — Leverages Next.js 16 with Turbopack for fast builds and server-side rendering where appropriate.

---

## 🛠️ Tech Stack

| Category       | Technology                          |
|----------------|--------------------------------------|
| Framework      | Next.js 16.2.9 (Turbopack)          |
| UI Library     | React 19                            |
| Component Kit  | HeroUI v3                           |
| Styling        | Tailwind CSS v4                     |
| Authentication | Better Auth + MongoDB Adapter       |
| Database       | MongoDB                             |
| Icons          | Lucide React, React Icons           |
| Animations     | Animate.css, Swiper                 |
| Deployment     | Vercel                              |

---

## 🚀 Getting Started

### Prerequisites

- Node.js 18+
- npm or yarn
- MongoDB Atlas URI
- Backend server running (see [mediqueue-server](https://github.com/Morshedul-developer/mediqueue-server))

### Installation

```bash
# Clone the repository
git clone https://github.com/Morshedul-developer/mediqueue.git
cd mediqueue

# Install dependencies
npm install

# Set up environment variables
cp .env.example .env.local
```

### Environment Variables

Create a `.env.local` file in the root directory:

```env
NEXT_PUBLIC_SERVER_URL=http://localhost:5000
BETTER_AUTH_SECRET=your_secret_here
BETTER_AUTH_URL=http://localhost:3000
MONGODB_URI=your_mongodb_uri_here
```

### Run Development Server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Build for Production

```bash
npm run build
npm run start
```

---

## 📁 Project Structure

```
src/
├── app/
│   ├── layout.jsx          # Root layout with providers
│   ├── page.jsx            # Home page
│   ├── not-found.jsx       # 404 page
│   ├── error.jsx           # Error boundary page
│   └── (routes)/           # Feature-based route folders
├── components/
│   ├── Banner.jsx
│   ├── AvailableTutors.jsx
│   ├── WhyChoose.jsx
│   ├── LearningJourney.jsx
│   └── ui/
│       └── TutorCard.jsx
└── lib/
    └── auth-client.js      # Better Auth client config
```

---

## 🔗 Related

- **Backend Repository:** [mediqueue-server](https://github.com/Morshedul-developer/mediqueue-server)