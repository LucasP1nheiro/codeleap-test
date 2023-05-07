import { FormEvent, useState } from "react";
import { createPost } from "../../actions/fetchApi";
import { useSelector } from "react-redux";
import { RootState } from "../../redux/username/store";
import { PostType } from "../../types/post";
import { usePosts } from "./usePosts";

export function useFormPost() {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const username = useSelector((state: RootState) => state.name.value);
  const { refetchData, setRefetchData } = usePosts();

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

    // Flag to refetch the data
    setRefetchData((prev) => prev + 1);
  };

  return {
    title,
    setTitle,
    content,
    setContent,
    handleSubmit,
  };
}