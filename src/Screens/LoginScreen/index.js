import React from 'react'
import { Link } from 'react-router-dom'

const Login = () => {
  return (
    <div className="container d-flex justify-content-center align-items-center" style={{ height: "100vh" }}>
      <div className="card p-4" style={{ width: '400px' }}>
        <h2 className="text-center mb-4">Login</h2>
        <form>
          {/* Email Field */}
          <div className="mb-3">
            <label htmlFor="email" className="form-label">Email address</label>
            <input type="email" className="form-control" id="email" placeholder="Enter email" required />
          </div>

          {/* Password Field */}
          <div className="mb-3">
            <label htmlFor="password" className="form-label">Password</label>
            <input type="password" className="form-control" id="password" placeholder="Enter password" required />
          </div>

          {/* Forgot Password Link and Submit Button */}
          <div className="d-flex justify-content-between align-items-center">
            <a href="#" className="text-decoration-none">Forgot Password?</a>
            <button type="submit" className="btn btn-primary">Login</button>
          </div>
          
          {/* Google Sign-In Button */}
          <div className="d-flex justify-content-center mt-3">
            <button className="btn btn-danger w-100">
              <i className="fab fa-google"></i> Continue with Google
            </button>
          </div>
        </form>

        {/* Switch to Signup */}
        <div className="text-center mt-3">
        {/* <Link to={"/"} >Don't have an account? Sign Up</Link>  */}
        <Link to={"/signup"} >Don't have an account? Sign Up</Link>
         {/* <a href="/signup" className="btn btn-link">Don't have an account? Sign Up</a> */}
        </div>
      </div>
    </div>
  )
}

export default Login