// src/utils/partsData.js

const partsData = {
    '0': {
        title: 'Part 0',
        description: 'In this part, we will familiarize ourselves with the practicalities of taking the course.',
        content: [
            { text: 'a Syllabus', link: 'syllabus' },
            { text: 'b General Info', link: 'general-info' },
            { text: 'c Fundamentals', link: 'fundamentals' },
            { text: 'd Configuring Your Machine', link: 'configuring-machine' },
        ],
    },
    '1': {
        title: "Part 1",
        description: "Introduction to C++ Fundamentals",
        content: [
            { text: "a Hello World", link: "hello-world" },
            { text: "b Variables and Data Types", link: "variables" },
            { text: "c Conditionals & Logic", link: "branches" },
            { text: "d Loops", link: "loops" },
            { text: "e Debugging", link: "debugging" },
        ],
    },
    '2': {
        title: "Part 2",
        description: "Advanced Control Flow and Memory Management",
        content: [
            { text: "a Arrays and Vectors", link: "arrays-vectors" },
            { text: "b Functions", link: "functions" },
            { text: "c Pointers and Dynamic Memory", link: "pointers-memory" },
            { text: "d Reference Variables and Function Overloading", link: "references-overloading" },
            { text: "e Memory Leaks and Debugging with Valgrind", link: "memory-leaks" },
        ],
    },
    '3': {
        title: "Part 3",
        description: "Sharpen your C++ skills by learning how to use C++ classes and objects to build more scalable, modular programs.",
        content: [
            { text: "a Class and Objects", link: "objects-classes" },
            { text: "b Inheritance and Polymorphism", link: "inheritance-polymorphism" },
            { text: "c Streams and File I/O", link: "streams-file-io" },
            { text: "d Exception Handling", link: "exception-handling" },
            { text: "e Templates and Generic Programming", link: "templates-generic" },
            { text: "f Standard Template Library (STL)", link: "stl" },
        ],
    },
};

export default partsData;
