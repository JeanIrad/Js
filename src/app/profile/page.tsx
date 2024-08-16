"use client";
import axios from "axios";
import Link from "next/link";
import { use, useEffect, useState } from "react";
import toast from "react-hot-toast";

export default function ProfilePage() {
  const logout = async () => {
    try {
      toast.promise(axios.get<{ message: string }>("/api/users/logout"), {
        loading: "Logging out...",
        success: (response) => {
          setTimeout(() => window.location.assign("/login"), 2000);
          return response.data.message;
        },
        error: (err) => err.response.data.error,
      });
    } catch (error: any) {
      console.error(error.message); // {{Print the error message}}
      toast.error(error.message); // {{Display the error message}}
    }
  };
  const [user, setUser] = useState<{
    id: string;
    email: string;
    username: string;
    isAdmin: boolean;
  } | null>(null);
  useEffect(() => {
    toast.promise(
      axios.get<{
        user: { id: string; email: string; username: string; isAdmin: boolean };
      }>("/api/users/me"),
      {
        loading: "Fetching user profile data....",
        success: (response) => {
          console.log(response.data.user);
          setUser(response.data.user);
          // return response.data.user.username;
          return "User profile data fetched successfully";
        },
        error: (err) => err.response.data.error,
      }
    );
  }, []);
  console.log(user);
  return (
    <div>
      <button onClick={logout}>Logout</button>
      <h1>Profile Page</h1>
      <hr />
      {user && (
        <div>
          <h2>Profile Details</h2>
          <p>Username: {user.username}</p>
          <p>Email:{user.email} </p>
          <p>isAdmin: {user.isAdmin ? "Admin" : "user"}</p>
        </div>
      )}
    </div>
  );
}
