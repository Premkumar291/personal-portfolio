import React, { useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { projects } from '../data/projects';
import Footer from './Footer';
import { ArrowLeft, Github, Globe, CheckCircle2, XCircle } from 'lucide-react';
import { Background } from './backgroundAnimation';

const ProjectDetails = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const project = projects.find(p => p.id === id);

    // Scroll to top on mount
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    // If project not found, show 404
    if (!project) {
        return (
            <div className="bg-[#050505] min-h-screen relative overflow-hidden flex items-center justify-center">
                <Background />
                <div className="text-center relative z-10">
                    <h1 className="text-6xl font-bold text-white mb-4">404</h1>
                    <p className="text-gray-400 mb-8">Project not found</p>
                    <Link
                        to="/projects"
                        className="inline-flex items-center gap-2 px-6 py-3 bg-white/10 text-white hover:bg-white/20 transition-colors rounded"
                    >
                        <ArrowLeft size={20} />
                        Back to Projects
                    </Link>
                </div>
            </div>
        );
    }

    return (
        <div className="bg-[#050505] min-h-screen relative overflow-hidden">
            <Background />

            <div className="pt-32 pb-20 px-6 relative z-10">
                <div className="max-w-4xl mx-auto">
                    {/* Back Button */}
                    <div className="mb-12">
                        <Link
                            to="/projects"
                            className="inline-flex items-center gap-2 text-gray-400 hover:text-white transition-colors group"
                        >
                            <ArrowLeft size={20} className="group-hover:-translate-x-1 transition-transform" />
                            <span className="font-medium">Back to Projects</span>
                        </Link>
                    </div>

                    {/* Title Section */}
                    <div className="mb-16">
                        <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 tracking-tight">
                            {project.title}
                        </h1>
                        <p className="text-gray-400 text-lg leading-relaxed">
                            {project.description}
                        </p>
                    </div>

                    {/* Challenges Section */}
                    {project.challenges && project.challenges.length > 0 && (
                        <div className="mb-12">
                            <h2 className="text-2xl font-bold text-white mb-6 tracking-tight">
                                Challenges
                            </h2>
                            <div className="space-y-4">
                                {project.challenges.map((challenge, index) => (
                                    <div
                                        key={index}
                                        className="flex gap-4 text-gray-400 leading-relaxed"
                                    >
                                        <span className="text-gray-600 mt-1">•</span>
                                        <p>{challenge}</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    )}

                    {/* Solutions Section */}
                    {project.solutions && project.solutions.length > 0 && (
                        <div className="mb-12">
                            <h2 className="text-2xl font-bold text-white mb-6 tracking-tight">
                                Solutions
                            </h2>
                            <div className="space-y-4">
                                {project.solutions.map((solution, index) => (
                                    <div
                                        key={index}
                                        className="flex gap-4 text-gray-400 leading-relaxed"
                                    >
                                        <span className="text-gray-600 mt-1">•</span>
                                        <p>{solution}</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    )}

                    {/* Features Section */}
                    {project.features && project.features.length > 0 && (
                        <div className="mb-12">
                            <h2 className="text-2xl font-bold text-white mb-6 tracking-tight">
                                Features
                            </h2>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                {project.features.map((feature, index) => (
                                    <div
                                        key={index}
                                        className="flex gap-3 text-gray-400 leading-relaxed"
                                    >
                                        <span className="text-green-500 mt-1">✓</span>
                                        <p>{feature}</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    )}

                    {/* Technologies/Stack Section */}
                    {project.technologies && project.technologies.length > 0 && (
                        <div className="mb-12">
                            <h2 className="text-2xl font-bold text-white mb-6 tracking-tight">
                                Technologies / Stack
                            </h2>
                            <div className="flex flex-wrap gap-3">
                                {project.technologies.map((tech, index) => (
                                    <span
                                        key={index}
                                        className="px-4 py-2 bg-white/5 border border-gray-800 text-gray-300 text-sm rounded hover:bg-white/10 transition-colors"
                                    >
                                        {tech}
                                    </span>
                                ))}
                            </div>
                        </div>
                    )}

                    {/* Status Section */}
                    <div className="mb-16">
                        <h2 className="text-2xl font-bold text-white mb-6 tracking-tight">
                            Status
                        </h2>
                        <div className="flex flex-wrap gap-4">
                            {/* Deployed Status */}
                            <div className={`flex items-center gap-2 px-4 py-2 rounded border ${project.status?.deployed
                                ? 'bg-green-900/20 border-green-900/50 text-green-400'
                                : 'bg-red-900/20 border-red-900/50 text-red-400'
                                }`}>
                                {project.status?.deployed ? (
                                    <CheckCircle2 size={16} />
                                ) : (
                                    <XCircle size={16} />
                                )}
                                <span className="text-sm font-medium">
                                    {project.status?.deployed ? 'Deployed' : 'Not Deployed'}
                                </span>
                            </div>

                            {/* Github Status */}
                            {project.status?.github && (
                                <a
                                    href={project.githubLink}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex items-center gap-2 px-4 py-2 bg-gray-900/50 border border-gray-700 text-gray-300 rounded hover:bg-gray-800/50 transition-colors"
                                >
                                    <Github size={16} />
                                    <span className="text-sm font-medium">View on Github</span>
                                </a>
                            )}

                            {/* Demo Link */}
                            {project.demoLink && (
                                <a
                                    href={project.demoLink}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex items-center gap-2 px-4 py-2 bg-blue-900/20 border border-blue-900/50 text-blue-400 rounded hover:bg-blue-900/30 transition-colors"
                                >
                                    <Globe size={16} />
                                    <span className="text-sm font-medium">Live Demo</span>
                                </a>
                            )}
                        </div>
                    </div>

                    {/* Screenshots Section */}
                    {project.screenshots && project.screenshots.length > 0 && (
                        <div className="mb-16">
                            <h2 className="text-2xl font-bold text-white mb-6 tracking-tight">
                                Screenshots
                            </h2>
                            <div className="space-y-6">
                                {project.screenshots.map((screenshot, index) => (
                                    <div
                                        key={index}
                                        className="w-full rounded-lg overflow-hidden border border-gray-800 hover:border-gray-600 transition-colors group cursor-pointer"
                                    >
                                        <img
                                            src={screenshot}
                                            alt={`${project.title} screenshot ${index + 1}`}
                                            className="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-300"
                                        />
                                    </div>
                                ))}
                            </div>
                        </div>
                    )}
                </div>
            </div>

            <Footer />
        </div>
    );
};

export default ProjectDetails;
