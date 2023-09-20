import React, {FunctionComponent} from "react";
import {SocialIcon} from "react-social-icons";
import "../css/SocialsComponent.css"

export const Socials: FunctionComponent = () => {
    return (
        <>
            <div>
                <SocialIcon className={"SocialIcon"} url={"https://instagram.com/bloomanddoommusic"}/>
                <SocialIcon className={"SocialIcon"} url={"https://www.tiktok.com/@bloomanddoommusic"}/>
            </div>
        </>
    )
}