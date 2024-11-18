// src/pages/HomePage.js
// eslint-disable-next-line no-unused-vars
import React from 'react';
import Navbar from '../components/Navbar';
import PartCard from '../components/PartCard';
import 'bootstrap/dist/css/bootstrap.min.css';
import { FaBook, FaCode, FaLaptopCode } from 'react-icons/fa';

import part0Image from '../assets/images/part0.webp';
import part1Image from '../assets/images/part1.webp';
import part2Image from '../assets/images/part2.webp';
import part3Image from '../assets/images/part3.webp';

const HomePage = () => {
    const sections = [
        {
            title: 'Part 0',
            description: 'Set up the environment',
            link: '/part0',
            image: part0Image,
        },
        {
            title: 'Part 1',
            description: 'Getting Started with C++',
            link: '/part1',
            image: part1Image,
        },
        {
            title: 'Part 2',
            description: 'Functions in C++',
            link: '/part2',
            image: part2Image,
        },
        {
            title: 'Part 3',
            description: 'Object-Oriented Programming in C++',
            link: '/part3',
            image: part3Image,
        },
    ];

    return (
        <div>
            {/* 包裹 Navbar 和内容的父容器 */}
            <div style={{ paddingTop: '80px' }}>
                <Navbar />
                <div className="container mt-4">
                    {/* C++ 介绍区域 */}
                    <div className="row mb-4">
                        <div className="col-md-6 mb-3 d-flex flex-column justify-content-center">
                            <h2 className="text-primary">💻 C++</h2>
                            <p className="mt-3">
                                C++ is a very popular language for performance-critical applications that rely on speed and
                                efficient memory management. It’s used in a wide range of industries including software and
                                game development, VR, robotics, and scientific computing.
                            </p>
                        </div>

                        {/* 相关资源区域 */}
                        <div className="col-md-6 mb-3">
                            <div className="card related-resources-card shadow-lg">
                                <div className="card-body">
                                    <h2 className="card-title text-success">🔗 Related Resources</h2>
                                    <ul className="list-group list-group-flush">
                                        <li className="list-group-item">
                                            <FaBook className="me-2 text-success" />
                                            <a href="https://www.w3schools.com/cpp/default.asp" target="_blank" rel="noopener noreferrer">
                                                C++ Tutorial (W3Schools)
                                            </a>
                                        </li>
                                        <li className="list-group-item">
                                            <FaCode className="me-2 text-primary" />
                                            <a href="https://cpp.sh/" target="_blank" rel="noopener noreferrer">
                                                Online C++ Compiler (CPP.sh)
                                            </a>
                                        </li>
                                        <li className="list-group-item">
                                            <FaLaptopCode className="me-2 text-warning" />
                                            <a href="https://pythontutor.com/cpp.html#mode=edit" target="_blank" rel="noopener noreferrer">
                                                Visualize C++ Code (Python Tutor)
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* 学习部分卡片区域 */}
                    <div className="row">
                        {sections.map((section, index) => (
                            <div key={index} className="col-md-6 col-lg-4 mb-4">
                                <PartCard
                                    image={section.image}
                                    title={section.title}
                                    description={section.description}
                                    link={section.link}
                                />
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HomePage;
