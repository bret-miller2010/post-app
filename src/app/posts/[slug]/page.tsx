/** @format */

import prisma from "../../lib/db";
import Link from "next/link";

export default async function PostPage({ params }) {
    const { slug } = await params;

    const post = await prisma.post.findUnique({
        where: {
            slug: slug,
        },
    });

    return (
        <div className="w-screen h-screen flex flex-col space-y-5 justify-center items-center">
            <div className="px-5 bg-gray-500 h-12 flex justify-center items-center rounded-2xl">This is a new page with the post information from the database.</div>
            <div className="px-5 bg-gray-500 h-12 flex justify-center items-center rounded-2xl">Title: {post?.title}</div>
            <div className="px-5 bg-gray-500 h-12 flex justify-center items-center rounded-2xl">Content: {post?.content}</div>
            <Link
                className="w-32 bg-gray-300 h-12 flex justify-center items-center rounded-2xl"
                href="/">
                Return home
            </Link>
        </div>
    );
}
