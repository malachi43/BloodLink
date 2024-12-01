import hero from "../pages/hero-img.png"; 

export const Home = () => {
  return (
    <div>
          <div className={`bg-[#8B0A1A] min-[700px]:h-[100vh]`}>
    <div className={`text-white space-y-2 lg:mx-[180px] mx-16 pt-4 pb-4`}>
        <p className={`lg:text-4xl md:text-2xl font-bold`}>Give the Gift of Life – <br /> Donate Blood Today!</p>
        <p className={`md:place-self-end max-sm:text-xs`}>By donating blood, you can save up to three lives with just <br /> 
        one donation. Every two seconds, someone in the world <br />
         needs a blood transfusion, and your contribution is critical.</p>
         <div><button className={`bg-[#008000] hover:bg-green-600 p-3 rounded-lg font-bold`}>Donate Now</button></div>

         {/* <div className="w-[100%] h-[60vh] flex justify-center items-center bg-cover bg-center max-[700px]:hidden rounded-lg" style={{backgroundImage:`url(${hero})`}}>
         <img src="../images/play.png" alt="play" className={`w-20 g-20 hover:cursor-pointer`} />
         </div> */}
         <iframe className="w-[100%] h-[60vh] rounded-lg" src="https://www.youtube.com/embed/n_ageaVcc-0?si=jwFXiXKRe_UsJ60j" title="YouTube video player" ></iframe>
         {/* <img src="../images/hero-img-mobile.png" alt="hero" className={`mx-auto rounded-lg hamburger min-[700px]:hidden`} /> */}
    </div>
</div>

<div className={`pt-2`}>
                <div className={`bg-[#8B0A1A1A] lg:flex justify-evenly rounded-lg max-sm:flex max-sm:flex-col-reverse`}>
                    <img className={`max-lg:mx-auto`} src="images/emergency.png" alt="emergency" />

                    <div className="place-self-center flex flex-col space-y-4">
                        <p className="md:text-4xl font-bold">Activate Emergency Mode – <br /> Get Help Now!</p>

                        <p className={`max-md:text-xs`}>When every second counts, activate Emergency Mode to <br />
                         instantly connect with blood donors in your area. This <br />
                          feature prioritizes your request and sends urgent <br />
                           notifications to donors ready to help, ensuring the fastest <br />
                        possible response. Don’t wait—activate Emergency Mode to <br />
                         secure the blood you need in critical moments. Take action <br /> now!</p>

                         <div className="max-md:mx-auto"><button className={`bg-[#008000] hover:bg-green-600 p-3 rounded-lg font-bold text-white`}>Activate Now</button></div>
                    </div>
                </div>

                <div className={`pt-6 text-center max-md:text-sm`}>
                    <p className={`md:text-4xl`}>Quickly <span className={`text-[#008000]`}>connect</span> with blood donors or recipients near you.<br />
                     Our platform offers real-time availability and hyper-local <br />
                      matching, making lifesaving support easy</p>
                    <p className={`text-[#706F6F] pt-4`}>Join a network built for immediate, local blood <br /> connections</p>
                </div>

                <div className={`pt-10 md:flex max-md:space-y-4 justify-around items-center text-center`}>
                    <div className={`space-y-2`}>
                        <img className={`mx-auto`} src="../images/instant.png" alt="instant" />
                        <p className={`text-xl`}>Instant Matching</p>
                        <p className={`text-[#706F6F]`}>Find compatible blood donors in <br /> moments for urgent needs</p>
                     </div>

                     <div className={`space-y-2`}>
                        <img className={`mx-auto`} src="../images/community.png" alt="instant" />
                        <p className={`text-xl`}>Community Support</p>
                        <p className={`text-[#706F6F]`}>Empowering communities to unite and <br /> save lives together</p>
                     </div>

                     <div className={`space-y-2`}>
                        <img className={`mx-auto`} src="../images/real-time.png" alt="instant" />
                        <p className={`text-xl`}>Real-Time Notifications</p>
                        <p className={`text-[#706F6F]`}>Receive instant alerts for critical blood <br /> requests and updates</p>
                     </div>
                </div>

                <div className={`relative bg-[#8B0A1A] pt-4 mt-4 md:pb-[250px] max-md:pb-[180px]`}>
                    <div className={`text-center text-white space-y-4`}>
                    <p className={`text-4xl font-bold`}>How It works</p>
                    <p className={`text-xs sm:text-base`}>Sign up and create a profile as a donor or a recipient. This helps us <br />
                     match you with the right people and ensures all information is secure.</p>
                    </div>

                    <div className={`absolute grid grid-cols-7 md:pl-8 pt-10 max-[801px]:hidden`}>
                        <img src="../images/card1.png" alt="sign up" />
                        <img className={`mx-auto`} src="images/arrow.png" alt="arrow" />
                        <img src="../images/card2.png" alt="verify" />
                        <img className={`mx-auto`} src="images/arrow.png" alt="arrow" />
                        <img src="../images/card3.png" alt="schedule" />
                        <img className={`mx-auto`} src="images/arrow.png" alt="arrow" />
                        <img src="../images/card4.png" alt="stay informed" />
                    </div>

                    <div className={`absolute left-1/2 -translate-x-1/2 pt-4 min-[801px]:hidden `}>
                    <img src="../images/card1.png" alt="sign up" />
                    <img src="../images/card2.png" alt="verify" />
                    <img src="../images/card3.png" alt="schedule" />
                    <img src="../images/card4.png" alt="stay informed" />
                    </div>
                </div>

                <div className={`text-center text-[#404040] space-y-4 min-[801px]:pt-[15em] max-[801px]:pt-[1350px]`}>
                    <p className={`text-4xl font-bold`}>What people say</p>
                    <p className={`text-xs sm:text-base`}>From donors to recipients, every story matters. <br />
                    Explore the heartfelt testimonials from ur BloodLink family.</p>
                    </div>

                <div>
                <div className={`grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 place-items-center justify-around pt-10`}>
                    <img className={`flex-shrink-0`} src="../images/moses.png" alt="moses" />
                    <img className={``} src="../images/sarah.png" alt="sarah" />
                    <img className={``} src="../images/emily.png" alt="emily" />
                </div>
                <img className={`pt-4 mx-auto hover:cursor-pointer`} src="../images/indicator.png" alt="indicator" />
                </div>

        </div>

    </div>

  )
};