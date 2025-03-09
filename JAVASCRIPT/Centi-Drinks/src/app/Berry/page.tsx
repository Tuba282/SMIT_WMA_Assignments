import Link from "next/link";
import 'animate.css';
import Image from "next/image";
import Bry_Img_1 from "@/app/Berry/image(1).png"
import Bry_Img_2 from "@/app/Berry/image(2).png"
import Bry_Img_3 from "@/app/Berry/image(3).png"
import Bry_Img_4 from "@/app/Berry/image(4).png"
import Bry_Img_5 from "@/app/Berry/image(5).png"
import Bry_Img_6 from "@/app/Berry/image(6).png"
import Bry_Img_7 from "@/app/Berry/image(7).png"
import Bry_Img_8 from "@/app/Berry/image(8).png"
import 'bootstrap/dist/css/bootstrap.min.css';


export default function Berry() {
  return (
    <div className="berry-div">

      <div className="w-full main-side">
        <div className="short-side   backdrop-blur">
          {/* navbar */}
          <header>
            <nav className="nav-bar">
              <div className="logo">

                <Link style={{ textDecoration: 'none' }} className="logoName text-4xl text-white font-serif" href='/'>Centi</Link>
              </div>
              <div className="menu-items ">
                <Link style={{ textDecoration: 'none' }} className="text-xl text-white font-serif" href='/'>Orange</Link>
                <Link style={{ textDecoration: 'none' }} className="text-xl  text-purple-600 bg-white p-2 rounded-md text-center orange-text font-serif" href='/Berry'>Berry</Link>
                <Link style={{ textDecoration: 'none' }} className="text-xl text-white font-serif" href='/Lemon'>Lemon</Link>
                <Link style={{ textDecoration: 'none' }} className="text-xl text-white font-serif" href='/Strawberry'>Strawberry</Link>
              </div>
            </nav>
          </header>





        </div>
        <div className="long-side  text-white"><div className="row align-items-md-stretch">
          <div className="row hero align-items-md-stretch">
            {/* right side */}
            <div className="col-md-7 sub-hero">
              <div className="h-100 hero-imgSide p-5 ">
                <Image src={Bry_Img_1} alt="" width={480} height={740} className="bry_img1 animate-pulse"></Image>
                <div className="">
                  <Image src={Bry_Img_2} alt="" width={400} height={400} className="bry_img2 animate-pulse"></Image>




                  <Image
                    src={Bry_Img_5}
                    alt=""
                    className="bry_img5 animate-pulse"

                  ></Image>
                  <Image
                    src={Bry_Img_6}
                    alt=""
                    className="bry_img6 animate-pulse"

                  ></Image>

                  <Image
                    src={Bry_Img_7}
                    alt=""
                    className="bry_img7 animate-pulse"

                  ></Image>

                  <Image
                    src={Bry_Img_8}
                    alt=""
                    width={235}
                    height={218}
                    className="bry_img8 animate-pulse"

                  ></Image> 


                </div>
              </div>
            </div>
            {/* ledt side */}
            <div className="col-md-5 sub-hero">
              <div className="h-100 hero-textSide">
                <div className="text">
                  <h2 className="text-center font-serif">  BLUSHED BERRY</h2>
                  <p className="text-center font-serif">Mixed berry juice, comprising strawberries, raspberries, blueberries, and blackberries, offers numerous health benefits. It is rich in antioxidants, vitamins, minerals, and fiber, making it a nutritious addition to your diet. Strawberry juice supports heart health, boosts the immune system, and promotes healthy skin.Mixed berry juice, comprising strawberries, raspberries, blueberries, and blackberries, offers numerous health benefits. It is rich in antioxidants, vitamins, minerals.</p>
                  <p className="hero-btn font-serif" >buy now</p>
                </div>
                <div className="imgs">
                  <Image
                    src={Bry_Img_3}
                    alt="blur pictures"
                    className="bry_img3"
                    width={300} height={300}
                  ></Image>
                  <Image
                    src={Bry_Img_4}
                    alt="blur pictures"
                    className="bry_img4"
                    // width={500} height={500}
                  ></Image>
                </div>
              </div>
            </div>

          </div>
          <div className="hide_text">
                  <h2 className="text-center font-serif">  BLUSHED BERRY</h2>
                  <p className="text-center font-serif">Mixed berry juice, comprising strawberries, raspberries, blueberries, and blackberries, offers numerous health benefits. It is rich in antioxidants, vitamins, minerals, and fiber, making it a nutritious addition to your diet. Strawberry juice supports heart health, boosts the immune system, and promotes healthy skin.Mixed berry juice, comprising strawberries, raspberries, blueberries, and blackberries, offers numerous health benefits. It is rich in antioxidants, vitamins, minerals.</p>
                  <p className="hero-btn font-serif" >buy now</p>
                </div>
        </div>
        </div>
      </div>
    </div>
  )
}