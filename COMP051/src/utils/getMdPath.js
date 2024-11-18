// src/utils/getMarkdownFilePath.js

export const getMarkdownFilePath = (partId, contentId) => {
    const numericPartId = partId.replace('part', '');

    const contentMap = {
        '0': {
            'syllabus': 'part0a.md',
            'general-info': 'part0b.md',
            'fundamentals': 'part0c.md',
            'configuring-machine': 'part0d.md',
        },
        '1': {
            'hello-world': 'part1a.md',
            'variables': 'part1b.md',
            'branches': 'part1c.md',
            'loops': 'part1d.md',
            'debugging': 'part1e.md',
        },
        '2': {
            'arrays-vectors': 'part2a.md',
            'functions': 'part2b.md',
            'pointers-memory': 'part2c.md',
        },
        '3': {
            'objects-classes': 'part3/part3a.md',
            'inheritance-polymorphism': 'part3/part3b.md',
            'streams-file-io': 'part3/part3c.md',
            'exception-handling': 'part3/part3d.md',
            'templates-generic': 'part3/part3e.md',
            'stl': 'part3/part3f.md',
        },
    };

    const fileName = contentMap[numericPartId]?.[contentId] || null;
    return fileName ? `/content/${numericPartId}/${fileName}` : null;
};
