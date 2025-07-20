**🧠 MERN Stack Quiz App**
A full-stack quiz application where users can log in, select quiz categories like History, Aptitude, Technology, and General, attempt quizzes, and view their scores. Built using the MERN Stack: MongoDB Atlas, Express.js, React.js (with Vite), and Node.js.

**Features**
Select from 4 quiz categories: History, Aptitude, Technology, General
Quiz includes navigation: Next, Previous, and Submit
Immediate score display after quiz submission
Selected answers are highlighted
Highest score tracking per user
Questions stored and fetched from MongoDB Atlas
Fully responsive design using CSS

**Technologies Used**
Frontend: React.js, CSS
Backend: Node.js, Express.js
Database: MongoDB Atlas with Mongoose
Deployment: Coming soon (optional Render/Netlify)

**Project Structure**
/client         → React frontend (Vite)
/server         → Express backend
  └── routes/   → API routes (quiz, auth, score)
  └── models/   → Mongoose schemas (User, Question, Score)
  └── seed.js   → Script to populate MongoDB with quiz questions


**How It Works**
Selects a quiz category (History, Aptitude, General, Technology)
Quiz questions load from MongoDB Atlas
Navigation buttons allow users to go back and forth between questions
After submitting, the total score is calculated and displayed

**Setup Instructions (Local Development)**
🔧 Backend Setup
cd server
npm install
npm run dev

🔧 Frontend Setup

cd client
npm install
npm run dev
