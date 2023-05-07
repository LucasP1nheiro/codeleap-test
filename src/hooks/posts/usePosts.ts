import { useEffect, useState } from "react"
import { DataType } from "../../types/data"
import { getPosts } from "../../actions/fetchApi"

export function usePosts() {
    const [data, setData] = useState<DataType[] | null>(null)

    const handleDataUpdate = (data: DataType[]) => {
        setData(data)
    }
      
      useEffect(() => {
        getPosts({ setData: handleDataUpdate })
      }, [])
    
    return data
}