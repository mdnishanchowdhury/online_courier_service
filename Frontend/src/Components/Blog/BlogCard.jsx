import { motion } from "framer-motion";
import { FiCalendar, FiClock, FiUser, FiArrowRight } from "react-icons/fi";
import { FaRegBookmark, FaRegCommentAlt, FaRegHeart } from "react-icons/fa";

export const BlogCard = ({ post, index }) => (
  <motion.article
    className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl"
    initial={{ opacity: 0, y: 50 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ delay: index * 0.2, duration: 0.6 }}
    whileHover={{ scale: 1.03 }}
  >
    <div className="h-48 overflow-hidden">
      <motion.img
        src={post.image}
        alt={post.title}
        className="w-full h-full object-cover"
        whileHover={{ scale: 1.1 }}
        transition={{ duration: 0.4 }}
      />
    </div>
    <div className="p-6">
      <h2 className="text-xl font-bold text-gray-900 mb-2 hover:text-amber-600 transition-colors">
        {post.title}
      </h2>
      <p className="text-gray-600 mb-4">{post.excerpt}</p>

      <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
        <div className="flex items-center">
          <FiUser className="mr-1" />
          <span>{post.author}</span>
        </div>
        <div className="flex items-center space-x-4">
          <div className="flex items-center">
            <FiCalendar className="mr-1" />
            <span>{post.date}</span>
          </div>
          <div className="flex items-center">
            <FiClock className="mr-1" />
            <span>{post.readTime}</span>
          </div>
        </div>
      </div>

      <div className="flex items-center justify-between border-t border-gray-100 pt-4">
        <div className="flex items-center space-x-4">
          <div className="flex items-center text-gray-500">
            <FaRegHeart className="mr-1" />
            <span>{post.likes}</span>
          </div>
          <div className="flex items-center text-gray-500">
            <FaRegCommentAlt className="mr-1" />
            <span>{post.comments}</span>
          </div>
        </div>
        <div className="flex items-center space-x-3">
          <button className="text-gray-400 hover:text-amber-500 transition-colors">
            <FaRegBookmark />
          </button>
          <button className="flex items-center text-amber-600 font-medium hover:text-amber-700 transition-colors">
            Read more <FiArrowRight className="ml-1" />
          </button>
        </div>
      </div>
    </div>
  </motion.article>
);
