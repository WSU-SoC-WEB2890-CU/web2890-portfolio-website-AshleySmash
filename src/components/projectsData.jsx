import thingAmajiggersImg from "../assets/WEB2620_ThingAmajiggers_Home.jpeg";
import stylesConfImg from "../assets/WEB1400_StyleConfrence.jpeg";
import rPSImg from "../assets/WEB1430_RPSGame.jpeg";
import tortugaImg from "../assets/WEB2500_Tortuga_Lobby.jpeg";
import culinaryImg from "../assets/WEB3350_CulinaryConnect.jpeg";
import carDealImg from "../assets/WEB2890_CarDeal.jpeg";
const projectsData = {
  thingamajiggers: {
    id: "thingamajiggers",
    title: "ThingAmajiggers",
    class: "Web 2620",
    image: thingAmajiggersImg,
    overview:
      "An e-commerce platform designed to showcase and sell original music, sewing projects, and art.",
    role: "I handled both the front-end design and functionality, focusing on responsiveness and a user-friendly interface.",
    technologies: ["HTML5", "JavaScript", "SCSS"],
    features: [
      "Dynamic Content: Product cards showcasing various crafts, sewing projects, and music with images, descriptions, and links.",
      "Request/Order Form: An interactive form where users can request custom products.",
      "Media Integration: Embedded YouTube videos and music files to highlight products.",
    ],
  },
  culinaryconnect: {
    id: "culinaryconnect",
    title: "CulinaryConnect",
    class: "Web 3350",
    image: culinaryImg,
    overview:
      "A React-based platform designed to unite cooking enthusiasts, providing a space for recipes and community engagement.",
    role: "I was responsible for both the front-end and back-end development, focusing on reusable React components, API integration with Firebase, and a responsive, mobile-first design.",
    technologies: ["React", "Firebase", "CSS", "HTML"],
    features: [
      "Recipe Submission: Users can submit, edit, and delete their recipes, complete with images and instructions.",
      "Community Interaction: Features such as comments, likes, and ratings foster community engagement.",
      "Personalized Feeds: Tailored recipe suggestions based on user preferences.",
    ],
  },
  tortugalobby: {
    id: "tortugalobby",
    title: "Tortuga Lobby",
    class: "Web 2500",
    image: tortugaImg,
    overview:
      "A community-driven website for TMNT fans, serving as a central hub for news, fan art, and merchandise.",
    role: "I was responsible for the full front-end development of the site, including its layout, styling, and interactive features.",
    technologies: ["HTML5", "SCSS", "JavaScript"],
    features: [
      "Fan Content: Includes a variety of TMNT-related projects like crafts, merchandise, and news updates.",
      "User Registration: Fans can register, create profiles, and interact with the content.",
      "Search and Filter: A dynamic search functionality for filtering content and merchandise.",
    ],
  },
  stylesconference: {
    id: "stylesconference",
    title: "Styles Conference",
    class: "Web 1400",
    image: stylesConfImg,
    overview:
      "A website designed to promote a fictional web design and development conference.",
    role: "I transformed raw HTML content into a cohesive, modern design using only CSS for layout, typography, and color scheme.",
    technologies: ["HTML", "CSS"],
    features: [
      "Responsive Design: Ensures optimal viewing on all devices.",
      "Speaker Profiles: Detailed bios of world-class speakers.",
      "Schedule and Venue: Provides a clear view of the event's agenda and location information.",
    ],
  },
  rockpaperscissors: {
    id: "rockpaperscissors",
    title: "Rock Paper Scissors App",
    class: "Web 1430",
    image: rPSImg,
    overview:
      "A simple JavaScript game that allows users to play Rock, Paper, Scissors against the computer.",
    role: "I was responsible for the entire application, focusing on building the game logic using JavaScript and styling it with minimal CSS.",
    technologies: ["JavaScript", "CSS"],
    features: [
      "Interactive Gameplay: Allows users to play against the computer, with feedback on each round.",
      "Simple UI: A clean, minimalist design for ease of use.",
      "Responsive Layout: Works across different screen sizes.",
    ],
  },
  cardeal: {
    id: "cardeal",
    title: "Cardeal",
    class: "Web 2890",
    image: carDealImg,
    overview:
      "A one-page website for a fictional company that offers cash for cars, focusing on customizing Bootstrap components.",
    role: "I designed and developed the site using SASS to customize Bootstrap and create a distinct layout.",
    technologies: ["Bootstrap 5", "SCSS", "HTML5"],
    features: [
      "Custom Design: Customized Bootstrap to give the website a unique look and feel.",
      "Responsive Forms: Includes a form for users to get a quote for selling their car.",
      "Testimonials & Carousel: Displays customer testimonials in a carousel format.",
    ],
  },
};

export default projectsData;
