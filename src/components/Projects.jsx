import React from 'react';
import { Link } from 'react-router-dom';
import { projects } from '../data/projects';

const Projects = () => {
    return (
        <section id="projects" className="py-20 bg-black">
            <div className="max-w-7xl mx-auto px-6">
                {/* Section Heading */}
                <h2 className="text-4xl md:text-5xl font-bold text-white text-center mb-16">
                    Projects
                </h2>

                {/* Project Cards Grid*/}
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
                    {projects.slice(0, 3).map((project, index) => (
                        <div
                            key={index}
                            className="bg-[#0a0a0a] border border-gray-700/50 rounded-lg overflow-hidden hover:border-gray-600 transition-all shadow-xl h-full flex flex-col"
                        >
                            {/* Project Image */}
                            <div className="relative h-56 overflow-hidden flex-shrink-0">
                                <img
                                    src={project.image}
                                    alt={project.title}
                                    className="w-full h-full object-cover"
                                />
                            </div>

                            {/* Project Content */}
                            <div className="text-center py-12 px-8 flex-1 flex flex-col">
                                {/* Title */}
                                <h3 className="text-4xl font-bold text-white tracking-wide mb-6">
                                    {project.title}
                                </h3>

                                {/* Description - Limited to 4 lines */}
                                <p className="text-gray-400 text-sm leading-relaxed mb-8 font-light line-clamp-4 flex-1">
                                    {project.description}
                                </p>

                                {/* View Details Button */}
                                <Link
                                    to={`/projects/${project.id}`}
                                    className="px-12 py-3 border border-white text-white font-semibold text-lg hover:bg-white hover:text-black transition-all duration-300 inline-block"
                                >
                                    View Details
                                </Link>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Explore All Button */}
                <div className="flex justify-center">
                    <Link
                        to="/projects"
                        className="px-12 py-3 bg-white text-black font-medium rounded hover:bg-gray-200 transition-all"
                    >
                        Explore All
                    </Link>
                </div>
            </div>
        </section>
    );
};

export default Projects;