import axios from "axios"
import { DataType } from "../types/data"
import { PostType } from "../types/post"
import { ChangePostType } from "../types/changePost"

interface getPostsProps {
    setData: (data: DataType[]) => void
}

export const getPosts = async ({setData} : getPostsProps) => {
    try {
      const response = await axios.get('https://dev.codeleap.co.uk/careers/')
      setData(response.data.results)
    } catch (error) {
      console.error(error)
    }
}

export const createPost = async (post: PostType) => {
  await axios.post('https://dev.codeleap.co.uk/careers/?format=api', post)
}

export const changePost = async (post: ChangePostType, id : number) => {
  await axios.patch(`https://dev.codeleap.co.uk/careers/${id}/`, post)
}

export const deletePost = async (id: number) => {
   await axios.delete(`https://dev.codeleap.co.uk/careers/${id}/`)

}