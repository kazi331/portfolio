import SingleBlog from './SingleBlog';

const Blogs = () => {
  const blogs = [1, 2, 3, 4]
  return (
    <section className="text-gray-400 bg-gray-900 body-font">
    <div className="container px-5 py-16 mx-auto">
      <div className="flex flex-wrap -m-4">
         {blogs.map((item, i) => <SingleBlog key={i} item={item}/>)}
        </div>
      </div>
    </section>
  );
};

export default Blogs;