//is a component
import { useState } from "react";
function App() {
  const name = "Peerawoot";
  const [age, setAge] = useState(30); //ตัวแปรสถานะ เปลี่ยนได้ตลอดเวลาที่ใ้ชงาน
  const [data, setData] = useState([
    { id: 1, name: "Peerawoot1", gender: "male" },
    { id: 2, name: "Peerawoot2", gender: "female" },
    { id: 3, name: "Peerawoot3", gender: "male" },
    { id: 4, name: "Peerawoot4", gender: "female" },
  ]);

  
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

  const [show, setShow] = useState(true);

  return (
    //ถ้ามี html มากว่า 1 คำสั่งต้องมี <> </> , return คือการส่ง html ไปทำงานที่ main.jsx
    <>
      <h1>สวัสดีครับผม :{name}</h1>
      <p>อายุ :{age} </p>
      <button onClick={() => addAge()}>add age</button>
      <button onClick={() => deleteAge()}>delete age</button>
      <button onClick={() => setAge(30)}>reset</button>
      <h1>จำนวนประชากร {data.length}</h1>

      <button onClick={() => setShow(!show)}>{show ? "hide" : "show"}</button> {/*สลับการแสดงข้อมูล รีเทินเป็น t/f  , ? คือ if , : คือ else*/}

      <ul>
        {show && data.map((obj) => ( //map คือการวนลูป ข้อมูลทุกตัวใน data useState ใช้ show เพื่อสลับการแสดงข้อมูล 
          <li key={obj.id}> {/*key เป็น id ของข้อมูล จะต้องใช้อันที่ข้อมูลไม่ช้ำ */}
            ชื่อ : {obj.name}, เพศ : {obj.gender}
          </li> ))}
      </ul>
    </>
  );
} //คำสั่ง js จะเขียนอยู่ใน {}

export default App;
