"use server";
import { redirect } from "next/navigation";
import { auth } from "../../../../lib/auth";

export async function registerAction(formData) {
  const email = formData.get("email");
  const name = formData.get("name");
  const password = formData.get("password");
  const repeat = formData.get("repeat");
   try {
        await auth.api.signUpEmail({
          body: {
              email: email,
              name: name,
              password: password,
              repeat: repeat,
          }
      })
    }catch (e) {
      
      console.log(e.message);
      return;
    }
     return redirect("/auth/login");
}