import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import ReactMarkdown from 'react-markdown';
import Navbar from '../components/Navbar';
import Sidebar from '../components/Sidebar';
import ContentHeader from '../components/ContentHeader';
import partsData from '../utils/partsData';
import { getMarkdownFilePath } from '../utils/getMdPath.js';

const PartContentPage = () => {
    const { partId, contentId } = useParams();
    const numericPartId = partId.replace('part', '');
    const [markdownContent, setMarkdownContent] = useState('');
    const [error, setError] = useState(null);

    // 获取当前章节的数据
    const part = partsData[numericPartId];
    const contentItem = part?.content?.find((item) => item.link === contentId);

    useEffect(() => {
        const loadMarkdown = async () => {
            const filePath = getMarkdownFilePath(numericPartId, contentId);
            if (!filePath) {
                setError('Content not found. Please check the URL.');
                return;
            }

            try {
                const response = await fetch(filePath);
                if (!response.ok) {
                    throw new Error('Failed to load content.');
                }

                const text = await response.text();
                setMarkdownContent(text);
            } catch (err) {
                setError('Failed to load content. Please try again later.');
            }
        };

        loadMarkdown();
    }, [numericPartId, contentId]);

    return (
        <div>
            <Navbar />
            <Sidebar />
            <div className="main-content">
                {/* 检查 part 和 contentItem 的值 */}
                {part && contentItem ? (
                    <ContentHeader part={part} contentItem={contentItem} contentId={contentId} />
                ) : (
                    <div className="alert alert-warning">Content Header not available</div>
                )}
                {/* Markdown 内容显示 */}
                {error ? (
                    <div className="alert alert-danger">{error}</div>
                ) : (
                    <div className="card">
                        <div className="card-body">
                            <ReactMarkdown>{markdownContent}</ReactMarkdown>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};

export default PartContentPage;
