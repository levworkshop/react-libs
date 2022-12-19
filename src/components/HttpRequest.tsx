import axios from "axios";
import { useEffect, useState } from "react";

interface Post {
    title: string;
    id: number;
}

function HttpRequest() {

    const baseUrl = 'https://jsonplaceholder.typicode.com/users/1/';
    const [posts, setPosts] = useState<Array<Post>>([]);

    useEffect(() => {
        axios
            .get(`${baseUrl}posts`)
            .then(response => {
                setPosts(response.data);
            });
    }, []);

    if (posts.length === 0) return <div>No posts</div>;

    return (
        <div>
            {
                posts.map(post =>
                    <div
                        key={post.id}
                    >
                        {post.title}
                    </div>
                )
            }
        </div>
    );
}

export default HttpRequest;