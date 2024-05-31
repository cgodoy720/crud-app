import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom'

const Index = () => {
    const [bookmarks, setBookmarks] = useState([])
    const API = import.meta.env.VITE_BASE_URL
    useEffect(() => {
        fetch(`${API}/bookmarks`)
            .then(res => res.json())
            .then(res => {
                console.log(res)
                setBookmarks((prevBookmarks) => res)
            })
    }, [])
    return (
        <div>
            {bookmarks.map((bookmark) => (
                <Link to={`/bookmarks/${bookmark.id}`} key={bookmark.id}>
                    <div key={bookmark.id} style={{ paddingLeft: "15px", fontSize: "20px" }}>{bookmark.name}</div>
                </Link>
            ))}
        </div>
    );
};

export default Index;