"use client";
import { gql, useQuery } from "@apollo/client";

const GET_USERS = gql`
  query GetUsers {
    users {
      id
      name
      email
      phone
      address {
        city
      }
    }
  }
`;

export default function Queries() {
  const { loading, error, data } = useQuery(GET_USERS);

  if (loading) return <p>Ачааллаж байна...</p>;
  if (error) return <p>Алдаа гарлаа: {error.message}</p>;

  return (
    <div>
      <h1>Хэрэглэгчдийн жагсаалт</h1>
      <div>
        {data.users.map((user) => (
          <div key={user.id}>
            <h2>
              {user.name}
            </h2>
            <p>Имэйл: {user.email || "Байхгүй"}</p>
            <p>Утас: {user.phone || "Байхгүй"}</p>
            <p>Хот: {user.address?.city}</p>
          </div>
        ))}
      </div>
    </div>
  );
}