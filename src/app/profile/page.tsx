"use client"
import React, { useState } from "react";
import axios from "axios";
import Link from "next/link";
import { toast } from "react-hot-toast";
import { useRouter } from "next/navigation";

export default function ProfilePage() {
  const router = useRouter();
  const [data, setData] = useState("nothing");

  const logout = async () => {
    try {
      await axios.get("/api/users/logout");
      toast.success("Logout successful");
      router.push("/login");
    } catch (error: any) {
      console.log(error.message);
      toast.error(error.message);
    }
  };

  const getUserDetails = async () => {
    const res = await axios.get("/api/users/me");
    setData(res.data.data._id);
    console.log(res.data.data._id);
  };

  return (
    <div className="">
      <h1>Profile</h1>
      <hr />
      <p>Profile page</p>
      <h2 className="bg-red-300">
        {data === "nothing" ? (
          "Nothing to display"
        ) : (
          <Link href={`/profile/${data}`}>{data}</Link>
        )}
      </h2>
      <hr />
      <button onClick={logout} className="">
        Logout
      </button>

      <button onClick={getUserDetails} className="">
        GetUser Details
      </button>
    </div>
  );
}
