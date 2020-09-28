import Layout from "../components/Layouts";
import Link from "next/link";

const PostLink = ({ title }) => (
  <li>
    <Link href={`/post?title=${title}`}>
      <a>{title} post</a>
    </Link>
  </li>
);

const Blog = () => (
  <Layout title="My Blog">
    <ul>
      <PostLink title="React" />
      <PostLink title="Vue" />
      <PostLink title="Angular" />
    </ul>
  </Layout>
);

export default Blog;