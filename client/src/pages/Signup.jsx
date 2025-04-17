import { useState } from 'react';
import { Link } from 'react-router-dom';

const Signup = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    role: '',
    phoneNumber: '',
    password: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('http://localhost:3000/api/user/signup', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });
      const data = await response.json();
      console.log('SIGNUP DATA!', data);

      setFormData({
        fullName: '',
        email: '',
        role: '',
        phoneNumber: '',
        password: '',
      });
    } catch (error) {
      console.log('SIGNUP ERROR!', error.message);
    }
  };

  return (
    <div className="bg-gray-50 w-10/12 m-auto my-6 p-4 rounded-md md:w-4/12 md:p-8 md:my-12 md:rounded-2xl">
      <div className="text-center my-2 md:my-4">
        <h1 className="text-2xl font-bold">Create your Account!</h1>
      </div>
      <div>
        <form onSubmit={handleSubmit}>
          <div className="py-1.5 md:py-2">
            <label htmlFor="fullName" className="block">
              FullName:{' '}
            </label>
            <input
              type="text"
              id="fullName"
              name="fullName"
              value={formData.fullName}
              onChange={handleChange}
              required
              className="focus:outline-none border border-black w-full px-2 py-1 rounded-sm"
            />
          </div>
          <div className="py-1.5 md:py-2">
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
              className="focus:outline-none border border-black w-full px-2 py-1 rounded-sm"
            />
          </div>
          <div className="py-1.5 md:py-2">
            <label htmlFor="phoneNumber" className="block">
              PhoneNumber:{' '}
            </label>
            <input
              type="tel"
              id="phoneNumber"
              name="phoneNumber"
              value={formData.phoneNumber}
              onChange={handleChange}
              required
              className="focus:outline-none border border-black w-full px-2 py-1 rounded-sm"
            />
          </div>
          <div className="py-1.5 md:py-2">
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
              className="focus:outline-none border border-black w-full px-2 py-1 rounded-sm"
            />
          </div>
          <div className="py-1.5 md:py-2">
            <label htmlFor="role" className="block">
              Role:{' '}
            </label>
            <select
              name="role"
              id="role"
              value={formData.role}
              onChange={handleChange}
              required
              className="focus:outline-none border border-black w-full px-2 py-1 rounded-sm"
            >
              <option value="">Select your role!</option>
              <option value="customer">customer</option>
              <option value="restaurant-owner">restaurant-owner</option>
              <option value="delivery-partner">delivery-partner</option>
              <option value="admin">admin</option>
            </select>
          </div>
        </form>
      </div>
      <div className="text-center mt-4 md:mt-6">
        <button
          className="px-4 py-1.5 bg-blue-400 rounded-md text-[1.1rem] mb-2"
          onClick={handleSubmit}
        >
          Signup
        </button>
        <p className="mt-2">
          Already have account!{' '}
          <Link to="/login">
            <span className="text-blue-500">Login</span>
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Signup;
