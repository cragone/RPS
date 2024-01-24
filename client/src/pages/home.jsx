import React from 'react';
// Rock Paper Scissors component
const Home = () => {
  // State to track user choice and computer choice
  const [userChoice, setUserChoice] = useState(null);
  const [computerChoice, setComputerChoice] = useState(null);

  // Array of possible choices
  const choices = ['rock', 'paper', 'scissors'];

  // Function to handle user choice
  const handleUserChoice = (choice) => {
    // Set user choice
    setUserChoice(choice);
    
    // Generate random computer choice
    const randomIndex = Math.floor(Math.random() * choices.length);
    const computerChoice = choices[randomIndex];
    setComputerChoice(computerChoice);
  };

  // Render the component
  return (
    <div>
      <h1>Rock Paper Scissors</h1>
      
      <div>
        <h2>Your Choice: {userChoice}</h2>
        <h2>Computer's Choice: {computerChoice}</h2>
      </div>
      
      <div>
        <h3>Choose Your Move:</h3>
        {choices.map((choice) => (
          <button key={choice} onClick={() => handleUserChoice(choice)}>
            {choice}
          </button>
        ))}
      </div>
    </div>
  );
};

export default Home;
