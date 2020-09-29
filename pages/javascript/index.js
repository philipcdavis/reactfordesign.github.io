import React from 'react';
import matter from 'gray-matter';
import Post from '../../components/Post';

export default function Javascript({ content, data }) {
  // This holds the data between `---` from the .md file
  const frontmatter = data;
  
  return (
    <>
      <Post colors={["#D92EE3", "#E80628", "#FF0404", "#FF420C", "#FF690C", "#FFAF09", "#222", "#222",]} content={content} frontmatter={frontmatter} />
    </>
  );
}

Javascript.getInitialProps = async (context) => {
  const content = await import(`./javascript.md`);

    // Parse .md data through `matter`
  const data = matter(content.default)

  // Pass data to the component props
  return { ...data }
};
