import { Link } from 'react-router-dom';
import Image from './Image';

const Post = () => {
  return (
    <div className="flex flex-col xl:flex-row gap-8">
      {/* image */}
      <div className="md:hidden xl:block xl:w-1/3">
        <Image src="postImg.jpeg" className="rounded-2xl object-cover" imgWidth="735" />
      </div>
      {/* details */}
      <div className="flex flex-col gap-4 xl:w-2/3">
        <Link to="/test" className="text-4xl font-semibold">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit.{' '}
        </Link>

        <div className="flex items-center gap-2 text-gray-400 text-sm">
          <span>Written By</span>
          <Link to="/test" className="text-blue-800">
            Koko Loko
          </Link>
          <span>on</span>
          <Link to="/test" className="text-blue-800">
            Web Design
          </Link>
          <span>3 days ago</span>
        </div>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore
          natus temporibus quia sint. Molestias non iure enim est quidem! Ab
          autem harum hic aut. Et est praesentium quibusdam doloremque autem.
        </p>
        <Link to="/test" className='underline text-sm text-blue-800'>Read More</Link>
      </div>
    </div>
  );
};

export default Post;
