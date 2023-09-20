import {FunctionComponent} from "react";
import {Show} from "../models/Show";

export interface UpcomingShowProps {
    upcomingShow: Show
}

export const UpcomingShow: FunctionComponent<UpcomingShowProps> = (props) => {
    return (
        <>
            <div>props.upcomingShow.venue</div>
            <div>props.upcomingShow.address</div>
            <div>props.upcomingShow.date</div>
            <div>props.upcomingShow.time</div>
        </>
    )
}