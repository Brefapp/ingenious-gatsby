import React from 'react'
import PropTypes from 'prop-types'

import { PostList, Pagination, InfiniteScroll } from '.'

class PostView extends React.Component {
  constructor(props) {
    super(props)
    props.globalState.initItems(props.pageContext, props.posts)
  }

  render() {
    const {
      globalState: g,
      pageContext,
      posts,
    } = this.props

    const items = (!g.isInitializing() ? g.getItems(pageContext) : posts)
    return (
      <>
        <main className="container overlap-with-header" id="content-view">
          <InfiniteScroll throttle={300} threshold={600} isLoading={g.isLoading} hasMore={g.hasMore(pageContext)} onLoadMore={g.loadMore(pageContext)}>
            <PostList posts={items} />
          </InfiniteScroll>
        </main>

        {/* Fallback to Pagination for non JS users. */}
        {g.useInfiniteScroll &&
          <noscript>
            <Pagination pageContext={pageContext} />
          </noscript>
        }

        {/* Fallback to Pagination on error. */}
        {!g.useInfiniteScroll &&
          <Pagination pageContext={pageContext} />
        }
      </>
    )
  }
}

PostView.propTypes = {
  globalState: PropTypes.object.isRequired,
  pageContext: PropTypes.object.isRequired,
  posts: PropTypes.array.isRequired,
}

export default PostView