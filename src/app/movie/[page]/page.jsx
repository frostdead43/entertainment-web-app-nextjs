import { use } from "react";

export default function Page({params}) {
  const prms = use(params);
  const page = prms.page;
  console.log(page);
  return(
    <div>asdsadsa</div>
  )
}