//is a component
import { useState } from "react";
import Header from "./components/Header"; //import component 'Header from "./components/Header";';
import PersonList from "./components/PersonList";
import "./App.css";
import Addform from "./components/Addform";
import {  useEffect } from "react";

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
  const [data, _setData] = useState([
    { id: 1, name: "Peerawoot1", gender: "male" },
    { id: 2, name: "Peerawoot2", gender: "female" },
    { id: 3, name: "Peerawoot3", gender: "male" },
    { id: 4, name: "Peerawoot4", gender: "female" },
    { id: 5, name: "Peerawoot5", gender: "male" },
    { id: 6, name: "Peerawoot6", gender: "female" },
  ]);
  
  useEffect(() => {
    console.log("useEffect used"); //useeffect จะทำงานตอน render compnent ที่เรียก
  },[data]); //[] จะทํางานเมื่อเรียกเป็นครั้งแรก ครั้งเดียว   ,  [data] จะทํางานเมื่อ data มีการเปลี่ยนแปลง




  function delete_user(id){
    const new_data = data.filter((user) => user.id !== id); //ถ้าไม่ใช่ id ที่ส่งมา ให้เอามาสร้าง data ใหม่
    _setData(new_data);
  }

  return (
    //ถ้ามี html มากว่า 1 คำสั่งต้องมี <> </> , return คือการส่ง html ไปทำงานที่ main.jsx
    <div className="App">
      <Header title="My pactice props" />
      {/*เรียกใช้ component และส่ง props title ไปทำงาน*/}
      <main>
        <h1 className="title">สวัสดีครับผม :{name}</h1>
        <p>อายุ :{age} </p>
        <button onClick={() => addAge()}>add age</button>
        <button onClick={() => deleteAge()}>delete age</button>
        <button onClick={() => setAge(30)}>reset</button>
      </main>
      <Addform data={data} setData={_setData}/>
      <PersonList data={data} delete_user={delete_user} />
      
      {/*เรียกใช้ component และส่ง data ไปทำงาน*/}
    </div>
  );
} //คำสั่ง js จะเขียนอยู่ใน {}

export default App;
