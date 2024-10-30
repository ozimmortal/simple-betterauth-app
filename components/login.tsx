"use client"

import {signIn} from "@/lib/auth-client";
import { useState } from "react";
export default function Login() {

    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    async function handleLogin() {
         await signIn.email({
          email:email, 
          password: password,
          callbackURL: "/"
        
        })
    }

  return (
    <div >
      <div className="flex flex-col w-80 gap-4 shadow-md rounded-md p-4">
        <h2 className="text-center text-2xl font-bold">Login</h2>
        <input type="email" placeholder="Email" required value={email} onChange={(e) => setEmail(e.target.value)} className="border gap-2 h-10 p-3 rounded-md text-sm font-bold"/>
        <input type="password" placeholder="Password" required maxLength={32} minLength={8} value={password} onChange={(e) => setPassword(e.target.value)} className="border gap-2 h-10 p-3 rounded-md text-sm font-bold" />
        <button className=" border gap-2 h-10 p-3 rounded-md text-sm font-bold text-white bg-black hover:bg-slate-400" onClick={handleLogin}>Login</button>
        <div>

        </div>
        <a className="text-center text-sm font-bold text-black hover:text-slate-400" href="/signup">dont have an account?</a>
      </div>
    </div>
  )
}
