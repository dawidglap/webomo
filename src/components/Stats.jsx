import { stats } from "../constants";
import styles from "../style";

const Stats = () => (
    <section className={`${styles.flexCenter} flex-row flex-wrap sm:mb-20 mb-6`}>
        {stats.map((stat) => (
            <div key={stat.id} className={`flex-1 flex justify-start items-center flex-row `} >
                {/* <h4 className="font-poppins font-semibold xs:text-[40.89px] text-[30.89px] xs:leading-[53.16px] leading-[43.16px] text-white">
                    {stat.title}
                </h4> */}
                {/* <p className="font-poppins font-semibol ms-0 text-gradient uppercase ml-3" id="display-block">
                    {stat.title}
                </p> */}
            </div>
        ))}
    </section>
);

export default Stats;