import './singlePost.css'

export default function SinglePost() {
    return (
        <div className='singlePost'>
            <div className="singlePostWrapper">
                <img className="singlePostImg" src="https://images.unsplash.com/photo-1567719366100-e03d172ce900?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80" alt="" />
                <h1 className='singlePostTitle'>Crows
                    <div className="singlePostEdit">
                        <i className="singlePostIcon fa-regular fa-pen-to-square"></i>
                        <i className="singlePostIcon fa fa-trash-alt"></i>
                    </div>
                </h1>
                <div className="singlePostInfo">
                    <span className='singlePostAuthor'>Author: <b>Jay</b></span>
                    <span className='singlePostDate'>1 hr ago</span>
                </div>
                <div className="singlePostDesc">
                    <p>
                        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tempore quae, cumque sequi molestias ullam laudantium deleniti sunt distinctio iusto cupiditate, quaerat consectetur, et voluptate quidem. Illo rerum nisi consectetur ut?
                        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tempore quae, cumque sequi molestias ullam laudantium deleniti sunt distinctio iusto cupiditate, quaerat consectetur, et voluptate quidem. Illo rerum nisi consectetur ut?
                        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tempore quae, cumque sequi molestias ullam laudantium deleniti sunt distinctio iusto cupiditate, quaerat consectetur, et voluptate quidem. Illo rerum nisi consectetur ut?
                        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tempore quae, cumque sequi molestias ullam laudantium deleniti sunt distinctio iusto cupiditate, quaerat consectetur, et voluptate quidem. Illo rerum nisi consectetur ut?
                        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tempore quae, cumque sequi molestias ullam laudantium deleniti sunt distinctio iusto cupiditate, quaerat consectetur, et voluptate quidem. Illo rerum nisi consectetur ut?
                    </p>
                </div>
            </div>
        </div>
    )
}
