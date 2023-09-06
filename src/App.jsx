import { useCreatePostMutation, useGetAllPostQuery } from "./services/post"

export default function App() {
//  const response = useGetAllPostQuery();

 const [createpost, response] = useCreatePostMutation();
  
  if (response.isLoading) {
    return <h1>Loading...</h1>
  }
  if (response.isError) {
    return <h1>Error</h1>
  }

  return (
    <>
    <h1 className="text-3xl font-bold underline">
      {
        response?.data?.results?.map((post) => (
          <div key={post.id}>
            <h1>{post.id}</h1>
            <h1>{post.account_number}</h1>
          </div>
        ))
      }
    </h1>
    <h1>
      <button onClick={() => createpost({})}>Create Post</button>
    </h1>
    </>
  )
}