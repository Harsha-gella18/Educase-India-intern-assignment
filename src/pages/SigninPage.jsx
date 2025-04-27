import React from "react"
import { useNavigate } from "react-router-dom"
import { useState } from "react"

function SigninPage() {
  const navigate = useNavigate()
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  const handleLogin = (e) => {
    e.preventDefault()
    navigate("/profile")
  }

  return (
    <div className="page-container bg-gray-50">
      <div className="content-container p-6">
        <div className="pt-6">
          <h1 className="text-2xl font-bold text-gray-800 mb-1">Signin to your</h1>
          <h1 className="text-2xl font-bold text-gray-800 mb-2">PopX account</h1>
          <p className="text-gray-600 mb-8">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>

          <form onSubmit={handleLogin}>
            <div className="mb-4">
              <label className="block text-purple-600 text-sm mb-1">Email Address</label>
              <input
                type="email"
                className="w-full p-3 border border-gray-300 rounded-md"
                placeholder="Enter email address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>

            <div className="mb-6">
              <label className="block text-purple-600 text-sm mb-1">Password</label>
              <input
                type="password"
                className="w-full p-3 border border-gray-300 rounded-md"
                placeholder="Enter password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>

            <button type="submit" className="w-full py-3 bg-gray-300 text-gray-600 rounded-md">
              Login
            </button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default SigninPage