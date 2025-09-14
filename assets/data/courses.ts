const reactIcon = require("@/assets/images/react.png");
const cssIcon = require("@/assets/images/css-3.png");
const cppIcon = require("@/assets/images/cpp.png");
const nodeIcon = require("@/assets/images/node.png");

const courses = [
  { id: 1, name: "Mastering the Multiverse of React", complete: 60 , icon: reactIcon },
  { id: 2, name: "Tailwind Wizardry: Styling at Lightspeed", complete: 30, icon: cssIcon },
  { id: 3, name: "C++ Chronicles: Code of Legends", complete: 80, icon: cppIcon },
  { id: 4, name: "React Native: Building Worlds on Mobile", complete: 50, icon: reactIcon },
  { id: 5, name: "Node Odyssey: Journey to the Backend", complete: 20, icon: nodeIcon },
  { id: 6, name: "AI Foundations: Machine Learning Demystified", complete: 40, icon: require("@/assets/images/ai.png") },
  { id: 7, name: "Cybersecurity Essentials: Defend the Digital Realm", complete: 10, icon: require("@/assets/images/cybersecurity.png") },
  { id: 8, name: "Cloud Computing: Navigating the Sky", complete: 55, icon: require("@/assets/images/cloud.png") },
]

export default courses;