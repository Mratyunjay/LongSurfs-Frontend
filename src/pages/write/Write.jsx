import axios from 'axios';
import { useContext } from 'react';
import { useState } from 'react';
import { Context } from '../../context/Context';
import './write.css'

export default function Write() {
    const [title, setTitle] = useState("");
    const [description, setdesc] = useState("");
    const [file, setfile] = useState(null);
    const { user } = useContext(Context);

    const handleSubmit = async (e) => {
        e.preventDefault();
        const newPost = {
            username: user.username,
            title: title,
            description: description,
        };
        if (file) {
            const data = new FormData();
            const filename = Date.now() + file.name;
            data.append("name", filename);
            data.append("file", file);
            newPost.photo = filename;
            try {
                await axios.post("/upload", data)
            } catch (error) {
                console.log(error);
            }
        }
        try {
            const res = await axios.post("/posts", newPost);
            window.location.replace("/post/" + res.data._id);
        } catch (error) {
            console.log(error);
        }
    }

    return (
        <div className='write'>
            {file && (
                <img className="writeImg" src={URL.createObjectURL(file)} alt="" />
            )}
            <form className='writeForm' onSubmit={handleSubmit}>
                <div className="writeFormGroup">
                    <label htmlFor="fileInput" ><i className="writeIcon fa-solid fa-plus"></i></label>
                    <input type="file" id="fileInput" style={{ display: 'none' }}
                        onChange={(e) => setfile(e.target.files[0])} />
                    <input type="text" placeholder='Title' className='writeInput' autoFocus={true}
                        onChange={(e) => setTitle(e.target.value)} />
                </div>
                <div className="writeFormGroup">
                    <textarea placeholder='Tell your story...' type='text' className='writeInput writeText' rows="10"
                        onChange={(e) => setdesc(e.target.value)}></textarea>
                </div>
                <button className="writeSubmit" type='submit'>Publish</button>
            </form>
        </div>
    )
}
