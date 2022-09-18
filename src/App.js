import './App.css';
import {useState} from 'react';
import AppHeader from './components/AppHeader';
import PicItem from './components/PicItem';
import PicPost from './components/PicPost';
import shohokuTeam from './data/shohokuTeam';
import AppSearch from './components/AppSearch';



function App() {

   const [selectedPic,setSelectedPic] = useState(null);
   const [searchText, setSearchText] = useState('');


   function onPictureClick(openPicture) {
      setSelectedPic(openPicture);
   }

   function PictureClose () {
      setSelectedPic(null);
   }

   // const fillteredPictures = shohokuTeam.filter((picture)=>{
   //    return picture.title.includes(searchText);
   // })


   const pictureLists = shohokuTeam.filter((picture)=>{
      return picture.title.includes(searchText);
   }).map((picture, index)=>{
      return <PicItem key={index} picture={picture} openSlamDunkPic = {onPictureClick} />;
   });

   let slamdunkPost = null;
   if(!!selectedPic) {
      slamdunkPost = <PicPost picture={selectedPic} onBgClick={PictureClose}/>
   }


   return (
      <div className = "app">
            <AppHeader/>
            <section className='app-section'>
               <div className='app-container'>
               <AppSearch value={searchText} onValueChange={setSearchText} />
               <div className="app-grid">
                  {pictureLists}
               </div>
               </div>
            </section>
         {slamdunkPost}
      </div>
   );
}

export default App;

