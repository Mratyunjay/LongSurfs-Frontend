import Header from '../../components/header/Header'
import Sidebar from '../../components/sidebar/Sidebar'
import Posts from '../../components/posts/Posts'
import './home.css'
import { useState, useEffect } from 'react';
import axios from 'axios';
import { useLocation } from 'react-router-dom';

export default function Home() {
    const [posts, setPosts] = useState([]);
    const { search } = useLocation();

    useEffect(() => {
        const fetchPosts = async () => {
            const res = await axios.get("/posts" + search);
            setPosts(res.data);
            console.log(res.data);
        }
        fetchPosts();
    }, [search])

    return (
        <>
            <Header />
            <div className='home'>
                <Posts posts={posts} />
                <Sidebar />
            </div>
        </>
    )
}
