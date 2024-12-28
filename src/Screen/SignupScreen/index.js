import React from 'react'

const Signup = () => {
  return (
    <div className="container d-flex justify-content-center align-items-center" style={{ height: "100vh" }}>
    <div className="card shadow-lg p-4" style={{ width: '400px' }}>
      <h2 className="text-center mb-4 text-primary">Sign Up</h2>
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

        {/* Confirm Password Field */}
        <div className="mb-3">
          <label htmlFor="confirmPassword" className="form-label">Confirm Password</label>
          <input type="password" className="form-control" id="confirmPassword" placeholder="Confirm password" required />
        </div>

        {/* Submit Button */}
        <div className="d-flex justify-content-between align-items-center">
          <button type="submit" className="btn btn-primary w-100">Sign Up</button>
        </div>
        
        {/* Google Sign-In Button */}
        <div className="d-flex justify-content-center mt-3">
          <button className="btn btn-danger w-100">
            <i className="fab fa-google"></i> Continue with Google
          </button>
        </div>
      </form>

      {/* Switch to Login */}
      <div className="text-center mt-3">
        <p className="text-muted">Already have an account?</p>
        <a href="/" className="btn btn-link text-primary">Login</a>
      </div>
    </div>
  </div>  )
}

export default Signup