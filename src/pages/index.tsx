import Layout from "../components/Layout";
import { auth } from "../lib/firebase";
import Link from "next/link";
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  mainMessage: {
    fontSize: 20
  }
}));

export default function IndexPage() {
  const classes = useStyles();
  return(
    <Layout title="test-app">
      {auth.currentUser ?
        <h1 className={classes.mainMessage}>Hello!{auth.currentUser.displayName}！👋</h1>
        :<h1>ログインしてください</h1>
      }
      <div>
        <pre>
          {auth.currentUser ? 
            <Link href ="/contents/my-content">マイページ</Link>
            : "ログインするとマイページへ移動することができます"
          }
        </pre>
      </div>
    </Layout>
  )
};