import { Search, ShoppingCart } from 'lucide-react';

const Header = () => {
  return (
    <header className="px-2 flex justify-between bg-gray-200 h-12 items-center md:h-16 xl:h-18 xl:px-10">
      <div>
        <p className="text-[1rem] xl:text-[1.8rem] font-bold">quickBites</p>
      </div>
      <div className="flex items-center border border-black pl-2 rounded-lg w-5/12 md:w-5/12">
        <Search />
        <input
          type="text"
          placeholder="Search..."
          className="px-3 focus:outline-none w-full xl:px-4 xl:py-2"
        />
      </div>
      <div className="flex items-center gap-2 md:gap-6 xl:gap-12">
        <button className="text-[0.8rem] bg-green-300 px-4 py-1 rounded-lg xl:text-[1.3rem] xl:px-6 xl:py-2">
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
