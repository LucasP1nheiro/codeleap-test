import { useEffect, useState } from "react"
import FormPost from "../components/Posts/FormPost"
import axios from "axios"
import { DataType } from "../types/data"
import PostCard from "../components/Posts/PostCard"



export const Posts = () => {
    const [data, setData] = useState<DataType[]>([])

    useEffect(() => {
        axios.get('https://dev.codeleap.co.uk/careers/')
        .then(response => setData(response.data.results))
    }, [])

  return (
      <div className="w-screen min-h-screen flex flex-col items-center bg-default">
          <header className="bg-paleBlue xl:w-1/2 md:w-2/3 w-full flex-items-center px-12 py-4">
              <h1 className="text-2xl text-white font-medium">CodeLeap Network</h1>
          </header>
          <main className="bg-white xl:w-1/2 md:w-2/3 w-full h-full p-4 flex flex-col gap-4">
              <FormPost />
              {data?.map(post => (
                  <PostCard post={post} key={post.id} />
              ))}
          </main>
    </div>
  )
}
