import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import partsData from '../utils/partsData';

const Sidebar = () => {
    const { partId } = useParams();
    const numericPartId = partId.replace('part', ''); // Extract numeric part
    const [headings, setHeadings] = useState([]);
    const [selectedItem, setSelectedItem] = useState(null);
    const part = partsData[numericPartId];

    useEffect(() => {
        const headingList = Array.from(document.querySelectorAll('h3'));

        const headingsData = headingList.map((heading) => {
            const id = heading.innerText.replace(/\s+/g, '-').toLowerCase();
            heading.id = id;
            heading.classList.add('offset');

            return {
                text: heading.innerText,
                id: id,
            };
        });

        setHeadings(headingsData);

        const handleScroll = () => {
            const scrollPosition = window.scrollY;
            let currentHeading = headingsData[0];

            for (const heading of headingsData) {
                const element = document.getElementById(heading.id);
                if (element && element.offsetTop >= scrollPosition) {
                    break;
                }
                currentHeading = heading;
            }

            setSelectedItem(currentHeading.id);
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <div className="sidebar p-3" style={{ width: '250px', backgroundColor: '#343a40', color: '#fff' }}>
            {part ? (
                <>
                    <h4 className="mb-3" style={{ color: '#fff' }}>{part.title}</h4>
                    <ul className="list-unstyled">
                        {part.content.map((item, index) => (
                            <li key={index} className="mb-2">
                                <Link
                                    to={`/part${numericPartId}/${item.link}`}
                                    className="text-decoration-none text-light"
                                >
                                    {item.text}
                                </Link>
                            </li>
                        ))}
                        <hr style={{ color: '#adb5bd' }} />
                        {headings.map((heading) => (
                            <li key={heading.id} className={selectedItem === heading.id ? 'active' : ''}>
                                <a href={`#${heading.id}`} className="text-decoration-none text-light">
                                    {heading.text}
                                </a>
                            </li>
                        ))}
                    </ul>
                </>
            ) : (
                <div className="sidebar p-3">Invalid Part</div>
            )}
        </div>
    );
};

export default Sidebar;
