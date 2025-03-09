import Link from "next/link";
import 'animate.css';
import Image from "next/image";
import Str_Img_1 from "@/app/Strawberry/image(1).png"
import Str_Img_2 from "@/app/Strawberry/image(2).png"
import Str_Img_3 from "@/app/Strawberry/image(3).png"
import Blur_str5 from "@/app/Strawberry/image(4).png"
import Str_Img_5 from "@/app/Strawberry/image(5).png"
import Str_Img_6 from "@/app/Strawberry/image(6).png"
import Str_Img_7 from "@/app/Strawberry/image(7).png"
import Str_Img_4 from "@/app/Strawberry/image(8).png"
import Blur_str6 from "@/app/Strawberry/image(9).png"
import Str_Img_8 from "@/app/Strawberry/image(10).png"
import 'bootstrap/dist/css/bootstrap.min.css';


export default function Strawberry() {
  return (
    <div className="strawberry-div">

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
                <Link style={{ textDecoration: 'none' }} className="text-xl text-white font-serif" href='/Lemon'>Lemon</Link>
                <Link style={{ textDecoration: 'none' }} className="text-xl  text-red-600 bg-white p-2 rounded-md text-center orange-text font-serif" href='/Strawberry'>Strawberry</Link>
              </div>
            </nav>
          </header>





        </div>
        <div className="long-side  text-white"><div className="row align-items-md-stretch">
          <div className="row hero align-items-md-stretch">
            {/* right side */}
            <div className="col-md-7 sub-hero">
              <div className="h-100 hero-imgSide p-5 ">
                <Image src={Str_Img_1} alt="" width={580} height={740} className="str_img1 animate-pulse"></Image>
                <div className="">
                  <Image src={Str_Img_2} alt="" width={260} height={640} className="str_img2 animate-pulse"></Image>


                  <Image
                    src={Str_Img_3}
                    alt="strawberry leaf" width={150} height={150}
                    className="str_img3 animate-pule"

                  ></Image>

                  <Image
                    src={Str_Img_4}
                    alt="1 strawberry" width={120} height={120}
                    className="str_img4 animate-pulse"

                  ></Image>

                  <Image
                    src={Str_Img_5}
                    alt="2 cherries" width={180} height={180}
                    className="str_img5 animate-pulse "

                  ></Image>

                  <Image
                    src={Str_Img_6}
                    alt="orange"
                    width={235}
                    height={218}
                    className="str_img6 animate-pulse"

                  ></Image>

                  <Image
                    src={Str_Img_7}
                    alt="cherry"
                    width={80} height={80}
                    className="str_img7 animate-pulse"

                  ></Image>
                  <Image
                    src={Str_Img_8}
                    alt="3 strwberries "
                    width={300} height={300}
                    className="str_img8 animate-pulse"

                  ></Image>





                </div>
              </div>
            </div>
            {/* ledt side */}
            <div className="col-md-5 sub-hero">
              <div className="h-100 hero-textSide">
                <div className="text">
                  <h2 className="text-center font-serif">   STRAWBERRY SIZZ</h2>
                  <p className="text-center font-serif">Antioxidants in strawberries, including vitamin C, can support your immune system and may lower your chances of getting sick when you`re around germs. They may also help curb inflammation, manage your blood sugar, and guard against health conditions like high cholesterol, cancer, heart disease, stroke, and diabetes.They may also help curb inflammation, manage your blood sugar, and guard against health.</p>
                  <p className="hero-btn font-serif" >buy now</p>
                </div>
                <div className="imgs">
                  <Image
                    src={Blur_str5}
                    alt="blur pictures" className="Blur_str5" width={400} height={400}
                  ></Image>
                  <Image
                    src={Blur_str6}
                    alt="blur pictures" className="Blur_str6" width={400} height={400}
                  ></Image>
                </div>
              </div>
            </div>

          </div>
          <div className="hide_text">
            <h2 className="text-center font-serif">   STRAWBERRY SIZZ</h2>
            <p className="text-center font-serif">Antioxidants in strawberries, including vitamin C, can support your immune system and may lower your chances of getting sick when you`re around germs. They may also help curb inflammation, manage your blood sugar, and guard against health conditions like high cholesterol, cancer, heart disease, stroke, and diabetes.They may also help curb inflammation, manage your blood sugar, and guard against health.</p>
            <p className="hero-btn font-serif" >buy now</p>
          </div>
        </div>
        </div>
      </div>
    </div>
  )
}