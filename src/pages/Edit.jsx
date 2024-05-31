import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom'

const Edit = () => {
    const [bookmark, setBookmark] = useState({
        name: "",
        url: "",
        category: "",
        is_favorite: false
    })
    const { id } = useParams()
    const navigate = useNavigate()
    const API = import.meta.env.VITE_BASE_URL

    useEffect(() => {
        fetch(`${API}/bookmarks/${id}`)
            .then(res => res.json())
            .then(res => setBookmark(res))
    }, [id])

    const handleSubmit = (e) => {
        e.preventDefault()
        fetch(`${API}/bookmarks/${id}`, {
            method: "PUT",
            body: JSON.stringify(bookmark),
            headers: {
                "Content-Type": "application/json"
            }
        })
            .then(res => res.json())
            .then(() => navigate(`/bookmarks/${id}`))
    }


    const handleCheckBox = (e) => {
        setBookmark((prev) => {
            const favorited = !newBookmark.is_favorite
            return {...prev, is_favorite: favorited}
        })
    }

    const handleChange = (e) => {
        setBookmark((prev) => {
            return {...prev, [e.target.name]: e.target.value}
        })
    }

    if(!bookmark) return <div>Loading...</div>
    return (
        <div>
            <h1>Edit {bookmark.name}</h1>
            <form onSubmit={handleSubmit}>
                <input 
                    type="text" 
                    placeholder='Name' 
                    value={bookmark.name} 
                    name="name" 
                    onChange={handleChange}
                />
                <input 
                    type="text" 
                    placeholder='URL' 
                    value={bookmark.url} 
                    name="url" 
                    onChange={handleChange}
                />
                <input 
                    type="text" 
                    placeholder='Category' 
                    value={bookmark.category} 
                    name="category" 
                    onChange={handleChange}
                />
                <input
                    type="checkbox"
                    checked={bookmark.is_favorite}
                    onChange={handleCheckBox}
                    id="fav"
                />
                <label htmlFor='fav'>Favorite</label>
                <input type="submit" value="Submit"/>
            </form>
        </div>
    );
};

export default Edit;