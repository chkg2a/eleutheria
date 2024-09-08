import PopUp from "../components/smallComponents/PopUp";
import { CiImageOn } from "react-icons/ci";
import { BiPoll } from "react-icons/bi";
import { Checkbox } from "@/components/ui/checkbox";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { useState } from "react";
import axios from "axios";

export default function NewPost() {
  const [description, setDescription] = useState("");
  const [img, setImg] = useState<string>("");
  const handleSubmit = async (e: { preventDefault: () => void }) => {
    e.preventDefault();
    const base64 = img;
    if (!base64) {
      console.log("No image to upload");
      return;
    }
    const url = `http://localhost:3000/post/createpost`;
    const token = localStorage.getItem("token");
    try {
      const res = await axios.post(url, { description, base64 }, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      console.log(res);
    } catch (error) {
    }
  };
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
        console.log("Error: ", error);
      };
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="w-full border-t border-b border-gray-300"
    >
      <textarea
        placeholder="Compose a new Post"
        className="p-4 w-full border-gray-300 focus:border-blue-500 outline-none resize-none"
        rows={3}
        onChange={(e) => setDescription(e.target.value)}
      />
      <div className="flex p-4">
        <div className="flex-grow flex text-2xl gap-2">
          <div>
            <PopUp
              trigger={<CiImageOn />}
              content={
                <input
                  accept="image/*"
                  type="file"
                  onChange={changetoBase64}
                />
              }
            />
          </div>
          <div>
            <Checkbox />
          </div>
        </div>
        <div className="">
          <Button type="submit">
            New Post
          </Button>
        </div>
      </div>
    </form>
  );
}
