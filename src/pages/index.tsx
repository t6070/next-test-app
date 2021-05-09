import { useState } from "react";
import Layout from "../components/Layout";
import { auth, db } from "../lib/firebase";
import Link from "next/link";
import { makeStyles } from '@material-ui/core/styles';
import SearchInput from '../components/SearchInput'


const useStyles = makeStyles((theme) => ({
  mainMessage: {
    fontSize: 20
  }
}));

export default function IndexPage() {
  const classes = useStyles();
  const [lists, setLists] = useState([""]);
  const search = (keyword:string) => {
    db.collection('posts')
      .limit(1)
      .where("tweet", "==" ,keyword)
      .get()
      .then((snapShot)=>{
        // snapShotはfirestore側で決められた型で渡ってくる
        const result = snapShot.docs.map((doc)=>{
          // doc.data()で、データに対してアクセス可能となる
          const docData = doc.data();
          return docData.tweet;
        });
        // resultが整った時点で、state値を変更
        setLists(result);
      });
  };
  return(
    <Layout title="test-app">
      {auth.currentUser ?
        <h1 className={classes.mainMessage}>Hello!{auth.currentUser.displayName}！👋</h1>
        :<h1>ログインしてください</h1>
      }
      <div>
        <SearchInput onClick={search}/>
        <pre>
          {auth.currentUser ? 
            <Link href ="/contents/my-content">マイページ</Link>
            : "ログインするとマイページへ移動することができます"
          }
        </pre>
        {lists.map((list,i) => {
          return(
            <ul key={i}>
              <li>
                {list}
              </li>
            </ul>
          )
        })}
      </div>
    </Layout>
  )
};