import'./PicPost.css';

function PicPost(props) {
    const { picture , onBgClick  }= props;
    return(
        <div className = "pic-post">
            <div className="pic-post-bg" onClick={onBgClick}/>
                <div className="pic-post-content">
                    <img src= {picture.fullUrl}/>
                    <h4>{picture.title}</h4>
                </div>
        </div>
    );
}

export default PicPost;