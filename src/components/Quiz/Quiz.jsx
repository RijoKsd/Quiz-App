import "./Quiz.css";
const Quiz = () => {
  return (
    <div className="container">
      <h1>Quiz App</h1>
      <hr />
      <h2>
        1. How do you call a function named <code>myFunction</code>?
      </h2>
      <ul>
        <li>myFunction() </li>
        <li>call myFunction()</li>
        <li>call function myFunction()</li>
        <li>null</li>
      </ul>
      <button>Next</button>
      <div className="index">1 of 5 question</div>
    </div>
  );
};

export default Quiz;
