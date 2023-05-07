import {  useEffect, useState } from "react"
import { DataType } from "../../types/data"
import { getPosts } from "../../actions/fetchApi"
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { RootState } from "../../redux/username/store";

export function usePosts() {
  const [data, setData] = useState<DataType[] | null>(null)
  const [refetchData, setRefetchData] = useState(1)
  const username = useSelector((state: RootState) => state.name.value);
  const navigate = useNavigate()

  //if user is not authenticated then redirect to login page
  if (username === "") navigate('/')

  const handleDataUpdate = (newdata: DataType[]) => {
    setData(newdata)
    
  }
    
  
    useEffect(() => {
      getPosts({ setData: handleDataUpdate })
    }, [refetchData])
  
  return {
    data,
    refetchData,
    setRefetchData
  }
}