import Tag from './tags.model.js';

export const createTag = (tagName) => {
	const tag = Tag.create(tagName);
	return tag;
};
