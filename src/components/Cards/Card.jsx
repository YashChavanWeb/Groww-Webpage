/* eslint-disable react/prop-types */
import { useState } from 'react';
import edu from '../../assets/courses/edu.jpg';

const CourseModal = ({ title, details, closeModal }) => {
    return (
        <div className="fixed top-0 left-0 w-full h-full flex justify-center items-center bg-blue-950 bg-opacity-50 z-20 overflow-auto mt-[2.1rem]">
            <div className="bg-blue-200 rounded-lg p-8 flex flex-col items-center justify-center mx-8 w-[50%]">
                <h2 className="text-xl sm:text-2xl font-bold mb-4 text-blue-950">{title}</h2>
                <div className="flex justify-center flex-wrap">
                    <img src={edu} alt="edu" className="text-center w-[200px] sm:w-[400px] sm:h-[300px] rounded-2xl object-cover" />
                </div>
                <ul className="flex flex-wrap justify-center items-center gap-8">
                    {details.map((detail, index) => (
                        <li key={index} className="my-4 font-semibold bg-blue-900 p-2 rounded text-white">
                            {detail}
                        </li>
                    ))}
                </ul>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam accusamus reiciendis ad quibusdam assumenda suscipit maxime dolore temporibus voluptates nihil, laudantium similique aliquid sequi! Magnam officiis dolorem laboriosam asperiores quae eligendi at sit architecto aliquid error. Blanditiis, eos omnis ipsam assumenda nobis voluptatum. Fugiat vitae sequi eius repellendus beatae tempora!</p>
                <button
                    className="mt-4 bg-red-700 text-white px-4 py-2 rounded hover:bg-red-500"
                    onClick={closeModal}
                >
                    Close
                </button>
            </div>
        </div>
    );
};

const CourseSection = ({ title, imgAlt, imgSrc, courseDetails, content }) => {
    const [modalOpen, setModalOpen] = useState(false);

    const openModal = () => {
        setModalOpen(true);
    };

    const closeModal = () => {
        setModalOpen(false);
    };

    return (
        <>
            <div className='flex sm:flex-col justify-center items-center'>
                <h2 className="font-bold text-center text-2xl lg:text-3xl md:text-3xl">{title}</h2>
                <div className="bg-blue-950 text-white rounded-3xl p-6 w-full lg:w-[430px] md:w-[530px] sm:w-[480px] sm:mt-2 flex flex-col justify-between gap-4">

                    <div className="flex justify-center flex-wrap">
                        <img src={imgSrc} alt={imgAlt} className="text-center w-[200px] sm:w-[500px] sm:h-[300px] rounded-2xl" />
                    </div>
                    {courseDetails && (
                        <>
                            <ul className="flex flex-wrap justify-center items-center gap-2">
                                {courseDetails.map((detail, index) => (
                                    <li key={index} className="font-semibold sm:text-xl pl-4">{detail}</li>
                                ))}
                            </ul>
                            <p className="text-sm mt-3 text-justify">{content}</p>
                        </>
                    )}
                    <button className="w-full bg-yellow-300 text-center rounded-lg py-3 text-lg mt-3 cursor-pointer text-black hover:bg-yellow-200" onClick={openModal}>View Courses</button>
                </div>
            </div>

            {modalOpen && (
                <CourseModal title={title} details={courseDetails} closeModal={closeModal} />
            )}
        </>
    );
};

function Card() {
    return (
        <section className='mt-10'>
            <h2 className="text-2xl text-center font-bold sm:text-3xl md:text-5xl lg:text-center text-red-600">Our Courses</h2>
            <div className="px-4 mb-24 sm:flex flex-wrap justify-center gap-14 mt-6">
                <CourseSection
                    title="SCHOOL"
                    imgSrc={edu}
                    imgAlt="Grade 5th to 10th"
                    courseDetails={["GRADE 5th to 10th"]}
                    content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi vel assumenda nihil sed iusto nam deserunt sapiente laborum quasi minus. Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi vel assumenda nihil sed iusto nam deserunt sapiente laborum quasi minus."
                />
                <CourseSection
                    title="SCIENCE"
                    imgSrc={edu}
                    imgAlt="SCIENCE"
                    courseDetails={["11th", "12th", "JEE(MAINS)", "NEET", "MHT-CET(MED & ENGG.)"]}
                    content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi vel assumenda nihil sed iusto nam deserunt sapiente laborum quasi minus."
                />
            </div>

            <div className="px-4 mb-36 sm:flex flex-wrap justify-center gap-14">
                <CourseSection
                    title="COMMERCE"
                    imgSrc={edu}
                    imgAlt="COMMERCE"
                    courseDetails={["F.Y.J.C", "S.Y.J.C", "B.COM", "BAF", "CA FOUNDATION"]}
                    content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi vel assumenda nihil sed iusto nam deserunt sapiente laborum quasi minus."
                />
                <CourseSection
                    title="TECH"
                    imgSrc={edu}
                    imgAlt="TECH"
                    courseDetails={["C & C++", "JAVA", "PYTHON", "HTML & CSS"]}
                    content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi vel assumenda nihil sed iusto nam deserunt sapiente laborum quasi minus."
                />
            </div>

            <h2 className="text-2xl font-bold w-full text-center sm:text-3xl lg:text-5xl text-red-600">{`What's special?`}</h2>

            <div className="flex justify-center mb-24">
                <div className="w-[80%] sm:h-[750px] md:h-[800px] lg:h-[600px] bg-blue-950 rounded-3xl mt-16 mb-6 sm:mb-16 lg:flex justify-center items-center text-white">
                    <div className="grid justify-center grid-cols-1 sm:grid-cols-2 lg:grid-cols-3  md:grid-cols-2 lg:gap-16">
                        <div className="grid justify-center">
                            <div className="rounded-full w-[170px] h-[170px] overflow-hidden bg-custom mt-4 m-auto flex justify-center items-center">
                                <img src="https://i.imgur.com/NIickO3.jpeg" alt="Personalized Study Tools" className="min-w-full min-h-full object-cover" />
                            </div>
                            <h2 className="text-[16px] mt-4 font-bold lg:text-xl">
                                <i className="fas fa-check-circle mr-2 text-green-500" />Daily live Interactive classes
                            </h2>
                        </div>

                        <div className="grid justify-center">
                            <div className="rounded-full w-[170px] h-[170px] overflow-hidden bg-custom mt-4  m-auto  flex justify-center items-center">
                                <img src="https://i.imgur.com/QSwVmig.jpeg" alt="Personalized Study Tools" className="min-w-full min-h-full object-cover" />
                            </div>
                            <h2 className="text-[16px] mt-4 font-bold lg:text-xl">
                                <i className="fas fa-check-circle mr-2 text-green-500" />Personalized study tools
                            </h2>
                        </div>

                        <div className="grid justify-center">
                            <div className="rounded-full w-[170px] h-[170px] overflow-hidden bg-custom mt-4 m-auto flex justify-center items-center">
                                <img src="https://i.imgur.com/2h7IoOC.jpeg" alt="Personalized Study Tools" className="min-w-full min-h-full object-cover" />
                            </div>
                            <h2 className="text-[16px] mt-4 font-bold lg:text-xl">
                                <i className="fas fa-check-circle mr-2 text-green-500" />Weekly self study plan
                            </h2>
                        </div>

                        <div className="grid justify-center">
                            <div className="rounded-full w-[170px] h-[170px] overflow-hidden bg-custom mt-4  m-auto flex justify-center items-center">
                                <img src="https://i.imgur.com/NlyJ8Nw.jpeg" alt="Personalized Study Tools" className="min-w-full min-h-full object-cover" />
                            </div>
                            <h2 className="text-[16px] mt-4 font-bold lg:text-xl">
                                <i className="fas fa-check-circle mr-2 text-green-500" />Score Improvement strategy
                            </h2>
                        </div>

                        <div className="grid justify-center">
                            <div className="rounded-full w-[170px] h-[170px] overflow-hidden bg-custom mt-4  m-auto flex justify-center items-center">
                                <img src="https://i.imgur.com/2h7IoOC.jpeg" alt="Personalized Study Tools" className="min-w-full min-h-full object-cover" />
                            </div>
                            <h2 className="text-[16px] mt-4 font-bold lg:text-xl">
                                <i className="fas fa-check-circle mr-2 text-green-500" />Timely syllabus completion
                            </h2>
                        </div>

                        <div className="grid justify-center">
                            <div className="rounded-full w-[170px] h-[170px] overflow-hidden bg-custom mt-4  m-auto flex justify-center items-center">
                                <img src="https://i.imgur.com/QSwVmig.jpeg" alt="Personalized Study Tools" className="min-w-full min-h-full object-cover" />
                            </div>
                            <h2 className="text-[16px] my-4 font-bold lg:text-xl">
                                <i className="fas fa-check-circle mr-2 text-green-500" />Tech Base Teaching
                            </h2>
                        </div>

                    </div>
                </div>
            </div>
        </section>
    );
}

export default Card;
