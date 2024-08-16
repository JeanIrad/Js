"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import axios from "axios";
import { FormEvent, useEffect, useState } from "react";
import { toast } from "react-hot-toast";

export default function LoginPage() {
  const router = useRouter();
  const [buttonDisabled, setButtonDisabled] = useState(true);
  const [credentials, setCredentials] = useState({
    password: "",
    email: "",
  });
  const login = async () =>
    await axios.post<{ message: string }>("/api/users/login", credentials);
  useEffect(() => {
    const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    if (
      credentials.email.match(emailRegex) &&
      credentials.password.length >= 6
    ) {
      setButtonDisabled(false);
    } else {
      setButtonDisabled(true);
    }
  }, [credentials]);

  const onLogin = async (event: SubmitEvent) => {
    event.preventDefault();
    toast.promise(login(), {
      loading: "Logging in...",
      success: (response) => {
        setTimeout(() => router.push("/profile"), 2000);
        return response.data.message;
      },
      error: (err) => err.response.data.error,
    });
  };

  return (
    <div className="flex flex-col gap-6 items-center justify-center mi-h-screen py-2">
      <h1 className="text-3xl mt-4">Login</h1>
      <hr />
      <form
        action=""
        className="flex flex-col gap-4  min-w-96 px-8 py-12 border border-gray-500 mt-[5%] rounded-xl"
        onSubmit={(e) => onLogin(e)}
      >
        <div className="flex flex-col gap-1">
          <label htmlFor="email">email</label>
          <input
            type="text"
            id="email"
            value={credentials.email}
            onChange={(e) =>
              setCredentials({ ...credentials, email: e.target.value })
            }
            placeholder="Email"
            className="p-2 border border-gray-300 rounded-lg focus:outline-none focus:border-gray-600 text-gray-950"
          />
        </div>

        <div className="flex flex-col gap-1">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            value={credentials.password}
            onChange={(e) =>
              setCredentials({ ...credentials, password: e.target.value })
            }
            placeholder="password"
            className="p-2 border border-gray-300 rounded-lg focus:outline-none focus:border-gray-600 text-gray-950"
          />
        </div>
        <button
          className="border border-gray-300 rounded-lg hover:bg-gray-500 mt-2 py-2"
          disabled={buttonDisabled}
        >
          Login
        </button>
        <Link
          href="/signup"
          className="text-center text-sm  text-gray-600 hover:text-red-400"
        >
          Signup here
        </Link>
      </form>
    </div>
  );
}
