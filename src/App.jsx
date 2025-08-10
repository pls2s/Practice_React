//is a component
import { useState } from "react";
function App() {
  const name = "Peerawoot";
  const [age, setAge] = useState(30);

  function addAge() {
    setAge(age + 1);
    if (age >= 60) {
      alert("อายุเกินไป");
    }
  }

  function deleteAge() {
    setAge(age - 1);
    if (age <= 10) {
      alert("อายุต่ำเกินไป");
    }
  }

 
  return (
    //ถ้ามี html มากว่า 1 คำสั่งต้องมี <> </> , return คือการส่ง html ไปทำงานที่ main.jsx
    <>
      <h1>สวัสดีครับผม :{name}</h1>
      <p>อายุ :{age} </p>
      <button onClick={() => addAge()}>add age</button>
      <button onClick={() => deleteAge()}>delete age</button>
      <button onClick={() => setAge(30)}>reset</button>
    </>
  );
} //คำสั่ง js จะเขียนอยู่ใน {}

export default App;
