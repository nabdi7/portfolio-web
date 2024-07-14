import React from 'react'
import { posts } from "#site/content";
import { PostItem } from './post-item';
import { sortPosts } from '@/lib/utils';

const Blogs = () => {
  const sortedPosts = sortPosts(posts.filter((post) => post.published));
  const displayPosts = sortedPosts;
  return (
    <section className="custom-screen">
      <div className="flex flex-col md:flex-col max-w-3xl mx-auto ">
        <h2 className="text-3xl font-bold">All Blogs</h2>
      </div>
      <div className="max-w-3xl mx-auto">
      {displayPosts?.length > 0 ? (
            <ul className="flex flex-col pt-5">
              {displayPosts.map((post) => {
                const { slug, date, title, description, tags, author } = post;
                return (
                  <li key={slug}>
                    <PostItem
                      slug={slug}
                      date={date}
                      title={title}
                      description={description}
                      // tags={tags}
                      author={author}
                    />
                  </li>
                );
              })}
            </ul>
          ) : (
            <p>Nothing to see here yet</p>
          )}
      </div>
    </section>
  )
}

export default Blogs