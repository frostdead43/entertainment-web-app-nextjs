"use server"
import { redirect } from "next/navigation";
import { auth } from "../../../../lib/auth";

export async function loginAction(formData) {
  const email = formData.get("email");
  const password = formData.get("password");
  try {
      await auth.api.signInEmail({
        body: {
            email: email,
            password: password,      
        }
    })
  }catch (e) {
    console.log(e.message);
    return;
  }
  return redirect("/");
  console.log(email,password);
} 