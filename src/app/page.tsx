/** @format */

import prisma from "./lib/db";
import { createPost } from "./actions/actions";
import Posts from "./components/posts";

export default async function Home() {
    const posts = await prisma.post.findMany();

    return (
        <div className="w-screen h-screen flex flex-col space-y-5 justify-center items-center">
            <div className="h-[500px] w-[500px] flex justify-center items-center bg-red-500">
                <form
                    className="flex flex-col space-y-5"
                    action={createPost}>
                    <input
                        type="text"
                        name="title"
                        placeholder="Title"
                    />
                    <textarea
                        name="content"
                        rows={5}
                        placeholder="content"></textarea>
                    <button
                        type="submit"
                        className="w-20 h-20 bg-green-500">
                        Add Post
                    </button>
                </form>
            </div>

            <div className="space-y-2">
                <div className="text-center">All Posts</div>
                <div className="space-y-2">
                    {posts.map((post) => {
                        return (
                            <Posts
                                post={post}
                                key={post.id}
                            />
                        );
                    })}
                </div>
            </div>
        </div>
    );
}
