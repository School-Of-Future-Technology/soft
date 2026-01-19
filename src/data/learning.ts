export type Flashcard = {
  question: string;
  answer: string;
  exampleCode?: string;
  variableName?: string;
  variableValue?: string;
};

export type Chapter = {
  id: string;
  title: string;
  summary: string;
  flashcards: Flashcard[];
};

export type Technology = {
  id: string;
  name: string;
  description: string;
};

export const technologies: Technology[] = [
  {
    id: "python",
    name: "Python",
    description: "Learn Python in a fun way with mini-lessons and flashcards.",
  },
  { id: "ai-ml", name: "AI/ML", description: "Build intuition for data and models." },
  { id: "web-dev", name: "Web Dev", description: "Create modern web pages and apps." },
  { id: "app-dev", name: "App Dev", description: "Design mobile apps from scratch." },
  { id: "game-dev", name: "Game Dev", description: "Make your first playable games." },
  { id: "java", name: "Java", description: "Learn core Java concepts and OOP." },
  { id: "c", name: "C", description: "Understand fundamentals and memory." },
  { id: "cpp", name: "C++", description: "Learn OOP and performance basics." },
  { id: "dsa", name: "DSA", description: "Practice data structures and algorithms." },
];

export const pythonChapters: Chapter[] = [
  {
    id: "basics",
    title: "Chapter 1: Python Basics",
    summary: "Variables, input/output, and simple programs.",
    flashcards: [
      {
        question: "What is a variable?",
        answer: "Variable is like a box that stores data.",
        exampleCode: "x = 10",
        variableName: "x",
        variableValue: "10",
      },
      { question: "How do you print output?", answer: "Use the print() function." },
      { question: "What does input() do?", answer: "Reads user input as a string." },
    ],
  },
  {
    id: "conditions",
    title: "Chapter 2: Decisions",
    summary: "If/else statements and comparison operators.",
    flashcards: [
      { question: "What does == check?", answer: "It checks if two values are equal." },
      { question: "Name a comparison operator.", answer: ">, <, >=, <=, ==, !=" },
      { question: "What is an if statement for?", answer: "Running code conditionally." },
    ],
  },
  {
    id: "loops",
    title: "Chapter 3: Loops - Lab of Rhythm",
    summary: "Repeat actions with for and while loops.",
    flashcards: [
      { question: "When do you use a for loop?", answer: "When repeating over a sequence." },
      { question: "When do you use a while loop?", answer: "When repeating until a condition changes." },
      { question: "What does range(3) produce?", answer: "0, 1, 2" },
    ],
  },
  {
    id: "functions",
    title: "Chapter 4: Functions",
    summary: "Reusable blocks of code with inputs and outputs.",
    flashcards: [
      { question: "Why use functions?", answer: "To reuse code and organize logic." },
      { question: "What is a parameter?", answer: "A named input to a function." },
      { question: "What does return do?", answer: "Sends a value back to the caller." },
    ],
  },
];
