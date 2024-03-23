import React from "react";
import Head from "next/head";

import "bootstrap/dist/css/bootstrap.css";

const Layout = ({ children }) => {
  return (
    <div>
      <Head>
        <meta name="viewport" content="width=device-width,initial-scale=1" />
        <meta charset="UTF-8" />
        <meta name="description" content="[DP_DOCTOR_DESCRIPTION]" />
        <meta name="keywords" content="[DP_DOCTOR_KEYWORDS]" />
        <meta name="author" content="Digipathy" />
        <meta
          property="og:image"
          content="https://digipathy.com/share.png"
          data-qmeta="ogImage"
        />
        <meta
          property="og:image:width"
          content="1200"
          data-qmeta="ogImageWidth"
        />
        <meta
          property="og:image:height"
          content="627"
          data-qmeta="ogImageHeight"
        />
        <meta
          property="fb:app_id"
          content="1545070339179788"
          data-qmeta="fbAppId"
        />
        <link rel="icon" href="/favicon.ico" />
        <meta http-equiv="X-UA-Compatible" content="IE=edge" />

        <link href="fonts/Axiforma-Bold.ttf"></link>

        {/* <!-- Template Main CSS File --> */}
        <link href="/assets/css/style.css" rel="stylesheet"></link>
        <link href="/assets/css/hero.css" rel="stylesheet"></link>
        <link href="/assets/css/header.css" rel="stylesheet"></link>
        <link href="/assets/css/about-us.css" rel="stylesheet"></link>
        <link href="/assets/css/education.css" rel="stylesheet"></link>
        <link href="/assets/css/experience.css" rel="stylesheet"></link>
        <link href="/assets/css/chamber.css" rel="stylesheet"></link>
        <link href="/assets/css/speciality.css" rel="stylesheet"></link>
        <link href="/assets/css/gallery.css" rel="stylesheet"></link>
        <link href="/assets/css/video-gallery.css" rel="stylesheet"></link>
        <link href="/assets/css/contact-us.css" rel="stylesheet"></link>
        <link href="/assets/css/footer.css" rel="stylesheet"></link>

        <link
          rel="stylesheet"
          href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"
        />

        <link
          href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.0/dist/css/bootstrap.min.css"
          rel="stylesheet"
          integrity="sha384-gH2yIJqKdNHPEq0n4Mqa/HGKIhSkIHeL5AyhkYV8i59U5AR6csBvApHHNl/vI1Bx"
          crossorigin="anonymous"
        />

        <script
          src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.0/dist/js/bootstrap.bundle.min.js"
          integrity="sha384-A3rJD856KowSb7dwlZdYEkO39Gagi7vIsF0jrRAoQmDKKtQBHUuLZ9AsSv4jD4Xa"
          crossorigin="anonymous"
        ></script>

        {/* font awesome */}
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css"
          integrity="sha512-iBBXm8fW90+nuLcSKlbmrPcLa0OT92xO1BIsZ+ywDWZCvqsWgccV3gFoRBv0z+8dLJgyAHIhR35VZc2oM/gI1w=="
          crossorigin="anonymous"
          referrerpolicy="no-referrer"
        />
        <link
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.13.0/css/all.min.css"
          rel="stylesheet"
        ></link>
      </Head>
      {children}
    </div>
  );
};

export default Layout;
