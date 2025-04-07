import { useState } from "react";
import Header from "./components/Header/Header.jsx";
import Results from "./components/Results/Results.jsx";
import UserData from "./components/UserData/UserData.jsx";

function App() {
  const [userData, setUserData] = useState({
    initialInvestment: 10000,
    annualInvestment: 1200,
    expectedReturn: 6,
    duration: 10,
  });
  
  const inputIsValid = userData.duration >= 1;

  function handleChange(inputIdentifier, newValue) {
    setUserData((prevUserData) => {
      return {
        ...prevUserData,
        [inputIdentifier]: +newValue,
      };
    });
  }



  return (
    <>
      <Header />
      <UserData userData={userData} onChange = {handleChange} />
      {!inputIsValid && <p className="center">Invalid input. Please enter a duration of at least 1 year.</p>}
      {inputIsValid &&<Results input = {userData}/>}
    </>
  );
}

export default App;
