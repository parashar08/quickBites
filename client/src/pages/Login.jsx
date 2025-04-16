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

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log('FORM SUBMITED!', formData);
  };
  return (
    <div className="bg-gray-200 w-11/12 m-auto mt-10 h-[50vh] py-4 px-1 rounded-md">
      <div>
        <h1 className="text-xl font-bold text-center">Fill the SIGNUP Form!</h1>
      </div>
      <form onSubmit={handleSubmit} className="pt-4 mt-4">
        <div className="w-100% py-3">
          <label htmlFor="fullName" className="mr-2">
            FullName:{' '}
          </label>
          <input
            type="text"
            id="fullName"
            name="fullName"
            placeholder="Enter your full Name"
            value={formData.fullName}
            onChange={handleChange}
            required
            className="focus:outline-none border border-black rounded-sm px-2 py-0.5"
          />
        </div>
        <div className="py-4 ">
          <label htmlFor="email">Email: </label>
          <input
            type="email"
            id="email"
            name="email"
            placeholder="Enter your email address"
            value={formData.email}
            onChange={handleChange}
            required
            className="focus:outline-none border border-black rounded-sm px-2 py-0.5"
          />
        </div>
        <div className="py-4">
          <label htmlFor="role">Role: </label>
          <select
            name="role"
            id="role"
            value={formData.role}
            onChange={handleChange}
          >
            <option value="customer">customer</option>
            <option value="restaurant-owner">restaurant-owner</option>
            <option value="delivery-partner">delivery-partner</option>
            <option value="admin">admin</option>
          </select>
        </div>
        <div className="py-4">
          <label htmlFor="phoneNumber">PhoneNumber: </label>
          <input
            type="tel"
            id="phoneNumber"
            name="phoneNumber"
            placeholder="Enter your phone number"
            value={formData.phoneNumber}
            onChange={handleChange}
            required
            className="focus:outline-none border border-black rounded-sm px-2 py-0.5"
          />
        </div>
        <div className="py-4">
          <label htmlFor="password">Password: </label>
          <input
            type="password"
            id="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            required
            className="focus:outline-none border border-black rounded-sm px-2 py-0.5"
          />
        </div>
        <div>
          <button>Signup!</button>
        </div>
      </form>
      <p>
        Alredy have account{' '}
        <span className="text-blue-700">
          <Link to="/login">Login</Link>
        </span>
      </p>
    </div>
  );
};

export default Signup;
