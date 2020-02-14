import React, {Component} from "react";
import {Link} from "react-router-dom";
import HomeButton from "./HomeButton";
import IconHourClock from "../icons";


interface IOverviewProps {

}

interface IOverviewState {
    pagesPerHour: number;
    pagesPerDay: number;
    pagesPerWeek: number;
    pagesTotal: number;
}

class OverviewPage extends Component<IOverviewProps, IOverviewState> {
    constructor(props: IOverviewProps, state: IOverviewState) {
        super(props);
        this.state = {
            pagesPerHour: 0,
            pagesPerDay: 0,
            pagesPerWeek: 0,
            pagesTotal: 0,
        };

        fetch("/api/overview", {
            method: "GET",
        }).then((response) => {
            if (!response.ok) {
                throw new Error("GET Failed");
            }

            return response.json();
        }).then((data) => {
            this.setState({
                pagesPerHour: data.pagesPerHour,
                pagesPerDay: data.pagesPerDay,
                pagesPerWeek: data.pagesPerWeek,
                pagesTotal: data.totalPages,
            });
        }).catch((error) => {
            console.error(error);
        });
    }

    public render() {
        return (
            <div className="overview row h-100">
                <HomeButton />
                <div className="overview-title col-md-12">
                    <h1>Oversikt</h1>
                </div>
                     <div className="overview-text-hour col-xl-12">
                         <IconHourClock />
                         <p>Sider lest per time: {this.state.pagesPerHour}</p>
                    </div>
                    <div className="overview-text-day col-xl-12">
                         <p>Sider lest per dag: {this.state.pagesPerDay}</p>
                    </div>
                    <div className="overview-text-week col-xl-12">
                         <p>Sider lest per uke: {this.state.pagesPerWeek}</p>
                    </div>
                    <div className="overview-text-total col-xl-12">
                         <p>Sider lest totalt: {this.state.pagesTotal}</p>
                </div>
            </div>
        );
    }
}

export default OverviewPage;
