import { useState } from 'react'
import NewPost from './NewPost.jsx'
import Post from './Post.jsx'
import classes from './PostList.module.css'
import Modal from './Modal.jsx'

export default function PostList() {
  const [ modalVisible, setModalVisible ] = useState(true) ;
  const [ enteredBody, setEnteredBody ] = useState('');
  const [ enteredAuthor, setEnteredAuthor ] = useState('');

  function hideModalHandler() {
    setModalVisible(false)
  }

  function bodyChangeHandler(e) {
    setEnteredBody(e.target.value);
  }

  function authorChangeHandler(e) {
    setEnteredAuthor(e.target.value);
  }

  let modalContent;
  if (modalVisible) {
    modalContent = (
      <Modal onClose={hideModalHandler} >
        <NewPost 
          onBodyChange={bodyChangeHandler} 
          onAuthorChange={authorChangeHandler} 
        />
      </Modal>
    )
  }

  return (
    <>
      {modalContent}
      <ul className={classes.posts}>
        <Post author={enteredAuthor} body={enteredBody} />
        <Post author="Cecilia" body="This tutorial is Great!" />
      </ul>
    </>
  )
}
