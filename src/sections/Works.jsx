import SingleWork from "./SingleWork";

const Works = () => {
    const myWorks = [1,2,3]
    return (
        <section className="text-gray-400 body-font  mt-12 md:mt-40 px-5">
            <h2 className="text-4xl md:text-6xl  text-center font-bold">My works</h2>
        <div className="container md:py-16 mx-auto">
          <div className="flex flex-wrap -mx-4 my-8 gap-2">
            {
                myWorks.map((work, i)=> <SingleWork key={i} />)
            }
           
          </div>
        </div>
      </section>
    );
};

export default Works;