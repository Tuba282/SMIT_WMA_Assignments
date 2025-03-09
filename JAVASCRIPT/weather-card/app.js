// weather-card-js

var weathers = ["Winter", "Cloudy", "Sunny", "Rainy", "Spring"];
var user_input = prompt(`What's Your Favorite weather ... ?

Winter --x-x-- Cloudy --x-x-- Sunny --x-x-- Rainy --x-x-- Spring

Pick One From Above
    `);
var flag = false;

for (var i = 0; i < weathers.length; i++) {
  if (user_input === "Winter" || user_input === "winter") {
    flag = true;
    // winter
document.write(`
    <div class="card-body">
        <div class="sub-card">
        <img src="https://i.ibb.co/TvqWD1V/winter.png" alt="winter" >
        <div class="text">
            <p class="nice blue-text">Have A Nice Day 
                <img src="./assets/wink-emoji.png" width="30" height="30" alt="">
                <img class="badge" src="./assets/badge.png" width="30" height="30" alt="">
            </p>
            <h5 class="weather">It's Cool Day Today</h5>
            <p class="content"><small>Winters are the coolest season that starts from December and last till March. The peak time when winter is experienced the most in December and January. In India, winters hold great importance. In addition, the essence it has is admired by many people.</small></p>
        </div>
        <div class="icons blue">
            <img src="./assets/instagram.png"  alt="instagram">
            <img src="./assets/facebook.png"  alt="facebook">
            <img src="./assets/linkedin.png"  alt="linkedin">
            <img src="./assets/snapchat.png"  alt="snapchat">
            <img src="./assets/whatsapp.png"  alt="whatsapp">
        </div>
        </div>
    </div>
    `);
    break;
  }
  if (user_input === "Cloudy" || user_input === "cloudy") {
    flag = true;
    // cloudy
    document.write(`
        <div class="card-body">
            <div class="sub-card">
            <img src="https://i.ibb.co/bzQYrSQ/cloudy.jpg" alt="cloudy">
            <div class="text">
                <p class="nice pink-text">Have A Nice Day 
                    <img src="./assets/wink-emoji.png" width="30" height="30" alt="">
                    <img class="badge" src="./assets/badge.png" width="30" height="30" alt="">
                </p>
                <h5 class="weather">Its Cloudy Day Today</h5>
                <p class="content"><small>When the sky is cloudy, it's so full of clouds that you can't see the sun. A cloudy day isn't ideal for a trip to the beach, and a cloudy night isn't great for star gazing. A cloudy sky tells you that rain's on the way, while a cloudy pond or a cloudy glass of water isn't translucent — you can't see through it.</small></p>
            </div>
            <div class="icons pink">
                <img src="./assets/instagram.png"  alt="instagram">
                <img src="./assets/facebook.png"  alt="/facebook">
                <img src="./assets/linkedin.png"  alt="linkedin">
                <img src="./assets/snapchat.png"  alt="snapchat">
                <img src="./assets/whatsapp.png"  alt="whatsapp">
            </div>
            </div>
        </div>
        `)
    break;
  }
  if (user_input === "Sunny" || user_input === "sunny") {
    flag = true;
    // sunny
    document.write(`
        <div class="card-body">
            <div class="sub-card">
            <img src="https://i.ibb.co/9Hn2Vsh/hot.jpg" alt="hot">
            <div class="text">
                <p class="nice yellow-text">Have A Nice Day 
                    <img src="./assets/wink-emoji.png" width="30" height="30" alt="">
                    <img class="badge" src="./assets/badge.png" width="30" height="30" alt="">
                </p>
                <h5 class="weather">Its Sunny Day Today</h5>
                <p class="content"><small>When summer first arrives, mornings are pleasant and more refreshing, but as the day goes on, the heat of the sun increases until it is felt throughout the entire day. The severity of the weather is also felt by trees and plants, since their leaves appear dull and their flowers fade swiftly.</small></p>
            </div>
            <div class="icons yellow">
                <img src="./assets/instagram.png"  alt="">
                <img src="./assets/facebook.png"  alt="">
                <img src="./assets/linkedin.png"  alt="">
                <img src="./assets/snapchat.png"  alt="">
                <img src="./assets/whatsapp.png"  alt="">
            </div>
            </div>
        </div>
        `)
    break;
  }
  if (user_input === "Rainy" || user_input === "rainy") {
    flag = true;
    // rainy
    document.write(`
        <div class="card-body">
            <div class="sub-card">
            <img src="https://i.ibb.co/TRGT1TM/rainy.png" alt="rainy">
            <div class="text">
                <p class="nice green-text">Have A Nice Day 
                    <img src="./assets/wink-emoji.png" width="30" height="30" alt="">
                    <img class="badge" src="./assets/badge.png" width="30" height="30" alt="">
                </p>
                <h5 class="weather">Its Rainy Day Today</h5>
                <p class="content"><small>When summer first arrives, mornings are pleasant and more refreshing, but as the day goes on, the heat of the sun increases until it is felt throughout the entire day. The severity of the weather is also felt by trees and plants, since their leaves appear dull and their flowers fade swiftly.</small></p>
            </div>
            <div class="icons green">
                <img src="./assets/instagram.png"  alt="">
                <img src="./assets/facebook.png"  alt="">
                <img src="./assets/linkedin.png"  alt="">
                <img src="./assets/snapchat.png"  alt="">
                <img src="./assets/whatsapp.png"  alt="">
            </div>
            </div>
        </div>
        `)
    break;
  }
  if (user_input === "Spring" || user_input === "spring") {
    flag = true;
    // spring
    document.write(`
        <div class="card-body">
            <div class="sub-card">
            <img  src="https://i.ibb.co/7jGJsRC/spring.jpg" alt="spring">
            <div class="text">
                <p class="nice red-text">Have A Nice Day 
                    <img src="./assets/wink-emoji.png" width="30" height="30" alt="">
                    <img class="badge" src="./assets/badge.png" width="30" height="30" alt="">
                </p>
                <h5 class="weather">Its Fresh Day Today</h5>
                <p class="content"><small>The spring season is a time of year when the weather starts to change. It is a transition season between the winter and summer seasons. The days get longer and nights get shorter, the temperature is milder, and flowers bloom. There is a warm wind in the spring season in the air.</small></p>
            </div>
            <div class="icons red">
                <img src="./assets/instagram.png"  alt="">
                <img src="./assets/facebook.png"  alt="">
                <img src="./assets/linkedin.png"  alt="">
                <img src="./assets/snapchat.png"  alt="">
                <img src="./assets/whatsapp.png"  alt="">
            </div>
            </div>
        </div>
        `)
    break;
  }
}

if(flag === false){
  document.write(`
    <h1 class="error">Please Enter Correct Weather</h1>
    `)
}