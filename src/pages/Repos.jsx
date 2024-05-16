import { useEffect, useState } from 'react';
import SingleRepo from '../sections/SingleRepo';


const Repos = () => {
    const [repos, setRepos] = useState([])
    useEffect(() => {
        fetch("https://api.github.com/users/kazi331/repos")
            .then(res => res.json())
            .then(data => {
                setRepos(data)
            })
    }, [])
    console.log(repos)
    return (<>
        <nav className='container'>
            <a aria-label='link to home' href="/" className='bg-gray-500 hover:bg-opacity-80 py-2 px-4 rounded-lg ml-4 inline-block my-2 '> &#8592; Back to home</a>
        </nav>
        <section className=" body-font">
            <div className="container px-5 py-24 mx-auto">
                <div className="flex flex-col text-center w-full mb-20">
                    <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-white">My Repositories</h1>
                </div>

                {
                    repos.length < 1 && <div className="flex items-center justify-center">
                        <h2 className='font-bold text-xl'> loading... </h2>
                    </div>
                }

                <div className="flex flex-wrap -m-2">
                    {
                        repos?.map(repo => <SingleRepo key={repo.id} repo={repo} />)
                    }

                </div>
            </div>
        </section>
    </>
    );
};

export default Repos;