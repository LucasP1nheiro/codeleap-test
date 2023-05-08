import {usePosts} from '../hooks/posts/usePosts'
import FormPost from "../components/Posts/FormPost"
import DeletePost from '../components/Posts/DeletePost'	
import PostCard from "../components/Posts/PostCard"
import UpdatePost from '../components/Posts/UpdatePost'
import Logout from '../components/Posts/Logout'





export const Posts = () => {
    const {
        data,
        setData,
        openChangeModal,
        setOpenChangeModal,
        openDeleteModal,
        setOpenDeleteModal,
        currentId,
        setCurrentId
    } = usePosts()
   
    

    
  return (
      <div className="w-screen min-h-screen flex flex-col items-center bg-default overflow-x-hidden">
          <header className="bg-paleBlue xl:w-1/2 md:w-2/3 w-full flex items-center px-12 py-4 justify-between">
              <h1 className="text-2xl text-white font-medium">CodeLeap Network</h1>
              <Logout />
          </header>
          <main className="bg-white xl:w-1/2 md:w-2/3 w-full h-full p-8 flex flex-col gap-4">
              <FormPost setData={setData} />
              {data?.map((post, index) => (
                  <PostCard
                      post={post}
                      key={post.id}
                      openChangeModal={setOpenChangeModal}
                      openDeleteModal={setOpenDeleteModal}
                      setCurrentId={setCurrentId}
                      index={index}
                  />
              ))}
          </main>

          {openDeleteModal && (
              <DeletePost
                  openDeleteModal={setOpenDeleteModal}
                  id={currentId}
                  setData={setData}
              />
          )}

          {openChangeModal && (
              <UpdatePost
                  openChangeModal={setOpenChangeModal}
                  setData={setData}
                  id={currentId}
              />
          )}
    </div>
  )
}
