import React, { useState } from 'react';
import axios from 'axios';

const UploadImage = () => {
    const [img, setImg] = useState<string>('');

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

    const uploadImage = async () => {
        const base64 = img;
        const token = localStorage.getItem('token');
        const url = `http://localhost:3000/image/imageupdate`;

        if (!base64) {
            console.log('No image to upload');
            return;
        }

        try {
            const res = await axios.post(
                url,
                { base64 },
                {
                    headers: {
                        Authorization: `Bearer ${token}`,
                    },
                }
            );
            console.log(res);
        } catch (error) {
            console.log(error);
        }
    };

    return (
        <div>
            <input
                accept="image/*"
                type="file"
                onChange={changetoBase64}
            />
            {img && <img width={100} height={100} src={img} alt="Selected" />}
            <button onClick={uploadImage}>Upload</button>
        </div>
    );
};

export default UploadImage;
