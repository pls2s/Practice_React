//is a component
function App() {
  const name = "Peerawoot";
  const addresss = "Chonburi";

  return (
    //ถ้ามี html มากว่า 1 คำสั่งต้องมี <> </> , return คือการส่ง html ไปทำงานที่ main.jsx
    <>
      <h1>สวัสดีครับผม :{name}</h1>
      <p>ที่อยู่ :{addresss} </p>
    </>
  );
} //คำสั่ง js จะเขียนอยู่ใน {}

export default App;
