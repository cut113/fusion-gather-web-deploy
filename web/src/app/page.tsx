import getSession from "@/libs/actions/getSession"

export default async function Home() {
  const session = await getSession()
  console.log(">>> check session: ", session);



  return (
    <div>hello</div>
  )
}
