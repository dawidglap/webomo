import { feedback } from "../constants";
import styles from "../style";
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
        </div>
    </section>
);

export default NotEnough;