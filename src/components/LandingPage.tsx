import React, {FunctionComponent, useEffect} from "react";
import {Socials} from "./Socials";
import {getUpcomingShows} from "../services/UpcomingShowsService";

export const LandingPage: FunctionComponent = () => {

    useEffect(() => {
        // debugger
        const fetchShows = async() => {
            return await getUpcomingShows();
        }
        const fetchedShows = fetchShows().catch(console.error)
    }, []);

    return (
        <>
            <header className="App-header">
                <div className={"ArtistImage"}>
                    <img src={process.env.PUBLIC_URL + 'images/artist_pic.png'} alt={"Homepage Photo"}/>
                </div>
            </header>
            <div>Bloom and Doom</div>
            <Socials/>
            <div>Upcoming Shows</div>
        </>
    )
}