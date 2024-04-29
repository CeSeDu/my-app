// src/components/BlogCard.jsx
import Image from "next/image";
import Link from "next/link";
import React from "react";

const BlogCard = () => {

  return (
<div className="m-12">
<Link href="/fullBlogCards" className="flex justify-center p-5 border bg-purple-200 rounded-lg m-auto  w-1/4">
   <div >
    <button className="">Read Blog</button>
    </div>
</Link>
</div>
    
  
  );
};

export default BlogCard;
