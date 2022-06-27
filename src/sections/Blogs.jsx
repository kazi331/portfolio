import SingleBlog from './SingleBlog';

const Blogs = () => {
  const blogs = [1, 2, 3, 4]
  return (
    <section className="text-gray-400  body-font">
      <h2 className="text-4xl md:text-6xl text-center md:mb-10 mt-12 font-bold">Recent Blogs</h2>
    <div className="container px-5 py-16 mx-auto">
      <div className="flex flex-wrap -m-4">
         {blogs.map((item, i) => <SingleBlog key={i} item={item}/>)}
        </div>
      </div>
    </section>
  );
};

export default Blogs;