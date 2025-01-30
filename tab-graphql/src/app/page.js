"use client"
import Authors from "@/component/Authors"
import BlogPosts from "@/component/BlogPosts"
import Menu from "@/component/Menu"
import Link from "next/link"
import Button from "react-bootstrap/Button"
import { useQuery } from "@apollo/client"
import { GET_POSTS } from "@/app/graphql/queries"
import SideBlogs from "@/component/SideBlog"
import { useState } from "react"
import CreateFrom from "@/component/CreateForm"

export default function Home() {
  console.log("aaaa")
  const { data, loading, error } = useQuery(GET_POSTS)
  const [blogs, setBlogs] = useState([])
  const [showForm, setShowForm] = useState(false)

  if (loading) return <p>Loading...</p>
  if (error) return <p>Error {error.message} </p>

  return (
    <div>
      <div>
        <Menu />
      </div>
      <div>
        <div>
          <h1>Write blog</h1>

          {showForm ? (
            <CreateFrom setBlogs={setBlogs} showForm={setShowForm} />
          ) : (
            <Button variant='success' onClick={() => setShowForm(true)}>
              Create a Write
            </Button>
          )}
        </div>
      </div>
      <div className=' p-2'>
        <div className='grid grid-cols-4 gap-1'>
          <BlogPosts data={data} />
          <SideBlogs blogs={blogs} />
        </div>
        <div>
          <Authors />
        </div>
      </div>
    </div>
  )
}
