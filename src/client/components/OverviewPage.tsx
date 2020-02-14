import React, {Component} from "react";
import {Link} from "react-router-dom";
import HomeButton from "./HomeButton";
import * as Icon from "./Icons";


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
            pagesTotal: 0,
            pagesPerHour: 0,
            pagesPerDay: 0,
            pagesPerWeek: 0,
        };

        fetch("/api/overview", {
            method: "GET",
        }).then((response) => {
            if (!response.ok) {
                throw new Error("GET Failed");
            }

            return response.json();
        }).then((data) => ({
            pagesTotal: Math.round(data.pagesTotal),
            pagesPerHour: Math.round(data.pagesPerHour),
            pagesPerDay: Math.round(data.pagesPerDay),
            pagesPerWeek: Math.round(data.pagesPerWeek),
        })).then((data) => {
            this.setState({
                pagesTotal: data.pagesTotal,
                pagesPerHour: data.pagesPerHour,
                pagesPerDay: data.pagesPerDay,
                pagesPerWeek: data.pagesPerWeek,
            });
        }).catch((error) => {
            console.error(error);
        });
    }

    public render() {
        const pagesPerHour = this.state.pagesPerHour;
        return (
            <div className="overview row h-100">
                <HomeButton />
                <div className="overview-title col-md-12">
                    <h1>Oversikt</h1>
                </div>
                     <div className="overview-text-hour col-xl-12">
                         <Icon.PagesHour
                            text={"Sider lest per time: " + pagesPerHour}
                         />
                    </div>
                    <div className="overview-text-day col-xl-12">
                         <Icon.PagesDay />
                         <p>Sider lest per dag: {this.state.pagesPerDay}</p>
                    </div>
                    <div className="overview-text-week col-xl-12">
                         <Icon.PagesWeek />
                         <p>Sider lest per uke: {this.state.pagesPerWeek}</p>
                    </div>
                    <div className="overview-text-total col-xl-12">
                         <Icon.PagesTotal/>
                         <p>Sider lest totalt: {this.state.pagesTotal}</p>
                </div>
            </div>
        );
    }
}

export default OverviewPage;
