/** @format */
"use client";

import { deletePost } from "../actions/actions";
import Link from "next/link";
import { Post } from "../types/types";

const Posts = ({ post }: { post: Post }) => {
    console.log(post);
    const handleDelete = async (id: string) => {
        await deletePost(id);
    };

    return (
        <div
            className="bg-yellow-300 px-5 py-2 rounded-2xl"
            key={post.id}>
            <div className="w-40 flex justify-between items-center">
                <Link href={`/posts/${post.slug}`}>{post.title}</Link>
                <button
                    onClick={() => handleDelete(post.id)}
                    className="w-10">
                    X
                </button>
            </div>
        </div>
    );
};

export default Posts;
