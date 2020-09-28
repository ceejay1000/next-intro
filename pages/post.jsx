import Layout from "../components/Layouts";

const Post = ({ url }) => (
  
  <Layout title={url.query.title}>
    <h2>{url.query.title}</h2>
    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Odio aperiam impedit laudantium optio officiis voluptas, illum aliquid culpa iusto ullam veritatis debitis in porro qui non! Nulla vero fugiat voluptate!</p>
  </Layout>
);

export default Post;