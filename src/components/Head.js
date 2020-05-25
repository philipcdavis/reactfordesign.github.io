import React from 'react';
import Head from 'next/head';

const Head = function (props) {
  return (
    <Head>
      <link
        href="https://fonts.googleapis.com/css?family=Chivo:400,700"
        rel="stylesheet"
      />
      <title>React for Design</title>
      <link rel="icon" href="/favicon.ico" />
    </Head>
  );
};

export default Head;
