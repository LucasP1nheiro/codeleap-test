import { FormEvent, useState } from "react";
import { createPost, getPosts } from "../../actions/fetchApi";
import { PostType } from "../../types/post";
import { DataType } from "../../types/data";


interface FormPostPros {
  setData: (data: DataType[]) => void
}


export function useFormPost({setData} : FormPostPros) {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const username = localStorage.getItem('username') || "";

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();

    const post: PostType = {
      username,
      title,
      content,
    };


    await createPost(post); // Wait for the post to be created

    setTitle("");
    setContent("");

    //refetching data
    await getPosts({setData})
  };

  return {
    title,
    setTitle,
    content,
    setContent,
    handleSubmit,
  };
}