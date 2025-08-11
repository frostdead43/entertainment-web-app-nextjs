"use client";
import Link from "next/link";
import "../../../../styles/auth.css";


export default function Page() {

  return (
    <>
      <img src="/images/icons/app-icon.svg" className="auth-page-app-icon" alt="" />
      <div className="auth-page">
        <h2>Login</h2>
        <form>
          <div>
            <input type="email" name="email" placeholder="Email address" />
            <input type="password" name="password" placeholder="Password" />
          </div>
          <button type="submit">Login to your account</button>
          <p>Dont have an account? <Link href="/auth/register">Sign up</Link></p>

        </form>
      </div>
    </>
  )
}