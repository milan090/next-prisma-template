import { signOut, useSession } from "next-auth/client";
import Link from "next/link";
import { useEffect } from "react";
import toast from "react-hot-toast";
import { Button } from "src/client/components/button/button.component";
import { HeroLayout } from "src/client/layouts/hero/hero.layout";

const IndexPage = () => {
  const [session, loading] = useSession();

  useEffect(() => {
    console.log(session);
  }, [session]);

  return (
    <HeroLayout title="Title">
      <h1>Hello Next.js 👋</h1>

      {loading && <p>Loading...</p>}

      {session?.user && (
        <p>
          Logged in as: {session?.user.name} |
          <button onClick={() => signOut()}>
            <a href="#">Logout</a>
          </button>
        </p>
      )}

      {!loading && !session?.user && (
        <Link href="/api/auth/signin">
          <a>Login</a>
        </Link>
      )}
      <Button handleClick={() => toast.success("clicked")}>Click me</Button>
    </HeroLayout>
  );
};

export default IndexPage;
