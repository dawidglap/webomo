import { video2 } from "../assets";
import styles, { layout } from "../style";
import QuickContact from "./QuickContact";

const NotEnough = () => (
    <section id="clients" className={`${styles.paddingY} ${styles.flexCenter} flex-col relative mt-5`}>
        <div className="absolute z-[0] w-[60%] h-[60%] -right-[50%] rounded-full blue__gradient bottom-40" />

        <div className="w-full flex justify-between items-center md:flex-row flex-col sm:mb-16 mb-6 relative z-[1]">
            <h2 className={styles.heading2}>
                Möchten Sie mehr? <br className="sm:block hidden" />
            </h2>

            <div className="w-full md:mt-0 mt-6">
                <p className={`${styles.paragraph} md:ps-8 text-left max-w-[450px]`}>
                    <span className="text-gradient">Dein Casino, deine Wahl!</span> <br />
                    Mit unseren individuellen Paketen kannst du deine Veranstaltung zu etwas Besonderem machen. Entdecke jetzt die Vielfalt unserer Angebote und gestalte dein eigenes, einzigartiges Casino-Event!
                </p>
                <QuickContact />

            </div>
        </div>

        <div className="flex flex-wrap sm:justify-start justify-center w-full feedback-container relative z-[1]">
            {/* <div className={layout.sectionImgReverse}>
                <video src={video2} className={` video-container w-[100%] h-[100%] relative z-[5] rounded-lg shadow-lg ${layout.sectionImgReverse}`} autoPlay loop muted />
                <div className="absolute z-[3] -left-1/2 top-0 w-[50%] h-[50%] rounded-full white__gradient" />
                <div className="absolute z-[0] w-[50%] h-[50%] -left-1/2 bottom-0 rounded-full pink__gradient" />
            </div> */}
        </div>
    </section>
);

export default NotEnough;