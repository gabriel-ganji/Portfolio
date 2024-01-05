import { AboutMeStyled } from "./style";

export default function AboutMe() {
    return (
        <AboutMeStyled className='aboutmeDiv'>
            <h2>QUEM SOU</h2>
            <div id='aboutme-container'>
                <div id='aboutme'>  
                    <p>Gabriel Rodrigues Fernandes</p>
                    <p>We believe in produce. Tasty produce. Produce like:
                        Oh! Onions. Yams. Avocados. Lettuce. Arugula (to some, “rocket”).
                        Persian cucumbers, in addition to aforementioned “normal” cucumbers.
                        Artichokes. Zucchinis. Pumpkins. Squash (what some cultures call pumpkins).
                        Sweet potatoes and potato-potatoes. Jackfruit. Monk fruit. Fruit of the Loom. Fruits of our labor (this website).
                        Sorrel. Pineapple. Mango. Gooseberries. Blackberries. Tomatoes. Heirloom tomatoes. Beets. Chives. Corn. Endive.
                        Escarole, which, we swear, we’re vendors of organic produce, but if you asked us to describe what escaroles are...
                        Artichokes. Zucchinis. Pumpkins. Squash (what some cultures call pumpkins).
                    </p>
                </div>
                <img id='me' src="/images/gabrielrf.jpeg"></img>
            </div>
        </AboutMeStyled>
    )
}