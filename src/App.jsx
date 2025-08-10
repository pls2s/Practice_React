//is a component
import { useState } from "react";
import Header from './components/Header'; //import component 'Header from "./components/Header";';
import PersonList from './components/PersonList';
import './App.css'
function App() {
  const name = "Peerawoot";
  const [age, setAge] = useState(30); //ตัวแปรสถานะ เปลี่ยนได้ตลอดเวลาที่ใ้ชงาน


  
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
    <div className="App">
      <Header title = "My pactice props" />{/*เรียกใช้ component และส่ง props title ไปทำงาน*/}
        <main>

          <h1 className="title">สวัสดีครับผม :{name}</h1>
          <p>อายุ :{age} </p>
          <button onClick={() => addAge()}>add age</button>
          <button onClick={() => deleteAge()}>delete age</button>
          <button onClick={() => setAge(30)}>reset</button>
        
        </main>
      <PersonList />{/*เรียกใช้ component*/}
    </div>
  );
} //คำสั่ง js จะเขียนอยู่ใน {}

export default App;
