import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'

const New = () => {
    const [newBookmark, setNewBookmark] = useState({
        name: "",
        url: "",
        category: "",
        is_favorite: false
    })
    const API = import.meta.env.VITE_BASE_URL
    const navigate = useNavigate()

    const handleCheckBox = (e) => {
        setNewBookmark((prev) => {
            const favorited = !newBookmark.is_favorite
            return {...prev, is_favorite: favorited}
        })
    }

    const handleChange = (e) => {
        setNewBookmark((prev) => {
            return {...prev, [e.target.name]: e.target.value}
        })
    }
    
    const handleSubmit = (e) => {
        e.preventDefault()
        fetch(`${API}/bookmarks`, {
            method: "POST",
            body: JSON.stringify(newBookmark),
            headers: {
                "Content-Type": "application/json"
            }
        })
            .then(res => res.json())
            .then(res => navigate('/'))
    }


    return (
        <div>
            <form onSubmit={handleSubmit}>
                <fieldset>
                    <legend>Bookmark</legend>
                    <input 
                        type="text" 
                        placeholder='Name' 
                        value={newBookmark.name} 
                        name="name" 
                        onChange={handleChange}
                    />
                    <br/>
                    <input type="text" placeholder='url' value={newBookmark.url} name="url" onChange={handleChange}/>
                    <br/>
                    <input type="text" placeholder='Category' value={newBookmark.category} name="category" onChange={handleChange}/>
                    <br/>
                    <label htmlFor="fav">Is Favorite</label>
                    <input 
                        id="fav" 
                        type="checkbox" 
                        onChange={handleCheckBox} 
                        checked={newBookmark.is_favorite} />
                    <br/>
                    <input type="submit" value="Submit"/>
                </fieldset>
            </form>
        </div>
    );
};

export default New;