import {  useEffect, useState } from "react"
import { DataType } from "../../types/data"
import { getPosts } from "../../actions/fetchApi"
import { useNavigate } from "react-router-dom";


export function usePosts() {
  const [data, setData] = useState<DataType[] | null>(null)
  const [openChangeModal, setOpenChangeModal] = useState(false)
  const [openDeleteModal, setOpenDeleteModal] = useState(false)
  const username = localStorage.getItem('username');
  const navigate = useNavigate()

  //this id will be passed on the delete and patch request
  const [currentId, setCurrentId] = useState(0)

  //if user is not authenticated then redirect to login page
  useEffect(() => {
    if (username === "") navigate('/')
  }, [])

  const handleDataUpdate = (newdata: DataType[]) => {
    setData(newdata)

  }
    
  
  
  useEffect(() => {
    getPosts({ setData: handleDataUpdate })
  }, [])
  
  return {
    data,
    setData,
    setOpenChangeModal,
    setOpenDeleteModal,
    openChangeModal,
    openDeleteModal,
    currentId,
    setCurrentId
  }
}