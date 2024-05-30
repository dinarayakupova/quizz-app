

const questions = [
    {
      title: "What is React?",
      variants: ["Library", "Framework", "Application"],
      correct: 0,
    },
    {
      title: "What is component? ",
      variants: [
        "Application",
        "Part of the application or page",
        "It can header or footer",
      ],
      correct: 1,
    },
    {
      title: "What is JSX?",
      variants: [
        "This is just HTML",
        "It is a function",
        "JSX is a syntax extension for JS that lets you write HTML-like markup inside a JS file",
      ],
      correct: 2,
    },
  
    {
      title: "What is the purpose of the 'key' prop in React? ?",
      variants: [
        "It uniquely identifies a component in an array of components",
        "It determines the visual styling of a component",
        "It specifies the route for navigation within a React application",
      ],
      correct: 0,
    },
  
    {
      title:
        "Which method is used to update the state of a class component in React?",
      variants: ["this.updateState()", "this.setState() ", "this.modifyState()"],
      correct: 1,
    },
  ];

  export default questions;