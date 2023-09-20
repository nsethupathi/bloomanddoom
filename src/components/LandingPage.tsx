import React, {FunctionComponent} from "react";
import {Socials} from "./Socials";

export const LandingPage: FunctionComponent = () => {
    return (
        <>
            <header className="App-header">
                <div className={"ArtistImage"}>
                    <img src={process.env.PUBLIC_URL + 'images/artist_pic.png'} alt={"Homepage Photo"}/>
                </div>
            </header>
            <div>Bloom and Doom</div>
            <Socials/>
        </>
    )
}