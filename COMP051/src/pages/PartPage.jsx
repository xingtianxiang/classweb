// src/pages/PartPage.js
import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Navbar from '../components/Navbar';
import partsData from '../utils/partsData';
import ContentPage from "../components/ContentHeader.jsx";

// eslint-disable-next-line react/prop-types
const PartPage = ({ partId }) => {
    const part = partsData[partId];
    const navigate = useNavigate();

    if (!part) {
        return <div className="container mt-5"><h2>Page Not Found</h2></div>;
    }

    // 获取下一个部分的 ID
    const nextPartId = (parseInt(partId) + 1).toString();
    const hasNextPart = partsData[nextPartId] !== undefined;

    // 处理按钮点击，跳转到下一个部分
    const handleNextClick = () => {
        if (hasNextPart) {
            navigate(`/part${nextPartId}`);
        }
    };

    return (
        <div>
            {/* Parent container for Navbar and content */}
            <div style={{ paddingTop: '80px' }}>
                <Navbar />
            </div>
            <div className="container mt-4">
                <div className="d-flex align-items-center mb-3">
                    <ContentPage part={part} />
                </div>
                <div className="text-center mb-4">
                    <p className="lead">{part.description}</p>
                </div>

                {/* 内容列表 */}
                <div className="list-group mb-4">
                    {part.content.map((item, index) => (
                        <Link key={index} to={`/part${partId}/${item.link}`} className="list-group-item list-group-item-action">
                            {item.text}
                        </Link>
                    ))}
                </div>

                {/* 在列表下方添加“下一部分”按钮 */}
                {hasNextPart && (
                    <div className="text-center mb-4">
                        <button
                            className="btn btn-primary"
                            onClick={handleNextClick}
                        >
                            Next Part →
                        </button>
                    </div>
                )}
            </div>
        </div>
    );
};

export default PartPage;
