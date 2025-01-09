"use client";

import CardComponent from "@/components/CardComponent";
import { User } from "@/types/index";

interface UserListProps {
  users: User[];
  onDelete: (id: number) => void;
}

const UserList: React.FC<UserListProps> = ({ users, onDelete }) => (
  <div className="space-y-4">
    {users.map((user) => (
      <div
        key={user.id}
        className="flex items-center justify-between bg-gradient-to-br from-gray-800 via-gray-700 to-gray-800 p-4 rounded-lg shadow-md"
      >
        <CardComponent card={user} />
        <button
          onClick={() => onDelete(user.id)}
          className="bg-red-500 hover:bg-red-600 text-white py-2 px-4 rounded-lg shadow transition-all duration-300 ease-in-out transform "
        >
          Delete User
        </button>
      </div>
    ))}
  </div>
);

export default UserList;
