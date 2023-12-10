// import g10 from "../assets/g10.svg";
import { Helmet } from "react-helmet";
import {
  About,
  Features,
  Footer,
  Hero,
  UIPreview,
} from "../components/landing";
import Navbar from "../components/navbar";

export function HomeHelmet() {
  return (
    <>
      <Helmet>
        <title>BeavsAI - The AI Assistant for OSU Students</title>
        <meta
          name="title"
          content="BeavsAI - The AI Assistant for OSU Students"
        />
        <meta
          name="description"
          content="With BeavsAI, unlock the power of interactive education by adding your courses and initiating conversation with your very own AI assistant."
        />
        <meta property="og:type" content="website" />
        <meta
          property="og:title"
          content="BeavsAI - The AI Assistant for OSU Students"
        />
        <meta
          property="og:description"
          content="With BeavsAI, unlock the power of interactive education by adding your courses and initiating conversation with your very own AI assistant."
        />

        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="google-site-verification" content="g10" />

        <meta
          name="keywords"
          content="BeavsAI, Beavs, AI, OSU, Oregon State University, Chat, Chatbot, Course, Courses, Class, Classes, Vector, Store, Vector Store, Assistant, AI Assistant, Professor, Professors, Rate My Professor, Rate My Professors, RMP, Oregon State University App Development Club, App Dev Club, App Club, App Development Club, OSU, Go Beavs, Artificial Intelligence, ChatGPT, Educational Technology, Learning App, Conversation AI, Interactive Learning, Technology, OSU Technology, College, University, Student, Students, Education, Learning Experience"
        />
        <meta name="robots" content="index, follow" />
        <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
        <meta name="language" content="English" />
        <meta name="revisit-after" content="3 days" />
        <meta
          name="author"
          content="App Development Club at Oregon State University"
        />
      </Helmet>
    </>
  );
}

export default function Home() {
  return (
    <div className="bg-gray-100 dark:bg-gray-950 ">
      <HomeHelmet />
      <Navbar />
      <span id="home" />
      <Hero />
      <span id="features" />
      <UIPreview />
      <Features />
      <span id="about" />
      <About />
      <Footer />
    </div>
  );
}
