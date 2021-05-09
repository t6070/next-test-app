import React, {useState, ChangeEvent} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import InputBase from '@material-ui/core/InputBase';
import IconButton from '@material-ui/core/IconButton';
import SearchIcon from '@material-ui/icons/Search';

// 親コンポーネントから検索処理の関数を受け取るための型定義
type SearchProps = {
	onClick: (keyword:string)=>void
};

const useStyles = makeStyles((theme) => ({
  root: {
    padding: '2px 4px',
    display: 'flex',
    alignItems: 'center',
    width: 300,
  },
  input: {
    marginLeft: theme.spacing(1),
    flex: 1,
  },
  iconButton: {
    padding: 10,
  },
  divider: {
    height: 28,
    margin: 4,
  },
}));


export default function SearchInput(searchFunction:SearchProps) {
  const classes = useStyles();
  const [keyword, setKeyword] = useState('');
  // input要素にonChangeが走るたび、stateを更新する
  // 引数で受け取るeの型は、react側が用意しているものを利用
  const onChangeHandler = (e:ChangeEvent<HTMLInputElement>) => {
	setKeyword(e.target.value);
  }

  // searchFunctionは「SearchProps」という型指定があるため、オブジェクトになっている
  const onClickHandler = () => {
	  searchFunction.onClick(keyword);
  }

  return (
    <Paper component="form" className={classes.root}>
      <InputBase
        className={classes.input}
        placeholder="Search"
        inputProps={{ 'aria-label': 'search google maps' }}
		onChange={onChangeHandler}
      />
      <IconButton className={classes.iconButton} aria-label="search" onClick={onClickHandler}>
        <SearchIcon />
      </IconButton>
    </Paper>
  );
}