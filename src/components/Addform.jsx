// Addform.jsx
import "./Addform.css";
import { useState } from "react";

function Addform() {

const [name, setName] = useState("");
const [gender, setGender] = useState("");

    function submit(event) {
        event.preventDefault(); //ใช้เพื่อป้องกันการโหลดหน้าเว็บ
        console.log(name, gender);
    }

    return (
        <section className="container">
            <form className="form" onSubmit={submit} >
                <label className="label" htmlFor="name">Name :</label>
                <input type="text" value={name} id="name" className="input" onChange={(event) => setName(event.target.value)} placeholder="Enter name" /> {/* ชื่อ input ต้องตรงกับชื่อ value ในตัวแปร ตรงกับ onChange ใช้เพื่อเปลี่ยนค่า ใน state*/}
                <select id="gender" className="select" value={gender} onChange={(event) => setGender(event.target.value)} > {/* ชื่อ select ต้องตรงกับชื่อ value ในตัวแปร ตรงกับ onChange ใช้เพื่อเปลี่ยนค่า ใน state*/}
                    <option value="male">male</option>
                    <option value="female">female</option>
                </select>

                <button type="submit" className="button" disabled={name.trim() === "" || gender.trim() === ""} confirm="ยืนยันการเพิ่มข้อมูล" >Add</button> {/*ถ้าไม่มีชื่อ หรือ เพศ ให้แสดง disabled .trim คือการลบช่องว่าง*/}
            </form>
        </section>
    );
}

export default Addform;