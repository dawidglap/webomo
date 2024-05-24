import { useState } from 'react';
import { apple, bill, google, vid } from "../assets";
import styles, { layout } from "../style";
import PackageCard from "./PackageCard";
import { feedback } from "../constants";

const Packages = () => {
    const [isHovering, setIsHovering] = useState(false);

    const handleMouseEnter = () => {
        setIsHovering(true);
    };

    const handleMouseLeave = () => {
        setIsHovering(false);
    };

    return (
        <>
            <section id="product" className={layout.sectionReverse}>
                <div className={layout.sectionImgReverse}>
                    <video src={vid} className={` video-container w-[100%] h-[100%] relative z-[5] rounded-lg shadow-lg ${layout.sectionImgReverse}`} autoPlay loop muted />
                    <div className="absolute z-[3] -left-1/2 top-0 w-[50%] h-[50%] rounded-full white__gradient" />
                    <div className="absolute z-[0] w-[50%] h-[50%] -left-1/2 bottom-0 rounded-full pink__gradient" />
                </div>
                <div className={layout.sectionInfo}>
                    <h2 className={styles.heading2}>
                        <span className='text-gradient'>Beeindrucken</span> Sie Ihre Gäste mit einem exklusiven<br className="sm:block hidden" /> Casino-Erlebnis
                    </h2>
                    <p className={`${styles.paragraph} max-w-[470px] mt-5 text-white`}>
                        Wähle aus einer vielfältigen Auswahl an Casinotischen für deine Veranstaltung. Verwandle jeden Ort in dein persönliches Casino
                        <br className="" />
                        <br />
                        <small className="text-dimWhite">
                            *Wichtiger Hinweis: <br></br>

                            Gespielt wird ohne Geldeinsatz und Auszahlungen. Dies ist gesetzlich nicht erlaubt!
                        </small>
                    </p>
                </div>
            </section>
            <div className="flex flex-wrap sm:justify-start justify-center w-full feedback-container relative z-[1]" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
                {feedback.map((card, index) => (
                    <PackageCard
                        key={card.id}
                        index={index}
                        {...card}
                        applyHoverEffect={!isHovering && index === 1}
                    />
                ))}
            </div>
        </>
    );
};

export default Packages;
