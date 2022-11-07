import React from 'react';
import homework1 from '../../assets/password.jpg'
import homework2 from '../../assets/social.jpg'
import homework3 from '../../assets/flashcard.jpg'
import homework4 from '../../assets/climate.jpg'
import homework5 from '../../assets/notes.jpg'
import homework6 from '../../assets/quiz.jpg'

export default function Home() {
    return (
        <div>
            <section id="projects" className="text-gray-400 bg-gray-900 body-font">
                <div className="container px-5 py-10 mx-auto text-center lg:px-40">
                    <div className="flex flex-col w-full mb-20">

                        <h1 className="sm:text-4xl text-3xl font-medium title-font mb-4 text-black">
                            JavaScript: Password Generator
                        </h1>
                        <p className="lg:w-2/3 mx-auto leading-relaxed text-base">
                            This application will create a random password based off of certain options that the user selects for the password. Such as how long they want the password to be, numbers in it, uppercase, lowercase and more!
                        </p>
                        <a href='https://brad1200.github.io/homework-3/'><img src={homework1} width='100px' height='100px' /> Click here to view the application.</a>
                    </div>
                </div>
            </section>

            <section id="projects" className="text-gray-400 bg-gray-900 body-font">
                <div className="container px-5 py-10 mx-auto text-center lg:px-40">
                    <div className="flex flex-col w-full mb-20">

                        <h1 className="sm:text-4xl text-3xl font-medium title-font mb-4 text-black">
                            Social Network API
                        </h1>
                        <p className="lg:w-2/3 mx-auto leading-relaxed text-base">
                            This application allows the user to share thoughts, reactions to friends thoughts, and are able to create a friends list. This application uses Mongoose packages to help run this application.
                        </p>
                        <a href='https://github.com/brad1200/Social-Network-API'><img src={homework2} width='100px' height='100px' /> Click here to view the application.</a>
                    </div>
                </div>
            </section>

            <section id="projects" className="text-gray-400 bg-gray-900 body-font">
                <div className="container px-5 py-10 mx-auto text-center lg:px-40">
                    <div className="flex flex-col w-full mb-20">

                        <h1 className="sm:text-4xl text-3xl font-medium title-font mb-4 text-black">
                            Group Project 2: Flashcard Creator
                        </h1>
                        <p className="lg:w-2/3 mx-auto leading-relaxed text-base">
                            This application allows the user to create their own flashcards to study, they can then add flashcards to folders if they want to have a certain topic to study from. They can scroll through questions in a topic, then click for the answer. The user can then also delete flashcards if needed.
                        </p>
                        <a href='https://github.com/nhastings1/project-2-flashdata/tree/main'><img src={homework3} width='100px' height='100px' /> Click here to view the application.</a>
                    </div>
                </div>
            </section>

            <section id="projects" className="text-gray-400 bg-gray-900 body-font">
                <div className="container px-5 py-10 mx-auto text-center lg:px-40">
                    <div className="flex flex-col w-full mb-20">

                        <h1 className="sm:text-4xl text-3xl font-medium title-font mb-4 text-black">
                            Group Project 1: Concert Weather App
                        </h1>
                        <p className="lg:w-2/3 mx-auto leading-relaxed text-base">
                            This application allows a user to search for certain concert venues so they are allowed to see what the weather will be for certain days of events so the user can go to the concert prepared for any weather that day.
                        </p>
                        <a href='https://github.com/nhastings1/Concert-Weather-Connection/tree/main'><img src={homework4} width='100px' height='100px' /> Click here to view the application.</a>
                    </div>
                </div>
            </section>

            <section id="projects" className="text-gray-400 bg-gray-900 body-font">
                <div className="container px-5 py-10 mx-auto text-center lg:px-40">
                    <div className="flex flex-col w-full mb-20">

                        <h1 className="sm:text-4xl text-3xl font-medium title-font mb-4 text-black">
                            Note Taker
                        </h1>
                        <p className="lg:w-2/3 mx-auto leading-relaxed text-base">
                            This application allows the user to create and delete notes when they please. This application was used by express.js in the back end, it will save and retrieve note data from a JSON file.
                        </p>
                        <a href='https://github.com/brad1200/note-taker'><img src={homework5} width='100px' height='100px' /> Click here to view the application.</a>
                    </div>
                </div>
            </section>

            <section id="projects" className="text-gray-400 bg-gray-900 body-font">
                <div className="container px-5 py-10 mx-auto text-center lg:px-40">
                    <div className="flex flex-col w-full mb-20">

                        <h1 className="sm:text-4xl text-3xl font-medium title-font mb-4 text-black">
                            Web API: Code Quiz
                        </h1>
                        <p className="lg:w-2/3 mx-auto leading-relaxed text-base">
                            This application gives the user questions to answer and then will give them a percentage result at the end along with high scores that the user gets after the quiz is over. There is also a timer element added to the quiz as well.
                        </p>
                        <a href='https://github.com/brad1200/homework-4'><img src={homework6} width='100px' height='100px' /> Click here to view the application.</a>
                    </div>
                </div>
            </section>
        </div>

    );
}
