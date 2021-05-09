import { db } from "../../lib/firebase";
import React, { useState, useEffect } from "react";
// useStateの型宣言
export type Content = {
	tweet:string;
	user_id:number;
};

// とりあえずのデータ取得処理
const GetContentsList = () => {
	// コンテンツリスト格納用
	// useStateで管理する値の型を決めておかないと、listsに対してobject.keyの形でアクセスできなくなる
	const [lists, setLists] = useState<Content[]>([]);
	useEffect(()=>{
		db.collection('posts')
		.limit(1)
		.get()
		.then((snapShot)=>{
			// snapShotはfirestore側で決められた型で渡ってくる
			const result = snapShot.docs.map((doc)=>{
				// doc.data()で、データに対してアクセス可能となる
				const docData = doc.data();
				// returnでresultに対してデータを返す
				return {
					tweet: docData.tweet,
					user_id: docData.user_id
				};
			});
			// resultが整った時点で、state値を変更
			setLists(result);
		});
	// useEffectはstateが変更されるたびに走ってしまうため、第二引数に空のarrayを入れることで、1回目の表示時のみ処理が走るようになる
	},[]);
	return (
		<div>
			{lists.map((list,i)=>{
				return(
					<ul key={i}>
						<li>{list.tweet}</li>
						<li>{list.user_id}</li>
					</ul>
				)
			})}
		</div>
	)
}

export default GetContentsList;