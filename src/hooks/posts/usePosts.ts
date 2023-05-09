import {  useEffect, useState } from "react"
import { DataType } from "../../types/data"
import { getPageLimit, getPosts } from "../../actions/fetchApi"
import { useNavigate } from "react-router-dom";


export  function usePosts()  {
  const [data, setData] = useState<DataType[] | null>(null)
  const [openChangeModal, setOpenChangeModal] = useState(false)
  const [openDeleteModal, setOpenDeleteModal] = useState(false)
  const username = localStorage.getItem('username');
  const navigate = useNavigate()
  const [pageLimit, setPageLimit] = useState(0)
  const [currentPage, setCurrentPage] = useState(0)
  const [isLoading, setIsLoading] = useState(true)


  //this id will be passed on the delete and patch request
  const [currentId, setCurrentId] = useState(0)

  //if user is not authenticated then redirect to login page
  useEffect(() => {
    if (username === "") navigate('/')
  }, [])

  const handleDataUpdate = (newdata: DataType[]) => {
    window.scroll(0,0)
    setData(newdata)
  }

  const handlePrevPage = () => {
    window.scroll(0,0)
    if (currentPage > 0)setCurrentPage(currentPage - 1)
  }

  const handleNextPage = () => {
    if (currentPage < pageLimit) setCurrentPage(currentPage + 1)
  }
    
  //gets the limit of pages so the pagination doesnt pass the limit
  useEffect(() => {
    getPageLimit({ setPageLimit })
  }, [])

  useEffect(() => {
    getPosts({ setData: handleDataUpdate, page: currentPage })
  }, [])

  useEffect(() => {
    if (data !== null) setIsLoading(false)
  }, [data])

  //refetch everytime the page changes
  useEffect(() => {
    getPosts({ setData: handleDataUpdate, page: currentPage })
  }, [currentPage])
  
  return {
    data,
    setData,
    setOpenChangeModal,
    setOpenDeleteModal,
    openChangeModal,
    openDeleteModal,
    currentId,
    setCurrentId,
    currentPage,
    handlePrevPage,
    handleNextPage,
    isLoading,
    setIsLoading
  }
}