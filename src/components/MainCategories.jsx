import { Link } from 'react-router-dom';
import Search from './Search';

const MainCategories = () => {
  return (
    <div className="hidden md:flex bg-white rounded-3xl xl:rounded-full p-4 shadow-lg items-center justify-center gap-8">
      {/* links */}
      <div className="flex-1 flex items-center justify-between flex-wrap">
        <Link
          to="/posts"
          className="bg-blue-800 hover:bg-blue-600 text-white rounded-full px-4 py-2 hover:shadow-md"
        >
          All Posts
        </Link>
        <Link
          to="/posts?category=web-design"
          className="hover:bg-blue-50 rounded-full px-4 py-2"
        >
          Web Design
        </Link>
        <Link
          to="/posts?category=development"
          className="hover:bg-blue-50 rounded-full px-4 py-2"
        >
          Development
        </Link>
        <Link
          to="/posts?category=databases"
          className="hover:bg-blue-50 rounded-full px-4 py-2"
        >
          Databases
        </Link>
        <Link
          to="/posts?category=search-engines"
          className="hover:bg-blue-50 rounded-full px-4 py-2"
        >
          Search Engines
        </Link>
        <Link
          to="/posts?category=marketing"
          className="hover:bg-blue-50 rounded-full px-4 py-2"
        >
          Marketing
        </Link>
      </div>
      <span className="text-xl font-medium">|</span>
      {/* search */}
     <Search />
    </div>
  );
};

export default MainCategories;
