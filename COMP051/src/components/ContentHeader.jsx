// src/components/ContentHeader.js
import React from 'react';
import { Link, useParams } from 'react-router-dom';

// eslint-disable-next-line react/prop-types
const ContentHeader = ({ part, contentItem }) => {
    const { partId, contentId } = useParams();

    // 判断是否在子集页面
    const isSubContent = Boolean(contentId);
    // 判断是否在 PartPage 页面
    const isCurrentPartPage = partId === part?.id;

    return (
        <div className="mb-4">
            {/* 课程导航徽章 */}
            <div className="d-flex align-items-center mb-3">
                {/* 返回到课程主页 */}
                <Link to="/" className="badge bg-light text-dark border border-dark me-1 px-3 py-2">
                    COMP 051
                </Link>

                {/* 链接到 PartPage，如果是当前页面则禁用 */}
                {isCurrentPartPage ? (
                    <span className="badge bg-dark text-light px-3 py-2">
                        {part?.title || 'Unknown Part'}
                    </span>
                ) : (
                    <Link
                        to={`/${partId}`}
                        className={`badge px-3 py-2 ${isSubContent ? 'bg-light text-dark border border-dark' : 'bg-dark text-light'}`}
                    >
                        {part?.title || 'Unknown Part'}
                    </Link>
                )}

                {/* 子集标题徽章，增加左侧间距 */}
                {isSubContent && (
                    <div className="badge bg-dark text-light px-3 py-2 ms-1">
                        {contentItem?.text || 'Unknown Content'}
                    </div>
                )}
            </div>
        </div>
    );
};

export default ContentHeader;
