import Link from "next/link";
import "../../../../styles/auth.css";
import { registerAction } from "./action";


export default async function Page() {
  return (
    <>
      <img src="/images/icons/app-icon.svg" className="auth-page-app-icon" alt="" />
      <div className="auth-page">
        <h2>Sign Up</h2>
        <form action={registerAction}>
          <div>
            <input type="email" name="email" placeholder="Email address" />
            <input type="text" name="name" placeholder="Name" />
            <input type="password" name="password" placeholder="Password" />
            <input type="password" name="repeat" placeholder="Repeat Password" />
          </div>
          <button type="submit">Create an account</button>
          <p>Do you have Account? <Link href="/auth/login">Login</Link></p>
        </form>
      </div>
    </>
  )
}