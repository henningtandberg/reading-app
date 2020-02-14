import React from "react";
import PagesHourPNG from "/png/hour.png";
import PagesDayPNG from "/png/book.png";
import PagesWeekPNG from "/png/week.png";
import PagesTotalPNG from "/png/page.png";

interface IconProps {
	text: string;
}

export const PagesHour = (props: IconProps) => (
	<div className="icon-wrapper">
		<p>
			<img src={PagesHourPNG} alt="PagesHour" />
			{props.text}
		</p>
	</div>
);

export const PagesDay = (props: IconProps) => (
	<div className="icon-wrapper">
		<p>
			<img src={PagesDayPNG} alt="PagesDay" />
			{props.text}
		</p>
	</div>
);

export const PagesWeek = (props: IconProps) => (
	<div className="icon-wrapper">
		<p>
			<img src={PagesWeekPNG} alt="PagesWeek" />
			{props.text}
		</p>
	</div>
);

export const PagesTotal = (props: IconProps) => (
	<div className="icon-wrapper">
		<p>
			<img src={PagesTotalPNG} alt="PagesTotal" />
			{props.text}
		</p>
	</div>
);
