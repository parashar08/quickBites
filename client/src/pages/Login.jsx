import { useState } from 'react';
import { Link } from 'react-router-dom';

const Login = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log('Login data!', formData);
  };
  return (
    <div className="w-10/12 bg-gray-200 m-auto mt-6 p-4 rounded-lg">
      <div className="my-2">
        <div className="text-center mb-6">
          <h1 className="font-bold text-2xl">Login here!</h1>
        </div>
        <div>
          <form action="" onSubmit={handleSubmit}>
            <div className="mb-4">
              <label htmlFor="email" className="block">
                Email:{' '}
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="focus:outline-none border border-black px-2 py-1 w-full rounded-md"
              />
            </div>
            <div className="mb-4">
              <label htmlFor="password" className="block">
                Password:{' '}
              </label>
              <input
                type="password"
                id="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                required
                className="focus:outline-none border border-black px-2 py-1 w-full rounded-md"
              />
            </div>
          </form>
        </div>
        <div className="text-center">
          <button
            onClick={handleSubmit}
            className="bg-blue-500 px-4 py-1 rounded-md text-[1.1rem] my-5"
          >
            Login
          </button>
          <p>
            Don't have account?{' '}
            <Link to="/signup">
              <span className="text-blue-600">create</span>
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
