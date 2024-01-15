import { signOut } from "@/auth";
import Button from "@/component/ui/Button"
import getSession from "@/libs/actions/getSession"

export default async function Home() {
  const session = await getSession()



  return (
    <>
      <div>{JSON.stringify(session)}</div>
      <form action={async () => {
        "use server";

        await signOut()

      }}>
        <Button type="submit">log out</Button>
      </form>
    </>

  )
}
