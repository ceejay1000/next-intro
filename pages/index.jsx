import Link from "next/link";
import Layout from "../components/Layouts";

const Index = () => (
  <Layout>
    <div>
      <div>Hello World!!</div>
      <Link href="/about">
        <a>About</a>
      </Link>
    </div>
 </Layout>
);

export default Index;