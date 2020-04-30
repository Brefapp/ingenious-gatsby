import React from 'react'
import PropTypes from 'prop-types'
import AniLink from 'gatsby-plugin-transition-link/AniLink'
import Img from 'gatsby-image'

const PostCard = ({ post }) => {
  const url = `/${post.slug}/`
  const fluidFeatureImg = post.featureImageSharp && post.featureImageSharp.childImageSharp && post.featureImageSharp.childImageSharp.fluid

  return (
    <article className="article" data-sal="slide-up" data-sal-duration="800" data-sal-easing="ease-out-cubic">
      {fluidFeatureImg ? <AniLink cover bg="#111111" direction="up" duration={1} to={url}><Img className="thumbnail" fluid={fluidFeatureImg} alt={post.title} /></AniLink> : null}
      <div className="content">
        {post.primary_tag ? <AniLink cover bg="#111111" direction="up" duration={1} to={post.primary_tag.slug} className="category">{post.primary_tag.name}</AniLink> : null}
        <h1 className="title">{post.title}</h1>
        <p className="text-preview">
          {post.excerpt}
        </p>
      </div>
      <AniLink cover bg="#111111" direction="up" duration={1} to={url} className="button dark">Lesen</AniLink>
    </article>
    )
}

PostCard.propTypes = {
  post: PropTypes.shape({
    slug: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    feature_image: PropTypes.string,
    featured: PropTypes.bool,
    tags: PropTypes.arrayOf(
      PropTypes.shape({
        name: PropTypes.string,
      })
    ),
    excerpt: PropTypes.string.isRequired,
    primary_author: PropTypes.shape({
      name: PropTypes.string.isRequired,
      profile_image: PropTypes.string,
    }).isRequired,
    featureImageSharp: PropTypes.object.isRequired,
  }).isRequired,
}

export default PostCard
