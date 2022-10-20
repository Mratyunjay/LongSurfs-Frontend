import './post.css'

export default function Post() {
    return (
        <div className='post'>
            <img className="postImg" src="https://images.unsplash.com/photo-1664873239352-40aca8883964?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80" alt="" />
            <div className="postInfo">
                <div className="postCats">
                    <span className='postCat'>Music</span>
                    <span className='postCat'>Life</span>
                </div>
                <span className='postTitle'>Lorem, ipsum dolor </span>
                <hr />
                <span className='postDate'>1 hr ago</span>
            </div>
            <p className='postDescription'>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Deleniti, eaque! Cupiditate ratione delectus consectetur enim ex, blanditiis ullam corporis nihil vitae non voluptatum molestias corrupti eius unde accusantium reiciendis eligendi.
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Deleniti, eaque! Cupiditate ratione delectus consectetur enim ex, blanditiis ullam corporis nihil vitae non voluptatum molestias corrupti eius unde accusantium reiciendis eligendi.
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Deleniti, eaque! Cupiditate ratione delectus consectetur enim ex, blanditiis ullam corporis nihil vitae non voluptatum molestias corrupti eius unde accusantium reiciendis eligendi.
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Deleniti, eaque! Cupiditate ratione delectus consectetur enim ex, blanditiis ullam corporis nihil vitae non voluptatum molestias corrupti eius unde accusantium reiciendis eligendi.
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Deleniti, eaque! Cupiditate ratione delectus consectetur enim ex, blanditiis ullam corporis nihil vitae non voluptatum molestias corrupti eius unde accusantium reiciendis eligendi.
            </p>
        </div>
    )
}
