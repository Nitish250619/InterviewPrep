// src/quizData.js
export const quizData = {
    HTML: {
      Beginner: [
        {
          title: 'Quiz 1',
          questions: [
            { question: 'What does HTML stand for?', options: ['Hyper Text Markup Language', 'Hyperlinks and Text Markup Language', 'Home Tool Markup Language', 'Hyper Test Markup Language'], answer: 'Hyper Text Markup Language' },
            { question: 'Which HTML tag is used for creating an unordered list?', options: ['<ul>', '<li>', '<ol>', '<list>'], answer: '<ul>' },
            { question: 'What is the correct HTML element for inserting a line break?', options: ['<break>', '<lb>', '<br>', '<newline>'], answer: '<br>' },
            { question: 'What does CSS stand for?', options: ['Cascading Style Sheets', 'Creative Style Sheets', 'Computer Style Sheets', 'Colorful Style Sheets'], answer: 'Cascading Style Sheets' },
            { question: 'Which CSS property is used to change the text color of an element?', options: ['color', 'text-color', 'font-color', 'background-color'], answer: 'color' },
            { question: 'Which HTML tag is used to define an image?', options: ['<img>', '<image>', '<picture>', '<image-source>'], answer: '<img>' },
            { question: 'What is the correct HTML for making a checkbox?', options: ['<input type="checkbox">', '<checkbox>', '<input type="check">', '<check>'], answer: '<input type="checkbox">' },
            { question: 'Which symbol is used to indicate an ID selector in CSS?', options: ['#', '.', '&', '$'], answer: '#' },
            // Add more questions here
          ],
        },
        {
          title: 'Quiz 2',
          questions: [
            { question: 'What is the correct HTML element for the largest heading?', options: ['<heading>', '<h6>', '<h1>'], answer: '<h1>' },
            // Add more questions here
          ],
        },
        // Add more quizzes here
      ],
      Intermediate: [
        // Add Intermediate quizzes here
      ],
      Advanced: [
        // Add Advanced quizzes here
      ],
    },
    CSS: {
      Beginner: [
        // Add CSS Beginner quizzes here
      ],
      Intermediate: [
        // Add CSS Intermediate quizzes here
      ],
      Advanced: [
        // Add CSS Advanced quizzes here
      ],
    },
    JavaScript: {
      Beginner: [
        // Add JavaScript Beginner quizzes here
      ],
      Intermediate: [
        // Add JavaScript Intermediate quizzes here
      ],
      Advanced: [
        // Add JavaScript Advanced quizzes here
      ],
    },
    React: {
      Beginner: [
        {
            title: 'Quiz 1',
            questions: [
                { question: 'What does JSX stand for?', options: ['JavaScript XML', 'Java Syntax Extension', 'JavaScript Extension'], answer: 'JavaScript XML' },
                { question: 'What function is used in React to render elements into the DOM?', options: ['ReactDOM.render()', 'React.render()', 'renderDOM()'], answer: 'ReactDOM.render()' },
                { question: 'Which of the following is a core concept of React?', options: ['Component-based architecture', 'MVC pattern', 'Functional programming'], answer: 'Component-based architecture' },
                { question: 'In React, where should you make data requests?', options: ['ComponentDidMount()', 'ComponentDidUpdate()', 'ComponentWillUnmount()'], answer: 'ComponentDidMount()' },
                { question: 'What is the purpose of useState() hook in React?', options: ['To add state to functional components', 'To handle side effects', 'To render JSX elements'], answer: 'To add state to functional components' },
                { question: 'What is the purpose of useEffect() hook in React?', options: ['To perform side effects in functional components', 'To handle form submissions', 'To update the DOM directly'], answer: 'To perform side effects in functional components' },
                { question: 'Which method is used to update the state in React components?', options: ['setState()', 'updateState()', 'changeState()'], answer: 'setState()' },
                { question: 'What is a prop in React?', options: ['A special keyword for defining types', 'An immutable object passed from parent to child', 'A reserved word for defining state'], answer: 'An immutable object passed from parent to child' },
                { question: 'What is a React component?', options: ['A JavaScript function or class that returns JSX', 'An HTML element', 'A predefined UI widget'], answer: 'A JavaScript function or class that returns JSX' },
                { question: 'What is the purpose of keys in React lists?', options: ['To uniquely identify elements', 'To style list items', 'To define list order'], answer: 'To uniquely identify elements' },
                { question: 'How can you conditionally render components in React?', options: ['Using the ternary operator', 'Using if statements', 'Using the switch statement'], answer: 'Using the ternary operator' },
                { question: 'Which method is called when a component is removed from the DOM?', options: ['componentWillUnmount()', 'componentDidUnmount()', 'removeComponent()'], answer: 'componentWillUnmount()' },
                { question: 'What is the purpose of refs in React?', options: ['To reference DOM elements or React components', 'To handle events', 'To define component structure'], answer: 'To reference DOM elements or React components' },
                { question: 'What is the role of the virtual DOM in React?', options: ['To improve performance by minimizing DOM updates', 'To create 3D visualizations', 'To manage state changes'], answer: 'To improve performance by minimizing DOM updates' },
                { question: 'What is the context API used for in React?', options: ['To share state between components without passing props', 'To manage routing in a React application', 'To define global CSS styles'], answer: 'To share state between components without passing props' },
                { question: 'Which lifecycle method is invoked immediately after updating occurs?', options: ['componentDidUpdate()', 'componentDidMount()', 'componentWillUpdate()'], answer: 'componentDidUpdate()' },
                { question: 'What is the purpose of the useMemo() hook in React?', options: ['To memoize expensive computations', 'To create reusable components', 'To manage side effects'], answer: 'To memoize expensive computations' },
                { question: 'What is the purpose of React.Fragment?', options: ['To group multiple elements without adding extra nodes to the DOM', 'To create reusable CSS styles', 'To define component structure'], answer: 'To group multiple elements without adding extra nodes to the DOM' },
                { question: 'What is the purpose of defaultProps in React?', options: ['To provide default values for props', 'To define default component styles', 'To handle form submissions'], answer: 'To provide default values for props' },
                { question: 'What is the purpose of React Router?', options: ['To manage navigation in a React application', 'To handle AJAX requests', 'To define component structure'], answer: 'To manage navigation in a React application' },
              ]
              
          },
      ],
      Intermediate: [
        // Add React Intermediate quizzes here
      ],
      Advanced: [
        // Add React Advanced quizzes here
      ],
    },
  };
  