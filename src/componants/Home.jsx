import React from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

function Home() {
    const users = useSelector((state) => state.users);
    console.log(users)

    const navigate = useNavigate()
    return (
        <div className="container">
            <h2>Crud App with JSON Server</h2>
            <button onClick={()=> navigate('/create')} 
            className="btn btn-sm btn-primary">Create</button>

            <img src="./p6.png"></img>
            <table className="table">
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Action</th>


                    </tr>
                </thead>
                <tbody>
                    {users.map((users, index) => (
                        <tr key={index}>
                            <td>{users.id}</td>
                            <td>{users.name}</td>
                            <td>{users.email}
                            </td>
                            <td>
                                <button className="btn btn-sm btn-primary">Edit</button>
                                <button className="btn btn-sm btn-danger ms-2">Delete</button>

                            </td>


                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}
export default Home