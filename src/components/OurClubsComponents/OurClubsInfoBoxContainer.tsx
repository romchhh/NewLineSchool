import { ReactNode } from "react";
import "./css/OurClubsInfoBoxContainer.css";
export default function OurClubsInfoBoxContainer({title, subtitle, type}:{title: string, subtitle: ReactNode, type: string}) {
    return <div className="club-info-box-container">
        <div className="club-info-box-title">{title}</div>
        <div className="club-info-box-subtitle">{subtitle}</div>
        <div className="club-info-box-body"></div>
    </div>
}