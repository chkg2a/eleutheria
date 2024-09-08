import { useState } from 'react';
import axios from 'axios';

const CreatePostTest = () => {
    const [title, setTitle] = useState('');
<<<<<<< HEAD
   // const [public, setPublic] = useState(false);
=======

>>>>>>> 4f97c3ba29928b40b42fd977a153c0d555408283
    const [description, setDescription] = useState('');
    const [img, setImg] = useState<string>('');
    const handleSubmit = async (e: { preventDefault: () => void }) => {
        e.preventDefault();
        const base64=img;
        if (!base64) {
          console.log('No image to upload');
          return;
      }
        const url=`http://localhost:3000/post/createpost`;
        const token=localStorage.getItem('token');
        try {
            const res = await axios.post(url, {title, description,base64}, { 
                headers: {
                    Authorization: `Bearer ${token}`, 
                }
            });
            console.log(res);
        } catch (error) {
            
        }
    }
    const changetoBase64 = (e: React.ChangeEvent<HTMLInputElement>) => {
      if (e.target.files && e.target.files[0]) {
          const reader = new FileReader();
          reader.readAsDataURL(e.target.files[0]);

          reader.onload = () => {
              if (reader.result) {
                  setImg(reader.result as string);
              }
          };

          reader.onerror = (error) => {
              console.log('Error: ', error);
          };
      }
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input type="text" id="title" name="title" placeholder="Title" onChange={(e) => setTitle(e.target.value)}/>
        <input
                accept="image/*"
                type="file"
                onChange={changetoBase64}
            />
        <input type="text" id="description" name="description" placeholder="description" onChange={(e) => setDescription(e.target.value)}/>
        <button type="submit">Submit</button>
       
      </form>

    </div>
  )
}

export default CreatePostTest
