import React from 'react';
import NextHead from 'next/head';

const Head = function (props) {
  return (
    <NextHead>
      <link
        href="https://fonts.googleapis.com/css?family=Chivo:400,700"
        rel="stylesheet"
      />
      <title>{props.title}</title>
      <link rel="icon" href="/icon.png" />
    </NextHead>
  );
};

export default Head;
