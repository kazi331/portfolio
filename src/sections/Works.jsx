import SingleWork from "./SingleWork";

const Works = () => {
  const works = [
    {
      id: 1,
      name: 'Superstar Electronics Webstore',
      live: 'https://manufacurer-website.web.app/',
      client: 'https://github.com/kazi331/Manufacturer-webstore',
      server: 'https://github.com/kazi331/manufacturer-website-server',
      img: 'https://res.cloudinary.com/phoenix-web/image/upload/v1655698729/portfolio/hvgdgrrbmnkyezwikje9.png',
      thumb: 'https://res.cloudinary.com/phoenix-web/image/upload/c_thumb,w_200,g_face/v1655698729/portfolio/hvgdgrrbmnkyezwikje9.png',
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
      img: 'https://res.cloudinary.com/phoenix-web/image/upload/v1655698725/portfolio/r0bhwx0vpslfkcbv91zq.png',
      thumb: 'https://res.cloudinary.com/phoenix-web/image/upload/c_thumb,w_200,g_face/v1655698725/portfolio/r0bhwx0vpslfkcbv91zq.png',
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
      img: 'https://res.cloudinary.com/phoenix-web/image/upload/v1655698727/portfolio/p2ubfoarq0dzgyjwrvuz.png',
      thumb: 'https://res.cloudinary.com/phoenix-web/image/upload/c_thumb,w_200,g_face/v1655698727/portfolio/p2ubfoarq0dzgyjwrvuz.png',
      tech: ['html', 'css', 'tailwindcss', 'react', 'firebase'],
      features: [
        "A website that maintains web courses.",
        "Admin can manage course and prices",
        "Admin can update course",
        "Login and signup system implemented with firebase."
      ]

    },
    {
      id: 4,
      name: 'Ebar Vinno Kicu hok',
      live: 'https://vinnokichu-ks.netlify.app/',
      client: 'https://github.com/kazi331/Ebar-vinno-kicu-hok',
      img: 'https://res.cloudinary.com/phoenix-web/image/upload/v1656048706/portfolio/jmlcayz8rnaskizwuwzu.png',
      thumb: 'https://res.cloudinary.com/phoenix-web/image/upload/c_thumb,w_200,g_face/v1656048706/portfolio/jmlcayz8rnaskizwuwzu.png',
      tech: ['html', 'css', 'javascript'],
      features: [
        "A classical product review website",
        "Public user can post their review on this site",
        "Public can see other's review on the site"
      ]
    },
    {
      id: 5,
      name: 'My type Buyer',
      live: 'https://taupe-duckanoo-889b2f.netlify.app/',
      client: 'https://github.com/kazi331/Lucky-Buyer',
      img: 'https://res.cloudinary.com/phoenix-web/image/upload/v1656048706/portfolio/si78l5muiokhtvqnjmsl.png',
      thumb: 'https://res.cloudinary.com/phoenix-web/image/upload/c_thumb,w_200,g_face/v1656048706/portfolio/si78l5muiokhtvqnjmsl.png',
      tech: ['html', 'css', 'javascript'],
      features: [
        "Random product selector website.",
        "Customer will choose some product",
        "Website will choice one from them"
      ]
    },
    {
      id: 6,
      name: 'Finance Calculator',
      live: 'https://assignment5financecalculator.netlify.app/',
      client: 'https://github.com/kazi331/Finance-Calculator',
      img: 'https://res.cloudinary.com/phoenix-web/image/upload/v1656048820/portfolio/lbdo1dig5lcths0tuvql.png',
      thumb: 'https://res.cloudinary.com/phoenix-web/image/upload/c_thumb,w_200,g_face/v1656048820/portfolio/lbdo1dig5lcths0tuvql.png',
      tech: ['html', 'css', 'javascript', 'bootstrap'],
      features: [
        "A simple finance management module",
        "User will calculate their income and expence",
        "They will be able to calculate how much they can save"
      ]
    }
  ]
  return (
    <section className="text-gray-400 body-font  mt-12 md:mt-40 px-5">
      <h2 className="text-4xl md:text-6xl  text-center font-bold">My works</h2>
      <div className="container md:py-16 mx-auto">
        <section className="flex flex-wrap -mx-4 my-8 gap-2">
          {
            works.map((work, i) => <SingleWork key={i} work={work} />)
          }

        </section>
      </div>
    </section>
  );
};

export default Works;