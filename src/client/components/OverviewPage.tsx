import React, {Component} from "react";
import {Link} from "react-router-dom";

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
            <div className="overview">
                <div className="home-button">
                    <Link to="/">BACK</Link>
                </div>
                <h1>Oversikt</h1>
                <div>
                    <h2>Sider lest per time: {this.state.pagesPerHour}</h2>
                    <h2>Sider lest per dag: {this.state.pagesPerDay}</h2>
                    <h2>Sider lest per uke: {this.state.pagesPerWeek}</h2>
                    <h2>Sider lest totalt: {this.state.pagesTotal}</h2>
                </div>
            </div>
        );
    }
}

export default OverviewPage;
