import Image from "next/image";
import Link from "next/link";
import { useRedirectFunctions, withAuthInfo } from "@propelauth/react";

const Header = withAuthInfo((props) => {
  const { redirectToLoginPage } = useRedirectFunctions();

  return (
    <div className="flex items-center justify-between p-5 bg-yellow-500">
      <div className="flex items-center space-x-2 rounded-full overflow-hidden">
        <Link href="/">
          <Image src="/vendent.png" alt="Logo" width={150} height={100} />
        </Link>
      </div>

      <div className="text-center text-white text-lg lg:inline-block hidden">
        <h2 className="italic">“Your inspiring quote here”</h2>
      </div>

      <div>
        <button
          className="px-5 py-2 text-black bg-white rounded-md hover:bg-yellow-100"
          onClick={redirectToLoginPage}
        >
          Login
        </button>
      </div>
    </div>
  );
});

export default Header;
