"use client";

import { useState } from "react";

interface UserFormProps {
  onSubmit: (user: { name: string; email: string }) => void;
}

const UserForm: React.FC<UserFormProps> = ({ onSubmit }) => {
  const [formData, setFormData] = useState({ name: "", email: "" });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    onSubmit(formData);
    setFormData({ name: "", email: "" });
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="space-y-4 p-6 bg-gradient-to-br from-gray-800 via-gray-700 to-gray-800 rounded-lg shadow-md"
    >
      <input
        name="name"
        placeholder="Name"
        value={formData.name}
        onChange={handleChange}
        className="w-full p-2 border border-gray-600 rounded bg-gray-900 text-gray-100 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
      <input
        name="email"
        placeholder="Email"
        value={formData.email}
        onChange={handleChange}
        className="w-full p-2 border border-gray-600 rounded bg-gray-900 text-gray-100 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
      <button
        type="submit"
        className="w-full p-3 text-gray-100 bg-gradient-to-r from-teal-500 via-teal-600 to-teal-700 rounded-lg shadow-lg hover:from-teal-400 hover:to-teal-600 transition-all duration-300 ease-in-out transform  focus:outline-none focus:ring-2 focus:ring-teal-400"
      >
        Submit
      </button>
    </form>
  );
};

export default UserForm;
