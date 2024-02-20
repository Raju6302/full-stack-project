import axios from "axios";
import {useEffect, useState} from "react";
import { Link, useParams } from "react-router-dom";

const Home = () => {

    const [users, SetUsers] = useState([]);

    const {id} = useParams()

    useEffect(()=>{
        loadUsers();
    },[])

    const loadUsers = async () => {
        const result =await axios.get("http://localhost:8080/users");
        SetUsers(result.data);
    }

    const deleteUser = async (id) => {
        await axios.delete(`http://localhost:8080/user/${id}`)
        loadUsers();
    }

    return (
    <div className="container">
        <div className="py-4 ">
            <table className="table shadow border">
                <thead>
                    <tr>
                    <th scope="col">S.No</th>
                    <th scope="col">Name</th>
                    <th scope="col">UserName</th>
                    <th scope="col">Email</th>
                    <th scope="col">Action</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        users.map((user, index)=>{
                            const{name, username, email} = user;
                            return (
                                <tr key={index}>
                                <th scope="row">{index + 1}</th>
                                <td>{name}</td>
                                <td>{username}</td>
                                <td>{email}</td>
                                <td>
                                    <Link className="btn btn-primary mx-2" to={`/ViewUser/${user.id}`}>View</Link>
                                    <Link className="btn btn-outline-primary mx-2" to={`/EditUser/${user.id}`}>Edit</Link>
                                    <button className="btn btn-danger mx-2" 
                                    onClick={()=>deleteUser(user.id)}
                                    >Delete</button>
                                </td>
                               </tr>
                            )
                        })
                    }                      
                </tbody>
            </table>
        </div>
    </div>
    )
}

export default Home;