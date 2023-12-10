export interface MessageInputProps {
  userId: string;
  token: string;
  setLoadingEffect: React.Dispatch<React.SetStateAction<boolean>>;
  isLoading: boolean;
  courseId: string;
  chatId: string;
  onAddMessage: (message: Message) => void;
}

export enum SenderType {
  Human = "User",
  AI = "Bot",
}

export type Message = {
  question: string;
  answer: string;
  userId: string;
  _id?: string;
  senderType: SenderType;
  chatId: string;
  courseId: string;
};

export type ChatContainerProps = {
  messages: Message[];
  userId: string;
  token: string;
  chatId: string;
  username: string;
  isLoading?: boolean;
};

export type Chat = {
  courseId: string;
  createdAt: string;
  messages: Message[];
  updatedAt: string;
  userId: string;
  _id: string;
  courseName: string;
};

export interface ChatMessageProps {
  answer?: string;
  question?: string;
  userId: string;
  _id: string;
  chatId: string;
  token: string;
  username: string;
  index: number;
}

export interface AIMessageProps {
  message: string;
}

export const messages: Message[] = [
  {
    question: "What are the rate my professor ratings for this course?",
    answer: "For the professor [professor name], the rating is 4.5/5.",
    userId: "human1",
    senderType: SenderType.Human,
    chatId: "chat1",
    courseId: "course1",
  },
  {
    question: "What are the prerequisites for the course?",
    answer:
      "For this class, with Dr. Dietterich, the rate my professor rating is 4.5/5.",
    userId: "ai1",
    senderType: SenderType.AI,
    chatId: "chat1",
    courseId: "course1",
  },
  {
    question: "What is the late policy like?",
    answer:
      "For CS 344, late assignments will be penalized 10% per day. After 2 days, the assignment will not be accepted.",
    userId: "human1",
    senderType: SenderType.Human,
    chatId: "chat1",
    courseId: "course1",
  },
  {
    question: "What is the late policy like?",
    answer:
      "For CS 344, late assignments will be penalized 10% per day. After 2 days, the assignment will not be accepted.",
    userId: "human1",
    senderType: SenderType.AI,
    chatId: "chat1",
    courseId: "course1",
  },
];

function generateRandomId() {
  return Math.floor(Math.random() * 1000000); // Adjust as needed
}

export const coursesMap = [
  { id: generateRandomId(), course_name: "Analysis of Algorithms" },
  { id: generateRandomId(), course_name: "Intro to Theory of Computation" },
  { id: generateRandomId(), course_name: "Introduction to Security" },
  {
    id: generateRandomId(),
    course_name: "Computer Architecture & Assembly Langugage",
  },
  { id: generateRandomId(), course_name: "Data Structures" },
  { id: generateRandomId(), course_name: "Web Development" },
  { id: generateRandomId(), course_name: "Discrete Structures in CS" },
  { id: generateRandomId(), course_name: "Intro to Computer Networks" },
  { id: generateRandomId(), course_name: "Software Engineering II" },
  {
    id: generateRandomId(),
    course_name: "Senior Software Engineering Project",
  },
  { id: generateRandomId(), course_name: "Software Engineering I" },
  { id: generateRandomId(), course_name: "Defense Against the Dark Arts" },
  { id: generateRandomId(), course_name: "Introduction to Computer Science I" },
  { id: generateRandomId(), course_name: "Introduction to Databases" },
  { id: generateRandomId(), course_name: "Open Source Software" },
  { id: generateRandomId(), course_name: "Operating Systems II" },
  { id: generateRandomId(), course_name: "Cloud Application Development" },
  { id: generateRandomId(), course_name: "Online Capstone Project" },
  {
    id: generateRandomId(),
    course_name: "Social & Ethical Issues in Computer Science",
  },
  { id: generateRandomId(), course_name: "Programming Language Fundamentals" },
  {
    id: generateRandomId(),
    course_name: "Introduction to Computer Science II",
  },
  { id: generateRandomId(), course_name: "Intro to Computer Graphics" },
  { id: generateRandomId(), course_name: "Intro to Usability Engineering" },
];

export const themes = [
  "light",
  "dark",
  "cupcake",
  "bumblebee",
  "emerald",
  "corporate",
  "synthwave",
  "retro",
  "cyberpunk",
  "valentine",
  "halloween",
  "garden",
  "forest",
  "aqua",
  "lofi",
  "pastel",
  "fantasy",
  "wireframe",
  "black",
  "luxury",
  "dracula",
  "cmyk",
  "autumn",
  "business",
  "acid",
  "lemonade",
  "night",
  "coffee",
  "winter",
  "dim",
  "nord",
  "sunset",
];
