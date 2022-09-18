import './PicItem.css';

function PicItem (props) {
    const {picture, openSlamDunkPic}=props;
    return(
        <div className='pic-item'>
            <img src={picture.thumbnailUrl} onClick={()=>{openSlamDunkPic(picture)}} />
            <h4>{picture.title}</h4>
        </div>
          
    )
}

export default PicItem;  

