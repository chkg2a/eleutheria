"use client"
import { UploadButton, UploadDropzone } from '@/utils/uploadthing';
import Image from 'next/image';
import React, { useState } from 'react';
import { imageRemove } from '@/app/(home)/actions/imageRemove';
import { createImageData } from '@/app/(home)/actions/imageDataSave';
const UploadImage = () => {
  const [imageUrl, setImageUrl] = useState<string | null>(null);
  const [imageKey, setImageKey] = useState<string | null>(null);
  const [imageTitle, setImageTitle] = useState<string | null>(null);

  const handleImage = async () => {
    const res = await imageRemove(imageKey);
    if (res.sucess) {
      alert("Image removed");
      setImageUrl(null);
      setImageKey(null);
    }
    
  };

  const handleFormSubmit = async(e: React.FormEvent) => {
    e.preventDefault();
    const imageData = {
      imageUrl,
      imageTitle,
      imageKey
    };
    await createImageData(imageData);
    console.log(imageData);
  };

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div>
        <form onSubmit={handleFormSubmit}>
          <div>
            <label>Image title</label>
            <input
              type='text'
              value={imageTitle || ''}
              onChange={(e) => setImageTitle(e.target.value)}
            />
          </div>
          <div>
            <UploadDropzone
              endpoint="imageUploader"
              onClientUploadComplete={(res) => {
                console.log("Files: ", res);
                setImageUrl(res[0].url);
                setImageKey(res[0].key);
                alert("Upload Completed");
              }}
              onUploadError={(error: Error) => {
                alert(`ERROR! ${error.message}`);
              }}
            />
          </div>
          <div>
            <h1 className='text-3xl font-semibold text-gray-800'>Image Preview</h1>
            {imageUrl && (
              <div>
                <Image
                  src={imageUrl}
                  alt='image upload'
                  height={200}
                  width={300}
                  className='object-cover h-auto w-full'
                />
              </div>
            )}
            <div>
              <button type="button" onClick={handleImage}>Remove Image</button>
            </div>
          </div>
          <div>
            <button type='submit'>Save Image</button>
          </div>
        </form>
      </div>
    </main>
  );
};

export default UploadImage;
