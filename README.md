# Streakly
- Build habits that stick.
- Streakly is a full-stack habit tracker built with React and a Node.js + Express REST API. Create habits, check them off each day, and track your streaks with a monthly calendar heatmap, all backed by PostgreSQL on Supabase.

🚧 **Currently in progress. Live demo coming soon!**

## Features
- **Auth**: sign up or log in securely with Supabase Auth, with every API request verified on the server
- **Habits**: create and delete habits to build your daily routine
- **Daily check-ins**: check off habits each day, or undo a check-in
- **Streaks**: see your current streak and best streak for every habit
- **Monthly heatmap**: view your progress on a calendar, with completion counts for the month

## Tech Stack
- [React](https://react.dev/) + [Vite](https://vitejs.dev/)
- [Node.js](https://nodejs.org/) + [Express](https://expressjs.com/): REST API and auth middleware
- [PostgreSQL](https://www.postgresql.org/): database, with custom SQL queries for streaks and stats
- [Supabase](https://supabase.com/): authentication and database hosting
- [Tailwind CSS](https://tailwindcss.com/): styling
- [Vercel](https://vercel.com/): hosting and deployment
