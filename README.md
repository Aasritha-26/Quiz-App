🧠 MERN Stack Quiz App
A full-stack quiz application where users can log in, select quiz categories like History, Aptitude, Technology, and General, attempt quizzes, and view their scores. Built using the MERN Stack: MongoDB Atlas, Express.js, React.js (with Vite), and Node.js.

🚀Features
User login using name and password

Select from 4 quiz categories: History, Aptitude, Technology, General

Quiz includes navigation: Next, Previous, and Submit

Immediate score display after quiz submission

Selected answers are highlighted

Highest score tracking per user

Questions stored and fetched from MongoDB Atlas

Fully responsive design using CSS

🛠️ Technologies Used
Frontend: React.js (Vite), React Router DOM, CSS

Backend: Node.js, Express.js

Database: MongoDB Atlas with Mongoose

Authentication: Basic login (registration coming soon)

Deployment: Coming soon (optional Render/Netlify)

📁 Project Structure
pgsql
Copy
Edit
/client         → React frontend (Vite)
/server         → Express backend
  └── routes/   → API routes (quiz, auth, score)
  └── models/   → Mongoose schemas (User, Question, Score)
  └── seed.js   → Script to populate MongoDB with quiz questions
🔗 Live Demo (Optional)
Frontend: Coming soon

Backend API: Coming soon

🧠 How It Works
User logs in with name and password

Selects a quiz category (History, Aptitude, General, Technology)

Quiz questions load from MongoDB Atlas

Navigation buttons allow users to go back and forth between questions

After submitting, the total score is calculated and displayed

Score is saved for the user in the database

📦 Setup Instructions (Local Development)
🔧 Backend Setup
bash
Copy
Edit
cd server
npm install
npm run dev
Create a .env file inside server/:

ini
Copy
Edit
PORT=5000
MONGO_URI=your_mongo_atlas_connection_string
🔧 Frontend Setup
bash
Copy
Edit
cd client
npm install
npm run dev
The frontend will run on http://localhost:5173, and backend on http://localh
