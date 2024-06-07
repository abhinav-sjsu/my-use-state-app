import React,{useState} from 'react'

function MyComponent() {
    const [counter,setCounter] = useState(0);
    const [inputValue,setInputValue] = useState("Abhinav");

    const increment = () => {
        //counter = counter + 1; // This will not work
        setCounter(counter + 1);
    };

    const onChange = () => {
        const newValue = event.target.value;
        setInputValue(newValue);
    }

  return (
    <div>
        {counter}
        <button onClick={increment}>Increment</button><br/>
        <input placeholder='Enter Something...' onChange={onChange}></input>
        {inputValue}
        
    </div>
  );
}

export default MyComponent