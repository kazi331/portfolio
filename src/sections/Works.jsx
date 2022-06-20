import SingleWork from "./SingleWork";

const Works = () => {
    const works = [
      {
        id: 1,
        name: 'Superstar Electronics Webstore',
        live: 'https://manufacurer-website.web.app/',
        client: 'https://github.com/kazi331/Manufacturer-webstore',
        server: 'https://github.com/kazi331/manufacturer-website-server',
        thumb: 'https://res.cloudinary.com/phoenix-web/image/upload/v1655698729/portfolio/hvgdgrrbmnkyezwikje9.png',
        tech: ['html', 'css', 'tailwindcss', 'react', 'firebase', 'nodejs', 'express', 'mongodb'],
        features: [
          'Brand companies can showcase their product to the customers.',
          'Customers can visit and purchase products.',
          'Both Customers and Admins have separate panels to manage orders, products etc.',
          'Login and signup system implemented with firebase.'
        ]
      },
      {
        id: 2,
        name: 'Phoenix Inventory Management',
        live: 'https://assignment-11-e988e.web.app/',
        client: 'https://github.com/kazi331/Warehouse-management',
        server: 'https://github.com/kazi331/Warehouse-management-server',
        thumb: 'https://res.cloudinary.com/phoenix-web/image/upload/v1655698725/portfolio/r0bhwx0vpslfkcbv91zq.png',
        tech: ['html', 'css', 'tailwindcss', 'react', 'firebase', 'nodejs', 'express', 'mongodb'],
        features: [
          'Manufacturer Company uses this type of site to manage their warehouse/store.',
          'Admins and wholesale customers have a separate dashboard panel to manage their products and orders and payment.',
          'Login and sign-up system implemented with firebase.'
        ]
      },
      {
        id: 3,
        name: 'Simple Course Website',
        live: 'https://sayems-paradise.netlify.app/',
        client: 'https://github.com/kazi331/Sayem-s-Paradise',
        thumb: 'https://res.cloudinary.com/phoenix-web/image/upload/v1655698727/portfolio/p2ubfoarq0dzgyjwrvuz.png',
        tech: ['html', 'css', 'tailwindcss', 'react', 'firebase'],
        features: [
          "A website that maintains web courses.",
          "Admin can manage course and prices",
          "Admin can update course",
          "Login and signup system implemented with firebase."
        ]

      }
  ]
  console.log(JSON.stringify(works ))
    return (
        <section className="text-gray-400 body-font  mt-12 md:mt-40 px-5">
            <h2 className="text-4xl md:text-6xl  text-center font-bold">My works</h2>
        <div className="container md:py-16 mx-auto">
          <div className="flex flex-wrap -mx-4 my-8 gap-2">
            {
                works.map((work, i)=> <SingleWork key={i} work={work} />)
            }
           
          </div>
        </div>
      </section>
    );
};

export default Works;