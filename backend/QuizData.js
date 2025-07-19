const mongoose = require('mongoose');
const dotenv = require('dotenv');
const Question = require('./models/Question');

dotenv.config();

const questions = [
  {
  question: "Which is the national animal of India?",
  options: ["Elephant", "Lion", "Tiger", "Leopard"],
  correctAnswer: "Tiger",
  category: "General"
},
 {
    question: "In which year did India gain independence?",
    options: ["1945", "1947", "1950", "1952"],
    correctAnswer: "1947",
    category: 'History'
  },
{
  question: "Which is the national bird of India?",
  options: ["Pegion", "Peacock", "Sparrow", "Crow"],
  correctAnswer: "Peacock",
  category: "General"
},
{
  question: "What is the currency of Japan?",
  options: ["Yuan", "Yen", "Won", "Dollar"],
  correctAnswer: "Yen",
  category: "General"
},
{
    question: "What is the full form of CPU?",
    options: ["Central Performance Unit", "Central Processing Unit", "Computer Power Unit", "Central Program Utility"],
    correctAnswer: "Central Processing Unit",
    category: "Technology"
  },
 {
    question: "Who is the President of India as of 2025?",
    options: ["Droupadi Murmu", "Narendra Modi", "Ram Nath Kovind", "Amit Shah"],
    correctAnswer: "Droupadi Murmu",
    category: 'General'
  },
  {
  question: "What is the next number in the sequence: 2, 4, 8, 16, ?",
  options: ["18", "24", "30", "32"],
  correctAnswer: "32",
  category: "Aptitude"
},
{
  question: "Who was the first Prime Minister of India?",
  options: ["Jawaharlal Nehru", "Mahatma Gandhi", "Sardar Patel", "Rajendra Prasad"],
  correctAnswer: "Jawaharlal Nehru",
  category: "History"
},
{
  question: "If 5x = 20, what is the value of x?",
  options: ["2", "4", "5", "6"],
  correctAnswer: "4",
  category: "Aptitude"
},
{
  question: "Which device is used to input text into a computer?",
  options: ["Monitor", "Mouse", "Keyboard", "Printer"],
  correctAnswer: "Keyboard",
  category: "Technology"
},
{
  question: "Find the missing number: 3, 6, 11, 18, ?",
  options: ["25", "26", "27", "28"],
  correctAnswer: "27",
  category: "Aptitude"
},
 {
    question: "Who invented the telephone?",
    options: ["Alexander Graham Bell", "Thomas Edison", "Nikola Tesla", "Isaac Newton"],
    correctAnswer: "Alexander Graham Bell",
    category: 'History'
  },
  {
  question: "Who built the Taj Mahal?",
  options: ["Shah Jahan", "Akbar", "Aurangzeb", "Jahangir"],
  correctAnswer: "Shah Jahan",
  category: "History"
},
{
  question: "What is 25% of 200?",
  options: ["40", "50", "60", "70"],
  correctAnswer: "50",
  category: "Aptitude"
},
 {
    question: 'What does CSS stand for?',
    options: [
      'Computer Style Sheets',
      'Cascading Style Sheets',
      'Creative Style Sheets',
      'Colorful Style Sheets'
    ],
    correctAnswer: 'Cascading Style Sheets',
    category: 'Technology'
  },
{
    question: "HTML is used to?",
    options: ["Style web pages", "Add interactivity", "Structure content", "Manage servers"],
    correctAnswer: "Structure content",
    category: 'Technology'
  },  
];

async function seedDB() {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    await Question.deleteMany({});
    await Question.insertMany(questions);
    console.log('✅ Sample questions inserted with categories!');
    mongoose.disconnect();
  } catch (err) {
    console.error(err);
  }
}

seedDB();
