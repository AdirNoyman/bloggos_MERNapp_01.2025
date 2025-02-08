import { Link } from 'react-router-dom';
import Image from '../components/Image';
const SinglePostPage = () => {
  return (
    <div className="flex flex-col gap-8">
      {/* hero */}
      <div className="flex gap-8">
        {/* post info and title */}
        <div className="lg:w-3/5 flex flex-col gap-8">
          <h1 className='text-xl md:text-3xl xl:text-4xl 2xl:text-5xl font-semibold'>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Esse
            repellendus sint.
          </h1>
          <div className="flex items-center gap-2 text-gray-400 text-sm">
            <span>Written by</span>
            <Link to="/author/1" className='text-blue-800 hover:text-blue-600'>Koko Loko</Link>
            <span>on</span>
            <Link className='text-blue-800 hover:text-blue-600'>Web Design</Link>
            <span>2 days ago</span>
            
          </div>
          <hr className='border-gray-300 mt-[-20px] max-w-[90%]'/>
          <p className='text-gray-500 font-medium mt-[-10px]'>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore natus temporibus quia sint. Molestias non iure enim est quidem! Ab autem harum hic aut. Et est praesentium quibusdam doloremque autem.
          </p>
        </div>
        {/* post image */}
        <div className="hidden lg:block w-2/5">
          <Image src="postImg.jpeg" className="rounded-2xl object-cover" imgWidth="600"/>
        </div>
      </div>
      {/* content */}
      <div className=""></div>
    </div>
  );
};

export default SinglePostPage;
