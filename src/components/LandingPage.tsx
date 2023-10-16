import React, {FunctionComponent, useEffect, useState} from "react";
import {Socials} from "./Socials";
import {getUpcomingShows} from "../services/UpcomingShowsService";
import {UpcomingShow} from "./UpcomingShow";
import {Show} from "../models/Show";

export const LandingPage: FunctionComponent = () => {

    const [fetchedShows, setFetchedShows] = useState<Show[]>([])

    useEffect(() => {
        const fetchShows = async() => {
            return await getUpcomingShows();
        }
        fetchShows().then((shows) => {
            setFetchedShows(shows)
        })
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
            {fetchedShows.map((show: Show) => {
                return <UpcomingShow upcomingShow={show}/>
            })}
        </>
    )
}