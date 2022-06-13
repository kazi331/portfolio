import SingleWork from "./SingleWork";

const Works = () => {
    const myWorks = [1,2,3,4]
    return (
        <section className="text-gray-400 body-font mt-40">
            <h2 className="text-6xl font-bold">Latest works</h2>
        <div className="container px-5 py-24 mx-auto">
          <div className="flex flex-wrap -mx-4 -my-8 gap-2">
            {
                myWorks.map((work, i)=> <SingleWork key={i} />)
            }
           
          </div>
        </div>
      </section>
    );
};

export default Works;