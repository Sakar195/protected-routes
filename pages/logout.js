import { useEffect } from "react";
import { useRouter } from "next/router";
import Cookies from "js-cookie";

const Logout = () => {
  const router = useRouter();

  useEffect(() => {
    // Remove the 'auth' cookie
    Cookies.remove("auth");

    // Redirect to the login page
    router.push("/login");
  }, [router]);

  // Display nothing while logging out
  return null;
};

export default Logout;
