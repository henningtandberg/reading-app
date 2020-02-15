import React from "react";
import PagesDayPNG from "/png/book.png";
import PagesHourPNG from "/png/hour.png";
import PagesTotalPNG from "/png/page.png";
import PagesWeekPNG from "/png/week.png";

interface IconProps {
    text: string;
}

const IconWithText = (png: any, props: IconProps) => (
    <div className="icon-wrapper row">
        <div className="col-sm-2 text-left icon-wrapper-png">
            <img src={png} alt="PagesHour" />
        </div>
        <div className="col-sm-10 text-center icon-wrapper-text">
            <p>{props.text}</p>
        </div>
    </div>
);

const IconWithTextv2 = (png: any, props: IconProps) => (
    <div className="icon-wrapper">
        <p><img src={png} alt="PagesDay" />{props.text}</p>
    </div>
);

export const PagesHour = (props: IconProps) => (IconWithText(PagesHourPNG, props));
export const PagesDay = (props: IconProps) => (IconWithText(PagesDayPNG, props));
export const PagesWeek = (props: IconProps) => (IconWithText(PagesWeekPNG, props));
export const PagesTotal = (props: IconProps) => (IconWithText(PagesTotalPNG, props));
