import React from 'react';

export default function Home() {
    return (
        <div>
            <section id="projects" className="text-gray-400 bg-gray-900 body-font">
                <div className="container px-5 py-10 mx-auto text-center lg:px-40">
                    <div className="flex flex-col w-full mb-20">
                        {/* <a href=''> add image here, link the project</a> */}

                        <h1 className="sm:text-4xl text-3xl font-medium title-font mb-4 text-white">
                            {/* fill in a project title */}
                        </h1>
                        <p className="lg:w-2/3 mx-auto leading-relaxed text-base">
                            {/* describe the project here */}
                        </p>
                    </div>
                </div>
            </section>
        </div>
    );
}
