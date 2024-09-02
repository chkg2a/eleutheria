import React from 'react'
import { createPost } from '@/app/actions/actions'
const CreatePost = () => {
  return (
    <div>
      <form action={createPost}>
            <input type='text' name='title' placeholder='enter your title of post'/>
            <textarea name='description' rows={7} placeholder='enter the content'/>
      </form>
    </div>
  )
}

export default CreatePost
