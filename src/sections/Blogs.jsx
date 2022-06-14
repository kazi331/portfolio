import SingleBlog from './SingleBlog';

const Blogs = () => {
  const blogs = [1,2,3,4]
    return (
        <section className="text-gray-400 bg-gray-900 body-font">
  <div className="container px-5 py-24 mx-auto">
    <div className="flex flex-wrap -m-4 justify-center lg:justify-start ">
      {blogs.map((blog,i)=><SingleBlog key={i} />)}
    </div>
  </div>
</section>
    );
};

export default Blogs;