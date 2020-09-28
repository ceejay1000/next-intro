import Link from "next/link";
import Head from "next/head";
import nprogress from "nprogress";
import Router from "next/router";

Router.onRouteChangeStart = url => {
  console.log(url);
  nprogress.start();
}

Router.onRouteChangeComplete = () => {
  nprogress.done();
}

Router.onRouteChangeError = () => {
  nprogress.done();
}
const Layout = ({ children }) => (
  <div>
    <Head>
      <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/nprogress@0.2.0/nprogress.css"/>
    </Head>
    <header>
      <nav>
        <div className="container">
          <Link href="/">
            <a>Home</a>
          </Link>
          <Link href="/resume">
            <a>Resume</a>
          </Link>
          <Link href="/about">
            <a>About</a>
          </Link>
          <Link href="/blog">
            <a>Blog</a>
          </Link>
        </div>
      </nav>
    </header>

    <div className="main">
      {children}
    </div>

    <footer>&copy; {new Date().getFullYear()}</footer>
    <style jsx>{`

      .container {
        width: 860px;
        margin: 0 auto;
      }

      header{
        width: 100%;
      }

      nav {
        width: 100%;
        background: #957385;
        display: flex;
        justify-content: space-between;
        align-items: center;
      }

      a {
        text-decoration: none;
        color: #fff;
        display: inline-block;
        padding: 10px 15px;
      }

      .main, footer {
        display: flex;
        flex-direction: column;
        align-items: center;
      }
    `}
    </style>
    <style global jsx>
      {
        `
        body {
        margin: 0;
        padding: 0;
        font-size: 110%;
        box-sizing: border-box;
      }
       `
      }
    </style>
  </div>
);

export default Layout;