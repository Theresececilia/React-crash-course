
import Post from './Post.jsx'
import classes from './PostList.module.css'

export default function PostList() {
  return (
    <ul className={classes.posts}>
      <Post author="Therese" body="Im learning React.js" />
      <Post author="Cecilia" body="This tutorial is Great!" />
    </ul>
  )
}
