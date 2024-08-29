import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import Cookies from "js-cookie";

function Dashboard() {
  const [auth, setAuth] = useState(null);
  const router = useRouter();

  useEffect(() => {
    const authCookie = Cookies.get("auth");
    if (!authCookie) {
      // Redirect to login page if not authenticated
      router.push("/login");
    } else {
      setAuth(authCookie);
    }
  }, [router]);

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100 p-6">
      <div className="bg-white shadow-lg rounded-lg p-8 max-w-md w-full">
        <h2 className="text-3xl font-semibold mb-4">Dashboard</h2>
        <p className="text-lg text-gray-700">
          Welcome to the protected dashboard!
        </p>
      </div>
    </div>
  );
}

export default Dashboard;
