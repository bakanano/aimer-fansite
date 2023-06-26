import Aimer from "../../assets/images/aimer__.png";
import "./Home.css";
import Countdown from "../../components/Countdown/Countdown"
import Cards from "../../components/Cards/Cards";

export default function Home() {
    return(
        <main className="container">
            <section className="hero">
                <img src={Aimer} alt="Aimer" className="aimer-hero"></img>
                    <div className="name info-card">
                        <h1>Aimer</h1>
                        <p>Aimer is love, Aimer is life</p>
                    </div>
            </section>
            <section className="bio info-card">
                <h2>Who is Aimer?</h2>
                <div>
                    <div>
                        <h3>Background</h3>
                        <p>
                            Aimer is a Japanese singer known for her husky voice. Her stagename "Aimer" comes from the French verb meaning "to love".
                            Aimer started her music career by releasing a concept album "Your Favorite Things" featuring song covers of popular artists such as
                            Lady Gaga's big hit "Poker Face" and Coldplay's "Viva La Vida". Aimer made her major debut on 7 September 2011 with her single "六等星の夜/悲しみはオーロラに/TWINKLE TWINKLE LITTLE STAR" and has been on the rise ever since. Aimer writes the majority of her songs as shown in credits as "aimerrhythm".
                        </p>
                    </div>
                    <div className="album">
                        <h3>Personal Life</h3>
                        <p>Aimer annouced her marraige to musician Tobinai Masahiro on 1 January 2023. They have worked together on various songs over the years such as "Omoide wa Kirei de (思い出は綺麗で)", "Kachoufuugetsu (歌鳥風月)" and "Polaris".</p>
                    </div>
                </div>
            </section>
            <Countdown/>
            <Cards/>
        </main>
    );
}
