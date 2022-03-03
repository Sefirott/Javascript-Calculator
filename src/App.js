import React, { useState } from "react";



   function App() {
  
  const [digit, setDigit] = useState("0");
  const [digit2, setDigit2] = useState("")

  const handlePoint = () => {
    if(digit.includes(".") == false && digit.length < 23 && regex.test(digit) == false) { 
    setDigit(digit.concat("."))
    }
  else if(digit2.includes(".") == false && digit2.length < 23 && regex.test(digit) && digit2.length > 0) {
      setDigit2(digit2.concat("."))
    }
  }
  
  let regex = /([+x/-])/;
  
  const handleZero = () => {
    if(digit != "0" && digit.length < 23 && regex.test(digit) == false) {
      setDigit(digit.concat("0"))
    }
   else if(regex.test(digit) && digit2.length < 23) {
      setDigit2(digit2.concat("0"))
    }
  }
  
  const handleOne = () => {
    if(digit == "0") {
      setDigit("1")
    }
   else if(digit.length < 23 && regex.test(digit) == false) {
      setDigit(digit.concat("1"));
    }
    else if(regex.test(digit) && digit2 == "0") {
      setDigit2("1")
    }
    else if(regex.test(digit) && digit2.length < 23) {
     setDigit2(digit2.concat("1")) 
    }
  }
  
  const handleTwo = () => {
    if(digit == "0") {
      setDigit("2");
    }
    else if(digit.length < 23 && regex.test(digit) == false) {
      setDigit(digit.concat("2"))
    }
    else if(regex.test(digit) && digit2 == "0") {
      setDigit2("2")
    }
    else if(regex.test(digit) && digit2.length < 23) {
     setDigit2(digit2.concat("2")) 
    }
    
  }
  
  const handleThree = () => {
    if(digit == "0") {
      setDigit("3");
    }
    else if(digit.length < 23 && regex.test(digit) == false) {
      setDigit(digit.concat("3"))
    }
     else if(regex.test(digit) && digit2 == "0") {
      setDigit2("3")
    }
    else if(regex.test(digit) && digit2.length < 23) {
     setDigit2(digit2.concat("3")) 
    }
  }
  
    const handleFour = () => {
    if(digit == "0") {
      setDigit("4");
    }
    else if(digit.length < 23 && regex.test(digit) == false) {
      setDigit(digit.concat("4"))
    }
       else if(regex.test(digit) && digit2 == "0") {
      setDigit2("4")
    }
    else if(regex.test(digit) && digit2.length < 23) {
     setDigit2(digit2.concat("4")) 
    }
  }
  
   const handleFive = () => {
    if(digit == "0") {
      setDigit("5");
    }
    else if(digit.length < 23 && regex.test(digit) == false) {
      setDigit(digit.concat("5"))
    }
       else if(regex.test(digit) && digit2 == "0") {
      setDigit2("5")
    }
    else if(regex.test(digit) && digit2.length < 23) {
     setDigit2(digit2.concat("5")) 
    }
  }
    
   
    const handleSix = () => {
    if(digit == "0") {
      setDigit("6");
    }
    else if(digit.length < 23 && regex.test(digit) == false) {
      setDigit(digit.concat("6"))
    }
        else if(regex.test(digit) && digit2 == "0") {
      setDigit2("6")
    }
    else if(regex.test(digit) && digit2.length < 23) {
     setDigit2(digit2.concat("6")) 
    }
  } 
    
    const handleSeven = () => {
    if(digit == "0") {
      setDigit("7");
    }
    else if(digit.length < 23 && regex.test(digit) == false) {
      setDigit(digit.concat("7"))
    }
        else if(regex.test(digit) && digit2 == "0") {
      setDigit2("7")
    }
    else if(regex.test(digit) && digit2.length < 23) {
     setDigit2(digit2.concat("7")) 
    }
  }  
    
    const handleEight = () => {
    if(digit == "0") {
      setDigit("8");
    }
    else if(digit.length < 23 && regex.test(digit) == false) {
      setDigit(digit.concat("8"))
    }
        else if(regex.test(digit) && digit2 == "0") {
      setDigit2("8")
    }
    else if(regex.test(digit) && digit2.length < 23) {
     setDigit2(digit2.concat("8")) 
    }
  }  
    
    const handleNine = () => {
    if(digit == "0") {
      setDigit("9");
    }
    else if(digit.length < 23 && regex.test(digit) == false) {
      setDigit(digit.concat("9"))
    }
        else if(regex.test(digit) && digit2 == "0") {
      setDigit2("9")
    }
    else if(regex.test(digit) && digit2.length < 23) {
     setDigit2(digit2.concat("9")) 
    }
  }
    
  const handlePlus = () => {
    if(digit != "0" && regex.test(digit) == false) {
     setDigit(digit.concat("+"));
    }
  }
  
    const handleX = () => {
       if(digit != "0" && regex.test(digit) == false) {
     setDigit(digit.concat("x"));
    }
      
    }
    const handleMin = () => {
       if(digit != "0" && regex.test(digit) == false) {
     setDigit(digit.concat("-"));
    }
      
    }
    const handleDiv = () => {
       if(digit != "0" && regex.test(digit) == false) {
     setDigit(digit.concat("/"));
    }
    }
    
    const handleEquation = () => {
      let newDigit = digit.substr(0, digit.length - 1); 
      let indicator = digit.slice(-1);
      
      if(indicator == "+") {
        
     let result = Number(newDigit) + Number(digit2); 
        
        setDigit2("");
        
       return setDigit(result);
      }
      
     else if(indicator == "-") {
       let result = Number(newDigit) - Number(digit2);
       
        setDigit2("");
        
       return setDigit(result);
     }
      else if(indicator == "/") {
        let result = Number(newDigit) / Number(digit2);
        
         setDigit2("");
        
       return setDigit(result);
      }
      else if(indicator == "x") {
        let result = Number(newDigit) * Number(digit2);
         
        setDigit2("");
        
       return setDigit(result);
      }
      
      
      
    }
    
    
    
    
    
    
  return (
  <> 
       
      <section className="container">
        
        <button className="button" onClick={() => handleZero() }>0</button>
        
        <button className="button" onClick={() => handlePoint()}>
          .</button>
        <button className="button btn-primary" onClick={() => handleEquation()}>=</button>
        <button className="button" onClick={() => handleOne()}>1</button>
        <button className="button" onClick={() => handleTwo()}>2</button>
        <button className="button" onClick={() => handleThree()}>3</button>
        <button className="button"  onClick={() => handleFour()}>4</button>
        <button className="button"  onClick={() => handleFive()}>5</button>
        <button className="button"  onClick={() => handleSix()}>6</button>
        <button className="button"  onClick={() => handleSeven()}>7</button>
        <button className="button"  onClick={() => handleEight()}>8</button>
        <button className="button"  onClick={() => handleNine()}>9</button>
        <button className="button" onClick={() => handleMin()}>-</button>
        <button className="button" onClick={() => handleDiv()}>/</button>
        <button className="button" onClick={() => handleX()}>x</button>
        <button className="button" onClick={() => handlePlus()}>+</button>
        <button className="btn-danger ac" onClick={() => {setDigit("0"); setDigit2("")} }>AC</button>
        
        
   <div className="display">{digit}{digit2}</div>
      
      </section>
  </>
 
  );
}

export default App;
