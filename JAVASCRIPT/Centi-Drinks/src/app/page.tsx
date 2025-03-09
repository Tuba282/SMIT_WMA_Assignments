import Link from "next/link"; import 'animate.css';
import Image from "next/image";
import Blur_Imgs5 from "@/app/Orange/image(5).png"
import Blur_Imgs6 from "@/app/Orange/image(6).png"
// import Org_Img_1 from "@/app/Orange/image(1).png"
import Org_Img_1 from "@/app/Orange/image(1).png"
import Org_Img_2 from "@/app/Orange/image(2).png"
import Org_Img_3 from "@/app/Orange/image(3).png"
import Org_Img_4 from "@/app/Orange/image(4).png"
import Org_Img_7 from "@/app/Orange/image(7).png"
import Org_Img_8 from "@/app/Orange/image(8).png"
import Org_Img_9 from "@/app/Orange/image(9).png"
import 'bootstrap/dist/css/bootstrap.min.css';


export default function Orange() {
  return (
    <div className="orange-div">

      <div className="w-full main-side">
        <div className="short-side   backdrop-blur">
          {/* navbar */}
          <header>
            <nav className="nav-bar">
              <div className="logo">

                <Link style={{ textDecoration: 'none' }} className="logoName text-4xl text-white font-serif" href='/'>Centi</Link>
              </div>
              <div className="menu-items ">
                <Link style={{ textDecoration: 'none' }} className="text-xl  text-orange-600 bg-white p-2 rounded-md text-center orange-text font-serif" href='/'>Orange</Link>
                <Link style={{ textDecoration: 'none' }} className="text-xl text-white font-serif" href='/Berry'>Berry</Link>
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
              <div className="h-100 hero-imgSide">
                <Image src={Org_Img_1} alt="" width={580} height={740} className="org_img1 animate-pulse"></Image>
                <div className="">
                  <Image src={Org_Img_2} alt="" width={200} height={640} className="org_img2 animate-pulse"></Image>


                  <Image
                    src={Org_Img_3}
                    alt=""
                    className="org_img3 animate-pulse"

                  ></Image>

                  <Image
                    src={Org_Img_4}
                    alt=""
                    className="org_img4 animate-pulse"

                  ></Image>

                  <Image
                    src={Org_Img_7}
                    alt=""
                    className="org_img5 animate-pulse"

                  ></Image>

                  <Image
                    src={Org_Img_8}
                    alt=""
                    width={235}
                    height={218}
                    className="org_img6 animate-pulse"

                  ></Image>

                  <Image
                    src={Org_Img_9}
                    alt="" width={150} height={150}
                    className="org_img7 animate-pulse"

                  ></Image>


                </div>
              </div>
            </div>
            {/* ledt side */}
            <div className="col-md-5 sub-hero">
              <div className="h-100 hero-textSide">
                <div className="text">
                  <h2 className="text-center font-serif"> MERRY MANGO</h2>
                  <p className="text-center font-serif">Mango is a tropical fruit, that is, it grows well in the warm climate of the tropics. Mostly mangoes are oval and the colour of mango skin varies from green, yellow to red and green. A mango has one big seed and the mango seed is inedible. Each year, an enormous quantity of mangoes are yielded in Pakistan.To make fresh mango juice, start by peeling 2 ripe mangoes and cutting them into small pieces. Then, add the mango pieces to a blender with 1 cup of water, 2 tablespoons of sugar, and a few ice cubes. Next, blend everything together until the juice is smooth.</p>
                  <p className="hero-btn font-serif" >buy now</p>
                </div>
                <div className="imgs">
                  <Image
                    src={Blur_Imgs5}
                    alt="blur pictures" className="blur1" width={400} height={400}
                  ></Image>
                  <Image
                    src={Blur_Imgs6}
                    alt="blur pictures" className="blur2" width={400} height={400}
                  ></Image>
                </div>
              </div>
            </div>

          </div>
          <div className="hide_text">
            <h2 className="text-center font-serif"> MERRY MANGO</h2>
            <p className="text-center font-serif">Mango is a tropical fruit, that is, it grows well in the warm climate of the tropics. Mostly mangoes are oval and the colour of mango skin varies from green, yellow to red and green. A mango has one big seed and the mango seed is inedible. Each year, an enormous quantity of mangoes are yielded in Pakistan.To make fresh mango juice, start by peeling 2 ripe mangoes and cutting them into small pieces. Then, add the mango pieces to a blender with 1 cup of water, 2 tablespoons of sugar, and a few ice cubes. Next, blend everything together until the juice is smooth.</p>
            <p className="hero-btn font-serif" >buy now</p>
          </div>
        </div>
        </div>
      </div>
    </div>
  )
}