import Link from "next/link";
import Layout from "../components/Layouts";
import React from "react";
import Error from "./_error";

class About extends React.Component {
  state = {
    user: null
  }

  static async getInitialProps() {
    let res = await fetch("https://api.github.com/users/jjjjj");
    let statusCode = res.status > 200 ? res.status : false;
    let data = await res.json();

    return { user: data, statusCode };
  }

  // static getInitialProps() {
  //   fetch("https://api.github.com/users/reedbarger")
  //     .then(res => res.json())
  //     .then(data => {
  //       this.setState({ user: data })
  //     })
  // }

  // componentDidMount() {
  //   fetch("https://api.github.com/users/reedbarger")
  //     .then(res => res.json())
  //     .then(data => {
  //     this.setState({user: data})
  //   })
  // }

  render() {
    let { user, statusCode } = this.props;
    if (statusCode) {
      return <Error statusCode={statusCode} />
    }
    return (
      <Layout>
        <div>
          <h1>About Page</h1>
          <Link href="/">
            <a>Home</a>
          </Link>
          <img src={user.avatar_url} alt="User"/>
        </div>
      </Layout>
    )
  }
}

export default About;