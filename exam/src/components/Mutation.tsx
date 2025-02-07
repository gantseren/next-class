"use client";
import { gql, useQuery, useMutation } from "@apollo/client";

// Users Query
const GET_USERS = gql`
  query GetUsers {
    users {
      id
      name
      email
      phone
    }
  }
`;

// Add User Mutation
const ADD_USER = gql`
  mutation AddUser($name: String!, $email: String!, $phone: String!) {
    addUser(input: { name: $name, email: $email, phone: $phone }) {
      id
      name
      email
      phone
    }
  }
`;

export default function Mutation() {
  const { loading, error, data } = useQuery(GET_USERS);
  const [addUser] = useMutation(ADD_USER, {
    refetchQueries: [{ query: GET_USERS }], // Хэрэглэгч нэмсний дараа жагсаалтыг дахин ачаалах
  });

  if (loading) return <p>Ачааллаж байна...</p>;
  if (error) return <p>Алдаа гарлаа: {error.message}</p>;

  const handleAddUser = async () => {
      await addUser({
        variables: {
          name: "Шинэ Хэрэглэгч",
          email: "newuser@example.com",
          phone: "1234567890",
        },
      });
  };

  return (
    <div>
      <h1>Хэрэглэгчдийн жагсаалт</h1>
      <button
        className="bg-blue-500 text-white px-4 py-2 rounded-md mt-4"
        onClick={handleAddUser}
      >
        Хэрэглэгч нэмэх
      </button>
      <div>
        {data.users.map((user) => (
          <div key={user.id} className="border rounded-md p-4 mt-4">
            <h2 className="text-lg font-semibold">{user.name}</h2>
            <p>Имэйл: {user.email || "Байхгүй"}</p>
            <p>Утас: {user.phone || "Байхгүй"}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
