import { Link } from 'react-router-dom';
import MainCategories from '../components/MainCategories';
import FeaturedPosts from '../components/FeaturedPosts';
import PostsList from '../components/PostsList';

const HomePage = () => {
  return (
    <div className="mt-4 flex flex-col gap-4">
      {/* BREAD CRUMBS */}
      <div className="flex gap-4">
        <Link to="/" className="text-blue-500">
          Home
        </Link>
        <span>•</span>
        <span className="text-blue-800">Blogs and Articles</span>
      </div>
      {/* INTRODUCTION */}
      <div className="flex items-center justify-between">
        {/* titles */}
        <div className="">
          <h1 className="text-2xl font-bold text-gray-800 md:text-5xl lg:text-6xl">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit.
          </h1>
          <p className="mt-8 text-lg md:text-xl">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Soluta
            iure.
          </p>
        </div>
        {/* animated button */}
        <div className="">
          <Link to="/write" className="hidden md:block relative">
            <svg
              viewBox="0 0 200 200"
              width="180"
              height="180"
              className="text-lg tracking-widest animate-spin animatedButton"
              // className="text-lg tracking-widest"
            >
              <path
                id="circlePath"
                fill="none"
                d="M 100, 100 m -75, 0 a 75,75 0 1,1 150,0 a 75,75 0 1,1 -150,0"
              />
              <text>
                <textPath href="#circlePath" startOffset="0%">
                  Write your story •
                </textPath>
                <textPath href="#circlePath" startOffset="50%">
                  Share your idea •
                </textPath>
              </text>
            </svg>
            <button className="absolute top-0 left-0 right-0 bottom-0 m-auto w-20 h-20 bg-blue-800 rounded-full flex items-center justify-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                width="50"
                height="50"
                fill="none"
                stroke="white"
                strokeWidth="2"
              >
                <line x1="6" y1="18" x2="18" y2="6" />
                <polyline points="9 6 18 6 18 15" />
              </svg>
            </button>
          </Link>
        </div>
      </div>
      {/* CATEGORIES */}
      <MainCategories />
      {/* FEATURED POSTS */}
      <FeaturedPosts />
      {/* POSTS LIST */}
      <div className="">
        <h2 className='my-8 text-2xl text-gray-600'>Recent Posts</h2>
        {/* posts */}
        <PostsList />
      </div>
    </div>
  );
};

export default HomePage;
