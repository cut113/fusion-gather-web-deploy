import MainLayout from 'layouts/MainLayout'
import CreatePost from './components/CreatePost'
import PostItem from './components/PostItem'
import BlogList from './components/PostLists'

export default function Blog() {
  return (
    <div>
      <CreatePost />
      <BlogList />
    </div>
  )
}
