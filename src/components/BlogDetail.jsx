import React, { useEffect } from 'react'
import ReactMarkdown from 'react-markdown'
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter'
import { vscDarkPlus } from 'react-syntax-highlighter/dist/esm/styles/prism'

const BlogDetail = ({ post, onClose }) => {
    useEffect(() => {
        // Prevent body scroll when modal is open
        document.body.style.overflow = 'hidden'
        return () => {
            document.body.style.overflow = 'unset'
        }
    }, [])

    if (!post) return null

    return (
        <div
            className="fixed inset-0 z-[200] flex items-center justify-center p-4 bg-black bg-opacity-90"
            onClick={onClose}
        >
            <div
                className="bg-black-100 rounded-xl max-w-4xl w-full max-h-[90vh] overflow-y-auto relative"
                onClick={(e) => e.stopPropagation()}
            >
                {/* Close button */}
                <button
                    onClick={onClose}
                    className="absolute top-4 right-4 z-10 w-10 h-10 flex items-center justify-center rounded-full bg-black-200 hover:bg-black-50 transition-colors"
                >
                    <svg
                        className="w-6 h-6 text-white-50"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M6 18L18 6M6 6l12 12"
                        />
                    </svg>
                </button>

                {/* Header */}
                <div className="p-8 border-b border-black-50">
                    <div className="flex items-center gap-3 mb-4">
                        <span className="px-3 py-1 rounded-full bg-blue-100 text-white-50 text-sm">
                            {post.category}
                        </span>
                        <span className="text-blue-50 text-sm">{post.date}</span>
                        <span className="text-blue-50 text-sm">• {post.readTime}</span>
                    </div>

                    <h1 className="text-3xl md:text-4xl font-bold mb-4">{post.title}</h1>

                    <div className="flex gap-2 flex-wrap">
                        {post.tags.map((tag, index) => (
                            <span
                                key={index}
                                className="text-sm text-blue-50 bg-black-200 px-3 py-1 rounded-full"
                            >
                                #{tag}
                            </span>
                        ))}
                    </div>
                </div>

                {/* Content */}
                <div className="p-8 prose prose-invert max-w-none">
                    <ReactMarkdown
                        components={{
                            code({ node, inline, className, children, ...props }) {
                                const match = /language-(\w+)/.exec(className || '')
                                return !inline && match ? (
                                    <SyntaxHighlighter
                                        style={vscDarkPlus}
                                        language={match[1]}
                                        PreTag="div"
                                        {...props}
                                    >
                                        {String(children).replace(/\n$/, '')}
                                    </SyntaxHighlighter>
                                ) : (
                                    <code className={className} {...props}>
                                        {children}
                                    </code>
                                )
                            },
                            h2: ({ children }) => (
                                <h2 className="text-2xl font-bold mt-8 mb-4 text-white">{children}</h2>
                            ),
                            h3: ({ children }) => (
                                <h3 className="text-xl font-semibold mt-6 mb-3 text-white">{children}</h3>
                            ),
                            p: ({ children }) => (
                                <p className="text-white-50 mb-4 leading-relaxed">{children}</p>
                            ),
                            ul: ({ children }) => (
                                <ul className="list-disc list-inside mb-4 text-white-50 space-y-2">{children}</ul>
                            ),
                            ol: ({ children }) => (
                                <ol className="list-decimal list-inside mb-4 text-white-50 space-y-2">{children}</ol>
                            ),
                            li: ({ children }) => (
                                <li className="text-white-50">{children}</li>
                            ),
                            strong: ({ children }) => (
                                <strong className="text-white font-semibold">{children}</strong>
                            ),
                        }}
                    >
                        {post.content || post.excerpt}
                    </ReactMarkdown>
                </div>
            </div>
        </div>
    )
}

export default BlogDetail
