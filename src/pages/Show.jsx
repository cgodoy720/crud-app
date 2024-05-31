import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom'

const Show = () => {
    const API = import.meta.env.VITE_BASE_URL
    const { id } = useParams()
    const [bookmark, setBookmark] = useState({
        name: "",
        url: "",
        category: "",
        is_favorite: false
    })

    useEffect(() => {
        
        fetch(`${API}/bookmarks/${id}`)
            .then(res => res.json())
            .then(res => setBookmark(res))
    }, [id])


    return (
        <div>
            {bookmark.name}
            <Link to={`/bookmarks/${id}/edit`}>Edit</Link>
        </div>
    );
};

export default Show;