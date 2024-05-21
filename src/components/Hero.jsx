
import styles from "../style";
import { discount, robot, gaming } from "../assets";
import GetStarted from "./GetStarted";
import Button from "./Button";

const Hero = () => {
    return (
        <section id="home" className={`flex md:flex-row flex-col ${styles.paddingY}`}>
            <div className={`flex-1 ${styles.flexStart} flex-col xl:px-0 sm:px-16 px-6`}>
                <div className="flex flex-row items-center py-[6px] px-4 bg-discount-gradient rounded-[10px] mb-2">
                    <img src={discount} alt="discount" className="w-[32px] h-[32px]" />
                    <p className={`${styles.paragraph} ml-2`}>
                        <span className="text-white">20%</span> Rabatt bis{" "}
                        <span className="text-white">Juli</span> 2024
                    </p>
                </div>

                <div className="flex flex-row justify-between items-center w-full">
                    <h1 className="flex-1 font-poppins font-semibold ss:text-[72px] text-[42px] text-white ss:leading-[100.8px] leading-[75px]">
                        Wir schaffen <br className="sm:block hidden" />{" "}
                        <span className="text-gradient">unvergessliche</span>{" "}
                    </h1>
                    <div className="ss:flex hidden md:mr-4 mr-0 ps-8">
                        <GetStarted />
                    </div>
                </div>

                <h1 className="font-poppins font-semibold ss:text-[68px] text-[42px] text-white ss:leading-[100.8px] leading-[75px] w-full">
                    Momente für Ihr Event.
                </h1>
                <p className={`${styles.paragraph} text-gradient max-w-[470px] mt-5`}>
                    Unterhaltung der Spitzenklasse, die alle Erwartungen übertrifft.
                </p>
                <div className={`ss:hidden ${styles.flexCenter}`}>
                    <Button />
                </div>
            </div>

            <div className={`flex-1 flex ${styles.flexCenter} md:my-0 my-10 relative`}>
                <img src={gaming} alt="billing" className="-my-20 w-[100%] h-[100%] relative z-[5]" id="hero-img" />

                {/* gradient start */}
                <div className="absolute z-[0] w-[40%] h-[35%] top-0 pink__gradient" />
                <div className="absolute z-[1] w-[80%] h-[80%] rounded-full white__gradient bottom-40" />
                <div className="absolute z-[0] w-[50%] h-[50%] right-20 bottom-20 blue__gradient" />
                {/* gradient end */}
            </div>

            {/* <div className={`ss:hidden ${styles.flexCenter}`}>
                <GetStarted />
            </div> */}
        </section>
    );
};

export default Hero;
