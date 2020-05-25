import React from 'react';
import matter from 'gray-matter';
import Post from '../../src/components/Post'

export default function Terminal({ content, data }) {
  // This holds the data between `---` from the .md file
  const frontmatter = data;
  
  return (
    <Post content={content} />
  );
}

Terminal.getInitialProps = async (context) => {
  const content = await import(`./terminal.md`);

    // Parse .md data through `matter`
  const data = matter(content.default)

  // Pass data to the component props
  return { ...data }
};
