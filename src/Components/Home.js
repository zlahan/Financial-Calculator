import React from 'react';
import './Home.css';

import { useNavigate } from 'react-router-dom';

const Home = () => {
  const navigate = useNavigate();
      return (
          <div>
                {/* The section below is for the body of the homepage */}
                <html>
                  <head>
                    <title>Financial Calculadora</title>
                    <link rel="stylesheet" href="styles/styles.css" />
                    <script async src="./javascript/index.js"></script>
                  </head>
                  <body>
                    <br />
                    <h1>This is a Financial Calculator for calculating different things</h1>
                    <h2>This program will be used to calculate loans, CDs, Credit Cards, and Mortgages</h2>
                    <h2>You will also get a visual representation of how your finances will look</h2>
                    <h2>~~~</h2>
                    <h2>On top of the page, you will see Home, Calculate, Contact, and Login options</h2>
                    <h2>~~~</h2>
                    <h3>Clicking each of the links will bring you to the respective pages</h3>
                    <h2>~~~</h2>
                    <h2>This program is a work-in-progress, and lots of styling and functionalities</h2>
                    <h2>are subject to change at any time. Thank you!</h2>
                    <h2>~~~</h2>
                    <h4 id='date'></h4>

                    <div class="image-section">
                      {/* <div class="section-style"> */} <div>
                        <img src="C:\Users\Han\Desktop\React\seniorproject\src\Images\1.jpg" 
                        alt="" />
                        <p>Sample Picture 1</p>
                      </div>

                      {/* <div class="section-style"> */} <div>
                        <img src="C:\Users\Han\Desktop\React\seniorproject\src\Images\2.gif" 
                        alt="" />
                        <p>Sample Picture 2</p>
                      </div>
                    </div>

                    <div class="image-section">
                      {/* <div class="section-style"> */} <div>
                        <img src="C:\Users\Han\Desktop\React\seniorproject\src\Images\3.png" 
                        alt="" />
                        <p>Sample Picture 3</p>
                      </div>

                      {/* <div class="section-style"> */} <div>
                        <img src="" 
                        alt="" />
                        <p>Sample Picture 4</p>
                      </div>
                    </div>

                    <div class="image-section">
                      {/* <div class="section-style"> */} <div>
                        <img src="" 
                        alt="" />
                        <p>Sample Picture 5</p>
                      </div>

                      {/* <div class="section-style"> */} <div>
                        <img src="" 
                        alt="" />
                        <p>Sample Picture 6</p>
                      </div>
                    </div>

                    <div class="image-section">
                      {/* <div class="section-style"> */} <div>
                        <img src="" 
                        alt="" />
                        <p>Sample Picture 7</p>
                      </div>

                      {/* <div class="section-style"> */} <div>
                        <img src="" 
                        alt="" />
                        <p>Sample Picture 8</p>
                      </div>
                    </div>

                  </body>
                </html>
          </div>
    );
  }

  export default Home;

// function Calculator(){
//     return (
//         <div>
//             <nav class = "navbar background">
//                 <ul class = "nav-list">
//                     <div class = "logo"> 
//                         <img src = "https://pisces.bbystatic.com/image2/BestBuy_US/images/products/9023/9023969_sa.jpg;maxHeight=640;maxWidth=550"
//                         alt = "Logo lmafoasdof" />
//                     </div>
//                     <li><button onClick = "#Home" id = "button"> Home</button></li>
//                     <li><button onClick = "#Calculate" id = "button"> Calculate</button></li>
//                     <li><button onClick = "#Contact Us" id = "button"> Contact</button></li>
//                 </ul>
//               </nav>

//               {/* The section below is for the body of the homepage */}
//               <html>
//                 <head>
//                   <title>Financial Calculadora</title>
//                   <link rel="stylesheet" href="styles/styles.css" />
//                   <script async src="./javascript/index.js"></script>
//                 </head>
//                 <body>
//                   <h1>This is a Financial Calculator for the knuckle draggers</h1>
//                   <h4 id='date'></h4>

//                   <div class="image-section">
//                     <div class="section-style">
//                       <img src="https://media.discordapp.net/attachments/897197353340141649/1071221920793641060/9e4b7f7bff92aede728f6fa4c57d171fbeba4e86deb8a0eac54937edad782723_1.jpg.jpg?width=850&height=671" alt="" />
//                       <p>Adam and Steve</p>
//                     </div>

//                     <div class="section-style">
//                       <img src="https://media.discordapp.net/attachments/897197353340141649/1071221241043755058/35dac89a9e361b08a0fb2a5fc3e1cf7157bd8d75c6decdf71e4157089df31d45_1.jpg.jpg?width=671&height=671" alt="" />
//                       <p>Oh no not again</p>
//                     </div>
//                   </div>

//                   <div class="image-section">
//                     <div class="section-style">
//                       <img src="https://preview.redd.it/85pncr5gdj551.jpg?auto=webp&s=ac98ce81c1df3006094d15330de1cf1ad97423e1" alt="" />
//                       <p>Doctor</p>
//                     </div>

//                     <div class="section-style">
//                       <img src="https://media.discordapp.net/attachments/943762666298695692/1070839086392287283/IMG_6435.jpg?width=548&height=671" alt="" />
//                       <p>Beautiful Town</p>
//                     </div>
//                   </div>
                  
//                   <div class="image-section">
//                     <div class="section-style">
//                       <img src="https://djlunatique.com/wp-content/uploads/2023/01/let-me-do-it-for-you.jpg" alt="" />
//                       <p>Kermie</p>
//                     </div>

//                     <div class="section-style">
//                       <img src="https://directory.tacoma.uw.edu/sites/default/files/DC-Grant101-2015.png" alt="" />
//                       <p>Prof. Grant</p>
//                     </div>
//                   </div>

//                   <div class="image-section">
//                     <div class="section-style">
//                       <img src="https://media.discordapp.net/attachments/943762666298695692/1070981286639972423/image0.jpg?width=542&height=671" alt="" />
//                       <p>Pokaymans</p>
//                     </div>

//                     <div class="section-style">
//                       <img src="https://media.discordapp.net/attachments/897197353340141649/1071220006572007444/3c986d6e74bc05721ad1fdabf22dc7a9e20a7470025ec73de4e909aa9511e0fb_1.jpg.jpg" alt="" />
//                       <p>Hector</p>
//                     </div>
//                   </div>
//                 </body>
//               </html>
//         </div>
//    );
// }

// export default Calculator