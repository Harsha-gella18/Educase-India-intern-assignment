
import { useNavigate } from "react-router-dom"

function HomePage() {
  const navigate = useNavigate()

  return (
    <div className="page-container bg-gray-50">
      <div className="content-container flex flex-col justify-center h-full">
        <div className="flex-grow"></div>
        <div className="px-6 pb-10">
          <h1 className="text-2xl font-bold text-gray-800 mb-2">Welcome to PopX</h1>
          <p className="text-gray-600 mb-8">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>

          <button
            className="w-full py-3 bg-purple-600 text-white rounded-md mb-4"
            onClick={() => navigate("/create-account")}
          >
            Create Account
          </button>

          <button className="w-full py-3 bg-purple-300 text-purple-800 rounded-md" onClick={() => navigate("/signin")}>
            Already Registered? Login
          </button>
        </div>
      </div>
    </div>
  )
}

export default HomePage
