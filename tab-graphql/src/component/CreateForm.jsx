import { useState, useEffect } from "react"
import Form from "react-bootstrap/Form"
import Button from "react-bootstrap/Button"
import Link from "next/link"

function CreateForm({ setBlogs, showForm }) {
  const [title, setTitle] = useState("")
  const [excerpt, setExcerpt] = useState("")
  const [date, setDate] = useState("")

  useEffect(() => {
    const storedBlogs = JSON.parse(localStorage.getItem("blogs"))
    if (storedBlogs) {
      setBlogs(storedBlogs)
    }
  }, [setBlogs])

  const handleSubmit = (e) => {
    e.preventDefault()

    if (!title || !excerpt || !date) {
      alert("All fields are required!")
      return
    }

    const newBlog = {
      title,
      excerpt,
      date,
    }

    setTitle("")
    setExcerpt("")
    setDate("")

    setBlogs((prevBlogs) => {
      const updatedBlogs = [...prevBlogs, newBlog]
      localStorage.setItem("blogs", JSON.stringify(updatedBlogs))
      return updatedBlogs
    })
    showForm(false)
  }

  return (
    <div className='w-full flex justify-center mt-12'>
      <div className='w-[650px]'>
        <form onSubmit={handleSubmit}>
          <Form.Control
            size='lg'
            type='text'
            placeholder='Title'
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
          <br />
          <Form.Control
            size='lg'
            type='text'
            placeholder='Excerpt'
            value={excerpt}
            onChange={(e) => setExcerpt(e.target.value)}
          />
          <br />
          <Form.Control
            size='lg'
            type='text'
            placeholder='Date'
            value={date}
            onChange={(e) => setDate(e.target.value)}
          />
          <br />
          <Button variant='primary' type='submit'>
            Submit
          </Button>
        </form>
      </div>
    </div>
  )
}

export default CreateForm
