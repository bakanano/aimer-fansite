import Aimer from "../../assets/images/aimer__.png";
import "./Home.css";
import Countdown from "../Countdown/Countdown"

export default function Home() {
    return(
        <div className="container">
            <section className="hero">
                <img src={Aimer} alt="Aimer" className="aimer-hero"></img>
                    <div className="name">
                        <h1>Aimer</h1>
                        <p>Aimer is love, Aimer is life</p>
                    </div>
            </section>
            <section className="info-card">
                <h2>Who is Aimer?</h2>
                <div className="bio">
                    <div className="info">
                        <h3>Background</h3>
                        <p>
                            Aimer is a Japanese singer known for her husky voice. Her stagename "Aimer" comes from the French verb meaning "to love".
                            Aimer started her music career by releasing a concept album "Your Favorite Things" featuring song covers of popular artists such as
                            Lady Gaga's big hit "Poker Face" and Coldplay's "Viva La Vida". Aimer made her major debut on 2011/09/07 with her single "六等星の夜/悲しみはオーロラに/TWINKLE TWINKLE LITTLE STAR" and has been on the rise ever since. Aimer writes the majority of her songs as shown in credits as "aimerrhythm".
                        </p>
                    </div>
                    <div className="album">
                        <h3>B-Side Album Hoshi no Kieta Yoru ni (星消えた夜に)</h3>
                        <p>"Hoshi no Kieta Yoru ni (The Night The Stars Vanished)" is Aimer's first B-Side Collection Album released on 2022/01/26. Featuring a number of tracks over the past 10 years since her debut, as well as a variety of new songs such as Aimer's own rendition of Shimizu Shouta's "花束のかわりにメロディーを" and "trill -starless night ver.-" which was used as the theme song for Episode 1 of the short web anime series "night world" by studio daisy alongside "Grace Note" and "星の消えた夜に-rit. ver.-" for Episode 2 and 3 respectively.</p>
                    </div>
                </div>
            </section>
            <Countdown/>
            <section clasName="viewer"></section>
            <footer><a href="https://github.com/bakanano" target="_blank">@bakanano</a></footer>
        </div>
    );
}