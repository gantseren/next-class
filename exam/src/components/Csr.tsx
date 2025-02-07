"use client";
import { useEffect, useState } from "react";

export default function Csr() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch("https://fakestoreapi.com/users")
      .then((res) => res.json())
      .then((json) => setUsers(json));
  }, []);

  return (
    <div className="max-w-4xl mx-auto p-6">
      <h1 className="text-3xl font-bold text-center mb-6">
        Хэрэглэгчдийн жагсаалт
      </h1>
      <div className="grid lg:grid-cols-3 gap-6">
        {users.map((user) => (
          <div key={user.id} className="border p-2">
            <h2 className="text-xl text-gray-800 mb-2">
              {user.name?.firstname} {user.name?.lastname}
            </h2>
            <p className="text-gray-600">
              <span className="font-medium text-gray-800">Имэйл:</span>
              {user.email}
            </p>
            <p className="text-gray-600">
              <span className="font-medium text-gray-800">Утас:</span>
              {user.phone}
            </p>
            <p className="text-gray-600">
              <span className="font-medium text-gray-800">Хот:</span>
              {user.address?.city}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
