import Link from "next/link";import 'animate.css';
import Image from "next/image";
import Leo_Img_1 from "@/app/Lemon/image(1).png"
import Leo_Img_2 from "@/app/Lemon/image(2).png"
import Leo_Img_3 from "@/app/Lemon/image(3).png"
import Leo_Img_4 from "@/app/Lemon/image(4).png"
import Leo_Img_5 from "@/app/Lemon/image(5).png"
import Leo_Img_6 from "@/app/Lemon/image(6).png"
import Leo_Img_7 from "@/app/Lemon/image(7).png"
import Leo_Img_8 from "@/app/Lemon/image(8).png"
import Leo_Img_9 from "@/app/Lemon/image(9).png"
import 'bootstrap/dist/css/bootstrap.min.css';


export default function Lemon() {
  return (
    <div className="lemon-div">

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
                <Link style={{ textDecoration: 'none' }} className="text-xl text-white font-serif" href='/Berry'>Berry</Link>
                <Link style={{ textDecoration: 'none' }} className="text-xl  text-lime-500 bg-white p-2 rounded-md text-center orange-text font-serif" href='/Lemon'>Lemon</Link>
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
                <Image src={Leo_Img_1} alt="" width={580} height={740} className="leo_img1 animate-pulse"></Image>
                <div className="">
                  <Image src={Leo_Img_2} alt="" width={250} height={640} className="leo_img2 animate-pulse"></Image>




                  <Image
                    src={Leo_Img_6}
                    alt=""
                    className="leo_img6 animate-pulse"

                  ></Image>

                  <Image
                    src={Leo_Img_7}
                    alt=""
                    className="leo_img7 animate-pulse"

                  ></Image>

                  <Image
                    src={Leo_Img_8}
                    alt=""
                    width={235}
                    height={218}
                    className="leo_img8 animate-pulse"

                  ></Image>

                  <Image
                    src={Leo_Img_9}
                    alt="" width={100} height={100}
                    className="leo_img9 animate-pulse"

                  ></Image>


                </div>
              </div>
            </div>
            {/* ledt side */}
            <div className="col-md-5 sub-hero">
              <div className="h-100 hero-textSide">
                <div className="text">
                  <h2 className="text-center font-serif">  LEMON LIME</h2>
                  <p className="text-center font-serif">Lemons contain about 35 milligrams of vitamin C, which is over half the amount of vitamin C needed in your daily diet. Vitamin C is an antioxidant, which helps protect cells from damage. Vitamin C also helps your body make collagen for your skin, helps your body absorb iron, and supports your immune system.Lemons contain about 35 milligrams of vitamin C, which is over half the amount of vitamin C needed in your daily diet. Vitamin C is an antioxidant.</p>
                  <p className="hero-btn font-serif" >buy now</p>
                </div>
                <div className="imgs">
                  <Image
                    src={Leo_Img_3}
                    alt="blur pictures"
                    className="leo_img3"
                    width={300} height={300}
                  ></Image>
                  <Image
                    src={Leo_Img_4}
                    alt="blur pictures"
                    className="leo_img4"
                    width={500} height={500}
                  ></Image>
                  <Image
                    src={Leo_Img_5}
                    alt="blur pictures"
                    className="leo_img5"
                    width={600} height={600}
                  ></Image>
                </div>
              </div>
            </div>

          </div>
          <div className="hide_text">
            <h2 className="text-center font-serif">  LEMON LIME</h2>
            <p className="text-center font-serif">Lemons contain about 35 milligrams of vitamin C, which is over half the amount of vitamin C needed in your daily diet. Vitamin C is an antioxidant, which helps protect cells from damage. Vitamin C also helps your body make collagen for your skin, helps your body absorb iron, and supports your immune system.Lemons contain about 35 milligrams of vitamin C, which is over half the amount of vitamin C needed in your daily diet. Vitamin C is an antioxidant.</p>
            <p className="hero-btn font-serif" >buy now</p>
          </div>
        </div>
        </div>
      </div>
    </div>
  )
}