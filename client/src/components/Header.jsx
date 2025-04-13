import { Search, ShoppingCart } from 'lucide-react';

const Header = () => {
  return (
    <header className="px-10 flex justify-between bg-gray-200 h-16 items-center">
      <div>
        <p className="text-[1.7rem] font-bold">quickBites</p>
      </div>
      <div className="flex items-center border border-black pl-2 rounded-lg w-4/12">
        <Search />
        <input
          type="text"
          placeholder="Search..."
          className="px-4 py-2 focus:outline-none w-full"
        />
      </div>
      <div className="flex items-center gap-10">
        <button className="text-[1.2rem] bg-green-300 px-4 py-1 rounded-lg">
          Sign in
        </button>
        <div className="flex items-center">
          <ShoppingCart />
          <p>0</p>
        </div>
      </div>
    </header>
  );
};

export default Header;
