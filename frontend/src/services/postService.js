import Parse from 'parse';

export const getAllPost = async () => {
  const Post = Parse.Object.extend('Post');
  const query = new Parse.Query(Post);
  query.include('author');
  const results = await query.find();
  const posts = results.map(result => ({
    title: result.get('title'),
    author: extractAuthor(result),
    createdAt: result.createdAt,
    updatedAt: result.updatedAt,
    imageUrl: result.get('imageUrl'),
    tags: result.get('tags'),
  }));
  return posts;
};

const extractAuthor = result => {
  var authorParse = result.get('author');
  return {
    name: authorParse.get('name'),
  };
};
