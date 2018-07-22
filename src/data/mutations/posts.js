import {
  GraphQLString as StringType,
  GraphQLNonNull as NonNull,
  GraphQLID as UUIDType,
} from 'graphql';

import PostType from '../types/PostType';
import Post from '../models/Post';

export const addPost = {
  type: PostType,
  description: 'Add a Post',
  args: {
    title: {
      name: 'Post title',
      type: new NonNull(StringType),
    },
    content: {
      name: 'Post content',
      type: new NonNull(StringType),
    },
  },
  resolve: (root, { title, content }) => Post.create({ title, content }),
};

export const removePost = {
  type: PostType,
  description: 'Delete a Post',
  args: {
    _id: {
      type: new NonNull(UUIDType),
    },
  },
  resolve: (root, _id) => Post.destroy({
                            where: 
                            { 
                              id: _id
                            }
                          }),
};
