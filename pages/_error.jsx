import Layout from "../components/Layouts";

const Error = ({ statusCode}) => {
  return (
    <Layout>
      {statusCode ? <p>Could not load user data</p> : <p>Page not found</p>}
    </Layout>
  );
}

export default Error;