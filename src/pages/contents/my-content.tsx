import React from "react";
import Link from "next/link";
import GetContentsList from "./contents-list";

const Content = () => {
	return (
		<div>
			<h1>マイページ</h1>
			<GetContentsList />
			<Link href="/">戻る</Link>
		</div>
	)
}

export default Content;