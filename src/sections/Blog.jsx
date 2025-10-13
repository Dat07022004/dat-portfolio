import React, { useState } from 'react'
import TitleHeader from '../components/TitleHeader'
import BlogDetail from '../components/BlogDetail'
import { blogPosts } from '../constants'

const Blog = () => {
    const [selectedPost, setSelectedPost] = useState(null)

    return (
        <>
            <section id="blog" className="flex-center section-padding">
                <div className="w-full md:px-20 px-5">
                    <TitleHeader
                        title="Blog"
                        sub="📝 Chia sẻ kiến thức lập trình"
                    />

                    <div className="mt-12 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
                        {blogPosts.map((post) => (
                            <div
                                key={post.id}
                                onClick={() => setSelectedPost(post)}
                                className="card-border rounded-xl p-6 hover:scale-[1.02] transition-transform duration-300 cursor-pointer group"
                            >
                                <div className="flex items-center justify-between mb-4">
                                    <span className="px-3 py-1 rounded-full bg-blue-100 text-white-50 text-sm">
                                        {post.category}
                                    </span>
                                    <span className="text-blue-50 text-sm">{post.date}</span>
                                </div>

                                <h3 className="text-xl font-semibold mb-3 group-hover:text-white transition-colors">
                                    {post.title}
                                </h3>

                                <p className="text-white-50 text-sm mb-4 line-clamp-3">
                                    {post.excerpt}
                                </p>

                                <div className="flex items-center justify-between">
                                    <span className="text-blue-50 text-xs">{post.readTime}</span>
                                    <div className="flex gap-2 flex-wrap">
                                        {post.tags.slice(0, 2).map((tag, index) => (
                                            <span
                                                key={index}
                                                className="text-xs text-blue-50 bg-black-200 px-2 py-1 rounded"
                                            >
                                                #{tag}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {selectedPost && (
                <BlogDetail
                    post={selectedPost}
                    onClose={() => setSelectedPost(null)}
                />
            )}
        </>
    )
}

export default Blog
