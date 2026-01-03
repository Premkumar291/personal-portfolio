import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { projects } from '../data/projects';
import Footer from './Footer';
import { Github, Globe, AlertCircle, ArrowLeft } from 'lucide-react';
import { Background } from './backgroundAnimation';

const AllProjects = () => {
    // Scroll to top on mount
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="bg-[#050505] min-h-screen relative overflow-hidden">
            <Background />

            <div className="pt-24 md:pt-32 pb-20 px-6 relative z-10">
                <div className="max-w-6xl mx-auto">


                    {/* Header */}
                    <div className="text-right mb-24">
                        <h2 className="text-4xl md:text-5xl font-bold text-white mb-4 tracking-tight">
                            Project Highlights
                        </h2>
                        <div className="flex justify-end items-center gap-4">
                            <div className="h-2 w-32 bg-[#333] rounded-full"></div>
                            <p className="text-gray-400 text-sm max-w-md text-right leading-relaxed">
                                Discover a curated collection of innovative projects showcasing creativity, technical skill, and inspiration. Search
                            </p>
                        </div>
                    </div>

                    {/* Projects List */}
                    <div className="space-y-24">
                        {projects.map((project, index) => (
                            <div
                                key={index}
                                className="relative border border-gray-800 bg-black/40 backdrop-blur-sm p-6 md:p-10 rounded-lg group hover:border-gray-600 transition-colors"
                            >
                                {/* Center Title Overlay similar to design */}
                                <div className="absolute -top-6 left-1/2 -translate-x-1/2 bg-[#050505] px-6 py-2 text-xl md:text-2xl text-gray-400 font-medium tracking-wide z-20">
                                    {project.title}
                                </div>

                                <div className="flex flex-col md:flex-row gap-8 md:gap-16 items-center">
                                    {/* Project Image */}
                                    <div className="w-full md:w-1/2 relative">
                                        <div className="relative rounded-lg overflow-hidden border border-gray-800 aspect-video shadow-2xl">
                                            <img
                                                src={project.image}
                                                alt={project.title}
                                                className="w-full h-full object-cover"
                                            />
                                            {/* Browser Header Simulation */}
                                            <div className="absolute top-0 left-0 w-full h-6 bg-[#1a1a1a] flex items-center gap-1.5 px-3">
                                                <div className="w-2 h-2 rounded-full bg-red-500/50" />
                                                <div className="w-2 h-2 rounded-full bg-yellow-500/50" />
                                                <div className="w-2 h-2 rounded-full bg-green-500/50" />
                                            </div>
                                        </div>
                                    </div>

                                    {/* Content */}
                                    <div className="w-full md:w-1/2 flex flex-col items-end text-right">
                                        <h3 className="hidden md:block text-2xl font-bold text-white mb-6">
                                            {project.title}
                                        </h3>

                                        <p className="text-gray-400 leading-relaxed mb-10 font-light text-sm md:text-base">
                                            {project.description}
                                        </p>

                                        {/* Buttons */}
                                        <div className="flex flex-wrap justify-end gap-4">
                                            {project.demoLink ? (
                                                <a
                                                    href={project.demoLink}
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    className="flex items-center gap-2 px-5 py-2 border border-green-900/50 text-green-500 text-sm hover:bg-green-900/10 transition-colors rounded-sm tracking-wider uppercase font-medium"
                                                >
                                                    <Globe size={16} />
                                                    See Demo
                                                </a>
                                            ) : (
                                                <div className="flex items-center gap-2 px-5 py-2 border border-red-900/50 text-red-500 text-sm bg-red-900/5 rounded-sm tracking-wider uppercase font-medium cursor-not-allowed">
                                                    <AlertCircle size={16} />
                                                    Unavailable
                                                </div>
                                            )}

                                            {project.githubLink && project.githubLink !== '#' ? (
                                                <a
                                                    href={project.githubLink}
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    className="flex items-center gap-2 px-6 py-2 border border-teal-900/50 text-teal-400 text-sm hover:bg-teal-900/10 transition-colors rounded-sm tracking-wider uppercase font-medium"
                                                >
                                                    <Github size={16} />
                                                    Github
                                                </a>
                                            ) : (
                                                <div className="flex items-center gap-2 px-6 py-2 border border-red-900/50 text-red-500 text-sm bg-red-900/5 rounded-sm tracking-wider uppercase font-medium cursor-not-allowed">
                                                    <Github size={16} />
                                                    Unavailable
                                                </div>
                                            )}

                                            <Link
                                                to={`/projects/${project.id}`}
                                                className="flex items-center gap-2 px-6 py-2 border border-gray-700 text-white text-sm hover:bg-white/5 transition-colors rounded-sm tracking-wider uppercase font-medium"
                                            >
                                                View Details
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

        </div>
    );
};

export default AllProjects;
