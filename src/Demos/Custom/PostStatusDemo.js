import React, { Component } from 'react'
import '!style-loader!css-loader!./../../styles/Base.css' //eslint-disable-line
import PostStatus from './../../package/components/PostStatus/PostStatus'
import StorybookHighlighter from './../../utils/StorybookHighlighter'

const importComponent = `import { PostStatus } from 'components';`

export default class PostStatusDemo extends Component {
  render () {
    return (
      <div className='container'>
        <div className='row padding-20'>
          <div className='col-xs-12 '>
            <h2 className='h2'>PostStatus</h2>
            <h3 className='h3'>{importComponent}</h3>
            status = "New, Draft, Post, Pending, Escalated, Closed, Trashed, Reversed"
          </div>
          <div className='col-xs-10 padding-20'>
            <PostStatus status='New' />
            <PostStatus status='Draft' />
            <PostStatus status='Post' />

          </div>
        </div>
        <div className='row'>
          <div className='col-xs-12'>
            <StorybookHighlighter >
              <PostStatus status='New' />
            </StorybookHighlighter >
          </div>
        </div>
        <div className='row'>
          <div className='col-xs-12 '>
            <h3 className='h3'>Reversed</h3>
          </div>
          <div className='col-xs-10 padding-20'>
            <PostStatus status='New' Reversed />
            <PostStatus status='Draft' Reversed />
            <PostStatus status='Post' Reversed />

          </div>
        </div>
        <div className='row'>
          <div className='col-xs-12'>
            <StorybookHighlighter >
              <PostStatus status='New' Reversed />
            </StorybookHighlighter >
          </div>
        </div>
      </div>
    )
  }
}
