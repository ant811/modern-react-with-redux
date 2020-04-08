import React from 'react';
import ReactDOM from 'react-dom';

// function getButtonText() {
//   return "Click on me!";
// }

const App = (props) => {
  const buttonText = {text: "Click me!"};
  const style = {
    backgroundColor: 'blue', 
    color: 'white'
  };
  const labelText = "Enter name:";
  return (
    <div>
      <label className="label" htmlFor="name">{labelText}</label>
      <input id="name" type="text" />
      <button style={style}>
        {/* Produces error, cannot display object as text
        {buttonText} */}
        {buttonText.text}

        {/* {getButtonText()} */}
      </button>
    </div>
  );
};

ReactDOM.render(<App />, document.querySelector('#root'));