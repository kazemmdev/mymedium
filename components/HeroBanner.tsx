const HeroBanner = () => {
    return (
        <div className="flex justify-center bg-teal-100 border-b border-black">
            <div className="max-w-7xl w-full bg-hero bg-hero-bottom
                md:bg-hero-bottom-md sm:bg-hero-bottom-sm bg-no-repeat">
                <div className="w-full pt-4 pb-0 px-6 md:px-9">
                    <div className="max-w-4xl pb-16">
                        <div className="max-w-xl">
                            <h2 className="hidden md:block text-7xl font-normal font-serif">
                                Medium is a place to write, read, and connect
                            </h2>
                            <h2 className="md:hidden text-5xl font-normal max-w-md font-serif">
                                Write, read, and connect
                            </h2>
                            <h3 className="text-xl font-light pt-4 mb-10 w-4/5">
                                It's easy and free to post your thinking on any topic
                                and connect with millions of readers
                            </h3>
                            <a className="text-lg bg-white  border border-black px-4 py-3 rounded-full"
                               href="https://medium.com/">Start Writing</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HeroBanner;