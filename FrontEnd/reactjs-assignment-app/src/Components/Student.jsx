import React from "react";


import axios from 'axios';
import { useEffect, useState } from "react";

function Student() {


    const [studentid, setId] = useState('');
    const [studentname, setName] = useState("");
    const [studentage, setAge] = useState("");
    const [studentclass, setClass] = useState("");
    const [studentdivision, setDivision] = useState("");
    const [studentgender, setGender] = useState("");
    const [students, setUsers] = useState([]);

    
        
    

    useEffect(() => {
        (async () => await Load())();
    }, []);


    async function Load() {
        const result = await axios.get(
            "http://localhost:7070/list");
        setUsers(result.data);
        console.log(result.data);
    }



    async function save(event) {

        event.preventDefault();
        try {
            await axios.post("http://localhost:7070/create",
                {
                    name: studentname,
                    dob: studentage,
                    standard: studentclass,
                    division: studentdivision,
                    gender: studentgender

                });
            alert("Student Registation Successfully");
            setId("");
            setName("");
            setAge("");
            setClass("");
            setDivision("");
            setGender("");
            Load();
        }
        catch (err) {
            alert("User Registation Failed");
        }
    }




    async function DeleteStudent(studentid) {
        await axios.post("http://localhost:7070/delete/" + studentid);
        alert("Student deleted Successfully");
        Load();
    }






    return (
        <div>
            <div class="jumbotron text-center">
                <h1>Students Registration Form</h1>
                
            </div>
            <div class="container mt-4" >
                <form>

                    <div className="form-group">
                        <label>Student Name :</label>
                        <input type="text" name="name"className="form-control" id="studentname"
                            value={studentname}
                            onChange={(event) => {
                                setName(event.target.value);
                            }}
                            required />
                    </div>


                    <div className="form-group">
                        <label>Date Of Birth :</label>
                        <input type="date" className="form-control" id="studentage" placeholder="dd-MM-yyyy"
                            value={studentage}
                            onChange={(event) => {
                                setAge(event.target.value);
                            }}
                        required/>
                    </div>

                    <div className="form-group">
                        <label>Class :  </label>
                        <select value={studentclass}
                            onChange={(event) => {
                                setClass(event.target.value);
                            }} className="form-control form-control-sm" id="studentclass" required>
                            <option value="">Select</option>
                            <option value="i">I</option>
                            <option value="ii">II</option>
                            <option value="iii">III</option>
                            <option value="iv">IV</option>
                            <option value="v">V</option>
                            <option value="vi">V1</option>
                            <option value="vii">V11</option>
                            <option value="viii">V111</option>
                            <option value="ix">1X</option>
                            <option value="x">X</option>
                            <option value="xi">X11</option>
                            <option value="xii">X12</option>
                        </select>

                    </div>
                    <div className="form-group">
                        <label>Division :  </label>
                        <select value={studentdivision}
                            onChange={(event) => {
                                setDivision(event.target.value);
                            }} className="form-control form-control-sm" id="studentdivision" required >
                            <option value="">Select</option>
                            <option value="a">A</option>
                            <option value="b">B</option>
                            <option value="c">C</option>

                        </select>

                    </div>
                    <div className="form-group">
                        <label>Student Gender :</label><br />
                        <input type="radio" className="form-controls" id="studentgender" value="Male" onChange={(event) => { setGender(event.target.value); }} />Male
                        <input type="radio" className="form-controls" id="studentgender" value="Female" onChange={(event) => { setGender(event.target.value); }} />Female

                    </div>
                    <div>
                        <button class="btn btn-primary mt-4" onClick={save}>Register</button>


                    </div>
                </form>
            </div>
            <br />
            <table className="table table-hover" align="center">
            <thead className="thead-dark">
                    <tr>
                        <th scope="col">Student Name</th>
                        <th scope="col">Date Of Birth</th>
                        <th scope="col">Student Class</th>
                        <th scope="col">Student Division</th>
                        <th scope="col">Student Gender</th>

                        <th scope="col">Option</th>
                    </tr>
                </thead>
                {students.map(function fn(student) {
                    return (
                        <tbody>
                            <tr>
                                <td>{student.name}</td>
                                <td>{student.dob}</td>
                                <td>{student.standard}</td>
                                <td>{student.division}</td>
                                <td>{student.gender}</td>
                                <td>

                                    <button type="button" class="btn btn-danger" onClick={() => DeleteStudent(student.id)}>Delete</button>

                                </td>
                            </tr>
                        </tbody>
                    );
                })}
            </table>
        </div>
    );
}

export default Student;
