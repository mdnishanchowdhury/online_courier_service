import { BlogCard } from "../Components/Blog/BlogCard";
import { BlogHeader } from "../Components/Blog/BlogHeader";
import { BlogSearch } from "../Components/Blog/BlogSearch";
import { Newsletter } from "../Components/Blog/Newsletter";

const blogPosts = [
  {
    id: 1,
    title: "How to Package Fragile Items for Safe Shipping",
    excerpt: "Learn the professional techniques for packing delicate items to ensure they arrive intact.",
    date: "May 15, 2023",
    readTime: "5 min read",
    author: "Sarah Johnson",
    likes: 42,
    comments: 8,
    image: "https://i.ibb.co/zVyFyvY7/images-3.jpg"
  },
  {
    id: 2,
    title: "The Future of Same-Day Delivery Services",
    excerpt: "Exploring how emerging technologies are transforming last-mile delivery solutions.",
    date: "April 28, 2023",
    readTime: "7 min read",
    author: "Michael Chen",
    likes: 89,
    comments: 12,
    image: "https://i.ibb.co/ksvz1tqs/images-4.jpg"
  },
  {
    id: 3,
    title: "International Shipping: Customs Made Simple",
    excerpt: "A complete guide to navigating customs regulations for hassle-free global shipping.",
    date: "April 10, 2023",
    readTime: "10 min read",
    author: "Emma Rodriguez",
    likes: 56,
    comments: 5,
    image: "https://i.ibb.co/1YywyPWG/8579065-International-Courier-Services-Bangladesh.jpg"
  }
];

const Blog = () => {
  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <BlogHeader></BlogHeader>
        <BlogSearch></BlogSearch>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {
            blogPosts.map((post, index) => (
              <BlogCard key={post.id} post={post} index={index} ></BlogCard>
            ))
          }
        </div>
        <Newsletter></Newsletter>
      </div>
    </div>
  );
};

export default Blog;