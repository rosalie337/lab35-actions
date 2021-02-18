import React, { Component } from 'react'
import PropTypes from 'prop-types'

const Blog = () => {
    return(
        <dl>
            <dt>Title</dt>
            <dd>{title}</dd>

            <dt>Author</dt>
            <dd>{author}</dd>

            <dt>Body</dt>
            <dd>{body}</dd>
        </dl>

    );
};


Blog.propTypes = {
    title: PropTypes.string.isRequired,
    author: PropTypes.string.isRequired,
    body: PropTypes.string.isRequired

};

export default Blog;