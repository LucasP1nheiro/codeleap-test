import axios from "axios"
import { DataType } from "../types/data"
import { PostType } from "../types/post"
import { ChangePostType } from "../types/changePost"

interface getPostsProps {
  setData: (data: DataType[]) => void,
  page: number
}

interface getPageLimitProps {
  setPageLimit : (n: number) => void
}

export const getPosts = async ({ setData, page }: getPostsProps) => {
  

    try {
      const response = await axios.get(`https://dev.codeleap.co.uk/careers/?offset=${page * 10}`)
      setData(response.data.results)
      console.log(response.data)
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

export const getPageLimit = async ({setPageLimit}: getPageLimitProps) => {
  const response = await axios.get('https://dev.codeleap.co.uk/careers/')

  const totalPost = Math.round(response.data.count / 10)

  setPageLimit(totalPost)
}

export const deletePost = async (id: number) => {
   await axios.delete(`https://dev.codeleap.co.uk/careers/${id}/`)

}