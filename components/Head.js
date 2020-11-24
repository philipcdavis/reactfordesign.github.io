import React from "react";
import NextHead from "next/head";
import { NextSeo } from "next-seo";

const Head = function (props) {
  const title = props.title ? props.title : "React for Design";
  const description = props.description
    ? props.description
    : "A React Course for Designers. React is a powerful design tool. There's a lot you can do with it that would be difficult with a traditional design application. Prototyping with realistic data sets, creating complex interactions and shared component libraries are just the tip of the iceberg.";
  const image = props.image
    ? props.image
    : "https://farm2.staticflickr.com/1849/43676135265_5d6be8f15a_o.png";
  return (
    <>
      <NextHead>
        <link
          href="https://fonts.googleapis.com/css?family=Chivo:400,700"
          rel="stylesheet"
        />
        <link rel="icon" type="image/svg+xml" href="/icon-thick.svg" />
        <link rel="apple-touch-icon" href="/icon-thick.png" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </NextHead>
      <NextSeo
        title={title}
        description={description}
        openGraph={{
          title: title,
          description: description,
          images: [
            {
              url: image,
            },
          ],
          site_name: "React for Design",
        }}
        twitter={{
          handle: "@philipcdavis",
          cardType: "summary_large_image",
        }}
      />
    </>
  );
};

export default Head;
