import React from "react";
import CheckedPNG from "/png/right.png";
import UncheckedPNG from "/png/dot.png";
import PagesDayPNG from "/png/book.png";
import PagesHourPNG from "/png/hour.png";
import PagesTotalPNG from "/png/page.png";
import PagesWeekPNG from "/png/week.png";
import TotalTimePNG from "/png/clock.png";

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

const IconWithTextRev = (png: any, props: IconProps) => (
    <div className="icon-wrapper-rev row">
        <div className="col-sm-10 text-center icon-wrapper-text-rev">
            <p>{props.text}</p>
        </div>
        <div className="col-sm-2 text-left icon-wrapper-png-rev">
            <img src={png} alt="PagesHour" />
        </div>
    </div>
);

export const PagesHour = (props: IconProps) => (IconWithText(PagesHourPNG, props));
export const PagesDay = (props: IconProps) => (IconWithText(PagesDayPNG, props));
export const PagesWeek = (props: IconProps) => (IconWithText(PagesWeekPNG, props));
export const PagesTotal = (props: IconProps) => (IconWithText(PagesTotalPNG, props));
export const TotalTime = (props: IconProps) => (IconWithText(TotalTimePNG, props));
export const Checked = (props: IconProps) => (IconWithTextRev(CheckedPNG, props));
export const Unchecked = (props: IconProps) => (IconWithTextRev(UncheckedPNG, props));
