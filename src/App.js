import Alamuriinstitue from "./compoenetsecond/Alamuriinstitue";
import Exploremore from "./compoenetsecond/Exploremore";
import Nearbycol from "./compoenetsecond/Nearbycol";
import Question from "./compoenetsecond/Question";
import Register from "./compoenetsecond/Register";
import Relatedqu from "./compoenetsecond/Relatedqu";
import Review from "./compoenetsecond/Review";

import AchievementsCarousel from "./component/Achivements";
import Brightfuture from "./component/Brightfuture";
import Callback from "./component/Callback";
import Choosecollege from "./component/Choosecollege";
import { Collegeadmi } from "./component/Collegeadmi";
import { Degree } from "./component/Degree";
import { Footer } from "./component/Footer";
import Navbar from "./component/navbar/Navbar";
import Perfectcollege from "./component/Perfectcollege";
import { Praisedmedia } from "./component/Praisedmedia";
import Studentlove from "./component/Studentlove";
import Youtube from "./component/Youtube";
import Medianews from "./Medianews";


function App() {
  return (
   <>
   <Navbar/>
   {/* <Brightfuture/>
   <Choosecollege/>
   <Praisedmedia/>
   <Collegeadmi/>
   
   
   
   <Degree/>
   <Perfectcollege/>
   <AchievementsCarousel/>
    <Youtube/>
   <Medianews/>
   <Studentlove/>
    <Callback/> */}
    <Alamuriinstitue/>
    <Review/>
    <Relatedqu/>
    <Question/>
    <Nearbycol/>
    <Exploremore/>
    <Register/>
    
    
   {/* <Footer/> */}

   
  
     
   </>
  );
}

export default App;
