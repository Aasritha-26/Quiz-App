## 🧠 MERN Stack Quiz App

A full-stack quiz application where users can log in, select quiz categories like History, Aptitude, Technology, and General, attempt quizzes, and view their scores. Built using the MERN Stack: MongoDB Atlas, Express.js, React.js (with Vite), and Node.js.

## 🚀 Features
- Select from 4 quiz categories: History, Aptitude, Technology, General
- Quiz includes navigation: Next, Previous, and Submit
- Immediate score display after quiz submission
- Selected answers are highlighted
- Highest score tracking per user
- Questions stored and fetched from MongoDB Atlas
- Fully responsive design using CSS

## 🛠️ Technologies Used
- **Frontend** : React.js, CSS
- **Backend** : Node.js, Express.js
- **Database** : MongoDB Atlas with Mongoose
- **Deployment**: Coming soon (Render/Netlify)
  
## ⚙️ How It Works
- Select a quiz category: History, Aptitude, Technology, or General
- Questions are fetched from MongoDB Atlas
- Users can navigate with Next and Previous buttons
- After clicking Submit, total score is calculated and displayed
- Selected answers remain highlighted for review

## 🔧 Installation
1. **Clone the Repository**
     ```bash
        git clone https://github.com/Aasritha-26/Quiz-app.git
        cd Quiz-app
2. **Set Up Backend**
   ```bash
    cd backend
    npm install
   
3. **Set Up Frontend**
    ```bash
    cd ../frontend
    npm install
   
4. **Configure Environment**

Create a .env file inside the backend/ directory with the following:
  ```bash
  MONGODB_URI=your_mongodb_atlas_connection_string
  PORT=5000

## Running the App

**Start Backend Server**
```bash
cd backend
npm run dev
Server runs on http://localhost:5000

**Start Frontend**
```bash
cd ../frontend
npm run dev
App opens in your browser at http://localhost:3000

## 📂 Project Structure
```
Quiz-app/
├── backend/                # Backend code
│   ├── routes/            # API routes (quiz, auth, score)
│   ├── models/            # Mongoose models (Question, Score)
│   ├── seed.js            # Quiz data population script
│   ├── server.js          # Express server entry
│   └── .env               # Environment variables
│
├── frontend/                # Frontend (React)
│   ├── src/               # React components, pages, utils
│   ├── public/            # Static assets
│   └── package.json
│
└── README.md              # Project documentation



