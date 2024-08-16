"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import axios from "axios";
import { useEffect, useState } from "react";
import { toast } from "react-hot-toast";

export default function SignupPage() {
  const router = useRouter();
  const [user, setUser] = useState({
    email: "",
    password: "",
    username: "",
  });
  const [loading, setLoading] = useState(false);
  const [buttonDisabled, setButtonDisabled] = useState(false);
  const signup = async () =>
    await axios.post<{ message: string }>("/api/users/signup", user);
  const onSignup = async (event: SubmitEvent) => {
    event.preventDefault();
    try {
      setLoading(true);

      // const response = await axios.post<{ message: string }>(
      //   "/api/users/signup",
      //   user
      // );
      toast.promise(signup(), {
        loading: "Signing up...",
        success: (response) => {
          setTimeout(() => router.push("/login"), 2000);
          return response.data.message;
        },
        error: (err) => err.response.data.error,
      });
    } catch (error) {
      setLoading(false);
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    if (
      user.email.match(emailRegex) &&
      user.password.length >= 6 &&
      user.username.length >= 3
    ) {
      setButtonDisabled(false);
    } else {
      setButtonDisabled(true);
    }
  }, [user]);
  return (
    <div className="flex flex-col gap-6 items-center justify-center mi-h-screen py-2">
      <h1 className="text-3xl mt-4">{loading ? "Loading..." : "Signup"}</h1>
      <hr />
      <form
        action=""
        className="flex flex-col gap-4 min-w-96 px-8 py-12 border border-gray-500 mt-[5%] rounded-xl"
        onSubmit={(e) => onSignup(e)}
      >
        <div className="flex flex-col gap-1">
          <label htmlFor="username">Username</label>
          <input
            type="text"
            id="username"
            value={user.username}
            onChange={(e) => setUser({ ...user, username: e.target.value })}
            placeholder="username"
            className="p-2 border border-gray-300 rounded-lg focus:outline-none focus:border-gray-600 text-gray-950"
          />
        </div>

        <div className="flex flex-col gap-1">
          <label htmlFor="email">Email</label>
          <input
            type="text"
            id="email"
            value={user.email}
            onChange={(e) => setUser({ ...user, email: e.target.value })}
            placeholder="Email"
            className="p-2 border border-gray-300 rounded-lg focus:outline-none focus:border-gray-600 text-gray-950"
          />
        </div>

        <div className="flex flex-col gap-1">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            value={user.password}
            onChange={(e) => setUser({ ...user, password: e.target.value })}
            placeholder="password"
            className="p-2 border border-gray-300 rounded-lg focus:outline-none focus:border-gray-600 text-gray-950"
          />
        </div>
        <button
          className={`border border-gray-300 rounded-lg  mt-2 py-2 ${
            buttonDisabled ? "bg-gray-900" : "hover:bg-gray-500"
          }`}
          onClick={onSignup}
          disabled={buttonDisabled}
        >
          Signup
        </button>
        <Link
          href="/login"
          className="text-center text-sm  text-gray-600 hover:text-red-400"
        >
          Login
        </Link>
      </form>
    </div>
  );
}
