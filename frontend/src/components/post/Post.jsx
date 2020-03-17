import React from 'react';
import Author from '../author/Author';
import './style.scss';

const Post = props => {
  const { title, updatedAt, createdAt, author, imageUrl, tags } = props;
  return (
    <div className="post">
      <div className="post-container">
        <div className="post-title">{title}</div>
        <div className="post-date">{`created ${createdAt.toUTCString()}`}</div>
        <div className="post-date">{`updated ${updatedAt.toUTCString()}`}</div>
        <div className="post-tags">{tags}</div>
        <img src={imageUrl} alt="test" />
      </div>

      <Author {...author} />
    </div>
  );
};

export default Post;
