// import Link from "next/link";
import Layout from "../components/Layout";
import { Login, Logout, auth } from "../lib/firebase";
import Button from '@material-ui/core/Button';



const IndexPage = () => (
  <Layout title="Home | Next.js + TypeScript Example">
    <h1>Hello Next.js 👋</h1>
    <div>
      <Button variant="contained" color="secondary" onClick={() => Login()}>ログイン</Button>
      <Button  variant="contained" color="secondary" onClick={() => Logout()}>ログアウト</Button>
    </div>
    <div>
      <pre>
        {auth.currentUser
          ? auth.currentUser.displayName + "でログインしています"
          : "ログインしていません"}
      </pre>
    </div>
  </Layout>
);

export default IndexPage;