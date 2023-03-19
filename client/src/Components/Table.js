import React, { useEffect, useState } from "react";
import axios from "axios";
import { see, remove, change, search } from "../Assets/index";

const UsersTable = () => {
  const [users, setUsers] = useState([]);
  const [searchText, setSearchText] = useState("");
  const [status, setStatus] = useState({});
  const updateStatus = (id) => {
    setStatus((prev) => ({ ...prev, [id]: "Complete" }));
  };

  useEffect(() => {
    const fetchUsers = async () => {
      const response = await axios.get("http://localhost:5000/api/users");
      setUsers(response.data.data);
    };
    fetchUsers();
  }, []);

  const handleSearch = (event) => {
    setSearchText(event.target.value);
  };

  const filteredUsers = users.filter((user) =>
    user.name.toLowerCase().includes(searchText.toLowerCase())
  );

  const handleDelete = (id) => {
    setUsers(users.filter((user) => user._id !== id));
  };

  return (
    <div>
      <div className="flex justify-between items-center mx-4 my-8">
        <div className="w-1/3 relative">
          <input
            type="text"
            placeholder="Search"
            className="border-2 border-gray-400 rounded-md py-3 pl-12 pr-10 w-full"
            onChange={handleSearch}
          />
          <img
            src={search}
            alt="search"
            className="absolute top-3 left-3 pointer-events-none"
          />
        </div>
        <div>
          <button className="bg-lime-500 hover:bg-lime-700 text-white font-bold py-3 px-8 rounded-md">
            Add New Role
          </button>
        </div>
      </div>
      <table className="table-auto w-full">
        <thead>
          <tr className="bg-black text-white text-left">
            <th className="px-4 py-6">S.No</th>
            <th className="px-4 py-6">Name</th>
            <th className="px-4 py-6">Email Address</th>
            <th className="px-4 py-6">Role</th>
            <th className="px-4 py-6">Status</th>
            <th className="px-4 py-6">Actions</th>
          </tr>
        </thead>
        <tbody>
          {filteredUsers.map((user, index) => (
            <tr key={user._id}>
              <td className="shadow-sm px-4 py-6">{index + 1}</td>
              <td className="shadow-sm px-4 py-6">{user.name}</td>
              <td className="shadow-sm px-4 py-6">{user.email}</td>
              <td className="shadow-sm px-4 py-6">{user.role}</td>
              <td
                className={`shadow-sm px-4 py-6 ${
                  status[user._id] === "Complete"
                    ? "text-green-500"
                    : "text-blue-700"
                }`}>
                {status[user._id] || "Assign"}
              </td>{" "}
              <td className="shadow-sm px-4 py-6">
                <div className="flex flex-row justify-between gap-4 cursor-pointer w-4 h-4 ">
                  <img
                    src={change}
                    alt="change"
                    onClick={() => updateStatus(user._id)}
                  />
                  <img src={see} alt="see" />
                  <img
                    src={remove}
                    alt="remove"
                    onClick={() => handleDelete(user._id)}
                  />
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default UsersTable;
