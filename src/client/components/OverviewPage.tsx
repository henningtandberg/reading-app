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
            pagesTotal: data.pagesTotal,
            pagesPerHour: data.pagesPerHour,
            pagesPerDay: data.pagesPerDay,
            pagesPerWeek: data.pagesPerWeek,
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
        return (
            <div className="overview row h-100">
                <HomeButton />
                <div className="overview-title col-md-12">
                    <h1>Oversikt</h1>
                </div>
                     <div className="overview-text-box col-xl-12">
                        <Icon.PagesHour
                            text={"Sider lest per time: " + this.state.pagesPerHour}
                        />
                    </div>
                    <div className="overview-text-box col-xl-12">
                        <Icon.PagesDay 
                            text={"Sider lest per dag: " + this.state.pagesPerDay}
                        />
                    </div>
                    <div className="overview-text-box col-xl-12">
                        <Icon.PagesWeek
                            text={"Sider lest per uke: " + this.state.pagesPerWeek}
                        />
                    </div>
                    <div className="overview-text-box col-xl-12">
                        <Icon.PagesTotal
                            text={"Sider lest totalt: " + this.state.pagesTotal}
                        />
                </div>
            </div>
        );
    }
}

export default OverviewPage;
