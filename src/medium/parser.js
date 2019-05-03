'use strict';

export default function parse(jsonObject) {
  const posts = jsonObject.payload.references.Post;

  return Object.entries(posts).map(([postId, post]) => ({
    id: postId,
    version: post.versionId,
    slug: post.slug,
    title: post.title,
    subtitle: post.content.subtitle,
  }));
}
