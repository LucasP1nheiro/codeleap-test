import axios from "axios"
import { DataType } from "../types/data"

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