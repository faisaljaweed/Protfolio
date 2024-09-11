import basiccalculator from "../Images/protfolio_img/Basic-Calculator.png";
import customwebsite from "../Images/protfolio_img/Custom_Website.png";
import expensetracker from "../Images/protfolio_img/Expense_Tracker.png";
import fakeapi from "../Images/protfolio_img/Fake-Api.png";
import lms from "../Images/protfolio_img/LMS.png";
import landingpage from "../Images/protfolio_img/Landing-Page.png";
import notificationrtk from "../Images/protfolio_img/Notificataion_rtk.png";
import pizza from "../Images/protfolio_img/Pizza.png";
import pizzeria from "../Images/protfolio_img/Pizzeria.png";
import quizapplication from "../Images/protfolio_img/Quiz_Application.png";
import stopwatch from "../Images/protfolio_img/Stop-Watch.png";
import todo from "../Images/protfolio_img/Todo-App.png";
import saylaniwebsite from "../Images/protfolio_img/basic Saylani Website.png";
import eatandsplit from "../Images/protfolio_img/eat-n-split.png";
import nuno from "../Images/protfolio_img/nuno.png";
import travelList from "../Images/protfolio_img/travel-list.png";

const Data = [
  {
    id: "1",
    image: { basiccalculator },
    tittle: "Basic Calculator",
    desc: "A basic calculator is a simple tool that performs fundamental arithmetic operations such as addition, subtraction, multiplication, and division.",
    deployUrl: "https://basic-calculator-liart.vercel.app/",
    githubUrl: "https://github.com/faisaljaweed/BasicCalculator",
  },
  {
    id: "2",
    image: { customwebsite },
    tittle: "Custom Website",
    desc: "A custom website is a tailored online platform designed specifically to meet the unique needs and preferences of a client or business.",
    deployUrl: "https://coustom-websites.vercel.app/",
    githubUrl: "https://github.com/faisaljaweed/CoustomWebsites",
  },
  {
    id: "3",
    image: { expensetracker },
    tittle: "Expense Tracker",
    desc: "An expense tracker helps monitor and manage personal or business expenditures to maintain a budget and improve financial control.",
    deployUrl: "https://epense-trackerreactjs.vercel.app/",
    githubUrl: "https://github.com/faisaljaweed/Epense-Trackerreactjs",
  },
  {
    id: "4",
    image: { fakeapi },
    tittle: "Ecommerce Fake APi",
    desc: "A mock API for eCommerce applications that simulates real-world product and transaction data for testing and development purposes.",
    deployUrl: "https://faisaljaweed.github.io/fakeecommerceapi/home",
    githubUrl: "https://github.com/faisaljaweed/fakeecommerceapi",
  },
  {
    id: "5",
    image: { lms },
    tittle: "Learning Management System Software",
    desc: "A comprehensive software solution for managing educational courses, student information, and teaching resources in an organized and efficient manner.",
    deployUrl: "https://faisaljaweed.github.io/LMS-React-With-Firebase/",
    githubUrl: "https://github.com/faisaljaweed/LMS-React-With-Firebase",
  },
  {
    id: "6",
    image: { landingpage },
    tittle: "Landing Page",
    desc: "A visually appealing web page designed to capture visitor interest and drive conversions for a specific product, service, or campaign.",
    deployUrl: "https://faisaljaweed.github.io/LandingPageAssignment-1/",
    githubUrl: "https://github.com/faisaljaweed/LandingPageAssignment-1",
  },
  {
    id: "7",
    image: { notificationrtk },
    tittle: "Notification RTK",
    desc: "A notification management application built with Redux Toolkit for real-time updates and centralized state management.",
    deployUrl: "https://notification-rtk.vercel.app/",
    githubUrl: "https://github.com/faisaljaweed/Notification_rtk",
  },
  {
    id: "8",
    image: { pizza },
    tittle: "Pizza",
    desc: "A static pizza application showcasing pizza options with fixed content and styles.",
    deployUrl: "https://pizza-project-five.vercel.app/",
    githubUrl: "https://github.com/faisaljaweed/PizzaProject",
  },
  {
    id: "9",
    image: { pizzeria },
    tittle: "Pizzeria",
    desc: "A fully dynamic pizzeria application with Redux integration and a shopping cart to manage and display order amounts.",
    deployUrl: "https://pizzeria-green.vercel.app/",
    githubUrl: "https://github.com/faisaljaweed/Pizzeria",
  },
  {
    id: "10",
    image: { quizapplication },
    tittle: "Quiz Application",
    desc: "An interactive quiz application for creating, taking, and tracking quizzes and scores.",
    deployUrl: "https://faisaljaweed.github.io/Quiz-App-React-and-TypeScript/",
    githubUrl: "https://github.com/faisaljaweed/Quiz-App-React-and-TypeScript",
  },
  {
    id: "11",
    image: { stopwatch },
    tittle: "Stop Watch",
    desc: "A simple and intuitive stopwatch application for timing and tracking intervals.",
    deployUrl: "https://stop-watch-umber-eta.vercel.app/",
    githubUrl: "https://github.com/faisaljaweed/StopWatch",
  },
  {
    id: "12",
    image: { todo },
    tittle: "Todo App",
    desc: "A task management application for creating, updating, and organizing to-do lists efficiently.",
    deployUrl: "https://faisaljaweed.github.io/Todo-App-in-Typescript/",
    githubUrl: "https://github.com/faisaljaweed/Todo-App-in-Typescript",
  },
  {
    id: "13",
    image: { saylaniwebsite },
    tittle: "Saylani Website",
    desc: "A static website for Saylani offering an overview of services and information without dynamic content.",
    deployUrl: "https://saylani-website-murex.vercel.app/",
    githubUrl: "https://github.com/faisaljaweed/saylani-website",
  },
  {
    id: "14",
    image: { eatandsplit },
    tittle: "Eat and Split Bill",
    desc: "An application for dining groups to easily split bills and manage shared expenses.",
    deployUrl: "https://master--statuesque-cobbler-ed5a73.netlify.app/",
    githubUrl:
      "https://github.com/faisaljaweed/eat-and-split-bill-individual-components",
  },
  {
    id: "15",
    image: { nuno },
    tittle: "Nuno Website",
    desc: "A visually stunning static website with a beautifully designed theme.",
    deployUrl: "https://nuno-nine.vercel.app/",
    githubUrl: "https://github.com/faisaljaweed/NunoWebsites",
  },
  {
    id: "16",
    image: { travelList },
    tittle: "Travel List ",
    desc: "A beautifully designed application for organizing and managing your travel plans and destinations.",
    deployUrl: "https://travel-list-smoky-one.vercel.app/",
    githubUrl: "https://github.com/faisaljaweed/travel-list",
  },
];

export default Data;
