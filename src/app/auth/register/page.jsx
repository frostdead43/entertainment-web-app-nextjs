"use client";
import Link from "next/link";
import "../../../../styles/auth.css";

export default function Page() {
  return (
    <>
      <img src="/images/icons/app-icon.svg" className="auth-page-app-icon" alt="" />
      <div className="auth-page">
        <h2>Sign Up</h2>
        <form>
          <div>
            <input type="email" name="email" placeholder="Email address" />
            <input type="text" name="name" placeholder="name" />
            <input type="password" name="password" placeholder="Password" />
            <input type="password" name="repeat" placeholder="Repeat Password" />
          </div>
          <button type="submit">Create an account</button>
          <p>Dont have an account? <Link href="/auth/login">Login</Link></p>
        </form>
      </div>
    </>
  )
}