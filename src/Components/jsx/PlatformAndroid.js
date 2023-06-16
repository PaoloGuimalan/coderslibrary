import React from 'react'
import '../css/Platform.css'
// import { Carousel } from 'react-responsive-carousel'
// import 'react-responsive-carousel/lib/styles/carousel.min.css'
import Carousel from 'react-multi-carousel'
import "react-multi-carousel/lib/styles.css";
import { android } from '../data/android'
import Splash from '../res/android/splash.jpg'
import Home from '../res/android/home.jpg'

function PlatformAndroid() {

  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 10
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 4.7
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1.7
    }
  };

  const downloadAPK = (version) => {
    if(version == 1){
//       window.open('https://github.com/PaoloGuimalan/coderslibrary_app/blob/main/productionBuild/CodersLibrary.apk?raw=true','_blank')
      window.open('https://github.com/PaoloGuimalan/coderslibrary_app/releases/download/v1.0.1/app-release.apk','_blank')
    }
  }

  return (
    <div id='div_platform'>
      <div id='div_platform_label'>
        <p id='tag_platform_label'>Coder's Library App</p>
        <p id='tag_label_device'>Android</p>
      </div>
      <div id='carousel_holder'>
          <Carousel responsive={responsive} swipeable={true} draggable={true}>
            {android.map((items, i) => {
              return(
                <img key={i} src={items.img} style={{width: 200, height: "100%", border: "solid 1px grey"}} />
              )
            })}
          </Carousel>
      </div>
      <div id='div_statement'>
        <p id='tag_statement'>
          This is one of the new services Coder's Library offers. Having multiple demands of materials we had. We have 
          decided to release an App Version of our System which now, provides Account Management, Offline Mode and many 
          more. This Version of it is an Android Version where it can be installed in any device you desire that holds 
          an Android OS from versions Android 5.0 (Lollipop) up to the latest.
        </p>
      </div>
      <div id='div_statement'>
        <p id='label_features'>Features</p>
        <p id='features_statement'>
          -Account Management
        </p>
        <p id='features_statement'>
          -Recents History
        </p>
        <p id='features_statement'>
          -Read inside the App
        </p>
        <p id='features_statement'>
          -Bookmark Pages
        </p>
        <p id='features_statement'>
          -Download Books / Offline Mode
        </p>
        <p id='features_statement'>
          -Comment / Tag someone on a Book
        </p>
        <p id='features_statement'>
          -Like/Heart/Save a Book
        </p>
        <p id='features_statement'>
          -Search Books and Categories
        </p>
        <p id='features_statement'>
          -Notifications and Updates
        </p>
      </div>
      <div id='div_downloads'>
        <p id='label_features'>Downloads</p>
        <div id='div_selection_downloads'>
          <button onClick={() => { downloadAPK(1) }} className='button_downloads_version'>APK Version 1.0</button>
        </div>
      </div>
    </div>
  )
}

export default PlatformAndroid
