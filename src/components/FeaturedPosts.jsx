import { Link } from 'react-router-dom';
import Image from './Image';

const FeaturedPosts = () => {
  return (
    <div className="mt-8 flex flex-col lg:flex-row gap-8">
      {/* First Post */}
      <div className="w-full lg:w-1/2 flex flex-col gap-4">
        {/* post image */}
        <Image
          src="featured1.jpeg"
          alt="featured 1"
          className="rounded-3xl object-cover"
        />
        {/* post details */}
        <div className="flex items-center gap-4">
          <h2 className="font-semibold lg:text-lg">01.</h2>
          <Link
            to="/posts/1"
            className="text-blue-800 lg:text-lg hover:text-blue-600"
          >
            Web Design
          </Link>
          <span className="text-gray-500">2 days ago</span>
        </div>
        {/* post title */}
        <Link
          to="/test"
          className="text-xl lg:text-3xl font-semibold lg:font-bold"
        >
          Lorem ipsum, dolor sit amet consectetur adipisicing elit.{' '}
        </Link>
      </div>
      {/* 3 Other Posts */}
      <div className="w-full lg:w-1/2 flex flex-col gap-4">
        <div className="lg:h-1/3 flex justify-between gap-4">
          <Image
            src="featured2.jpeg"
            alt="featured 2"
            className="rounded-3xl object-cover w-1/3 aspect-video"
          />
          {/* post details and title */}
          <div className="w-2/3">
            {/* details */}
            <div className="flex items-center gap-4 text-sm lg:text-base mb-4">
              <h2 className="font-semibold">02.</h2>
              <Link className="text-blue-800">Web Design</Link>
              <span className="text-gray-500 text-sm">2 days ago</span>
            </div>
            {/* title */}
            <Link className="text-base sm:text-lg md:text-2xl lg:text-xl xl:text-2xl font-medium">
              Lorem ipsum dolor sit amet consectetur.
            </Link>
          </div>
        </div>
        <div className="lg:h-1/3 flex justify-between gap-4">
          <Image
            src="featured3.jpeg"
            alt="featured 3"
            className="rounded-3xl object-cover w-1/3 aspect-video"
          />
          {/* post details and title */}
          <div className="w-2/3">
            {/* details */}
            <div className="flex items-center gap-4 text-sm lg:text-base mb-4">
              <h2 className="font-semibold">02.</h2>
              <Link className="text-blue-800">Web Design</Link>
              <span className="text-gray-500 text-sm">2 days ago</span>
            </div>
            {/* title */}
            <Link className="text-base sm:text-lg md:text-2xl lg:text-xl xl:text-2xl font-medium">
              Lorem ipsum dolor sit amet consectetur.
            </Link>
          </div>
        </div>
        <div className="lg:h-1/3 flex justify-between gap-4">
          <Image
            src="featured4.jpeg"
            alt="featured 4"
            className="rounded-3xl object-cover w-1/3 aspect-video"
          />
          {/* post details and title */}
          <div className="w-2/3">
            {/* details */}
            <div className="flex items-center gap-4 text-sm lg:text-base mb-4">
              <h2 className="font-semibold">02.</h2>
              <Link className="text-blue-800">Web Design</Link>
              <span className="text-gray-500 text-sm">2 days ago</span>
            </div>
            {/* title */}
            <Link className="text-base sm:text-lg md:text-2xl lg:text-xl xl:text-2xl font-medium">
              Lorem ipsum dolor sit amet consectetur.
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeaturedPosts;
