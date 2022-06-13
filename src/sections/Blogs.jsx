import React from 'react';
import SingleBlog from './SingleBlog';

const Blogs = () => {
  const blogs = [1,2,3,4]
    return (
        <section class="text-gray-400 bg-gray-900 body-font">
  <div class="container px-5 py-24 mx-auto">
    <div class="flex flex-wrap -m-4 justify-center lg:justify-start ">
      {blogs.map((blog,i)=><SingleBlog key={i} />)}
    </div>
  </div>
</section>
    );
};

export default Blogs;