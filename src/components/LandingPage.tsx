import React, {FunctionComponent} from "react";
import {SocialIcon} from "react-social-icons";
import {SocialsComponent} from "./SocialsComponent";

export const LandingPage: FunctionComponent = () => {
    return (
        <>
            <header className="App-header">
                <div className={"ArtistImage"}>
                    <img src={process.env.PUBLIC_URL + '/artist_pic.png'} alt={"Homepage Photo"}/>
                </div>
            </header>
            <div>Bloom and Doom</div>
            <SocialsComponent/>
        </>

    )
}