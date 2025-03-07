import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

export default function SignUp() {
  const navigate = useNavigate();
  const [username, changeUsername] = useState("");
  const [email, changeEmail] = useState("");
  const [password, changePassword] = useState("");
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  if (error) {
    setTimeout(() => {
      setError(null);
    }, 3000);
  }
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (username === "" || email === "" || password === "") {
      setError("Please provide all the fields.");
      return;
    }
    setLoading(true);
    const res = await fetch("/api/auth/signup", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ username, email, password }),
    });
    const data = await res.json();
    if (data.success == false) {
      setError(data.message);
      setLoading(false);
      return;
    }
    navigate("/sign-in");
    setLoading(false);
  };
  return (
    <div className="flex flex-col justify-center items-center gap-3 p-3 mx-auto max-w-lg">
      <h1 className="text-center font-bold text-3xl my-7">SignUP</h1>
      <form
        onSubmit={(e) => handleSubmit(e)}
        className="flex flex-col w-xl gap-4"
      >
        <input
          value={username}
          onChange={(e) => changeUsername(e.target.value)}
          type="text"
          placeholder="username"
          className="p-3 rounded-lg focus:outline-none border border-slate-300"
          id="username"
        />
        <input
          value={email}
          onChange={(e) => changeEmail(e.target.value)}
          type="text"
          placeholder="email"
          className="p-3 rounded-lg focus:outline-none border border-slate-300"
          id="email"
        />
        <input
          onChange={(e) => changePassword(e.target.value)}
          value={password}
          type="text"
          placeholder="password"
          className="p-3 rounded-lg focus:outline-none border border-slate-300"
          id="password"
        />
        <button
          disabled={loading}
          type="submit"
          className="bg-slate-700 text-white p-3 rounded-lg hover:opacity-80 cursor-pointer disabled:opacity-50"
        >
          {loading ? "Loading...." : "SignUp"}
        </button>
      </form>
      <div>
        <p className="text-center">
          Have and Account?{" "}
          <Link className="text-blue-700" to={"/sign-in"}>
            SignIn
          </Link>
        </p>
        <p className="text-center text-red-500">{error}</p>
      </div>
    </div>
  );
}
