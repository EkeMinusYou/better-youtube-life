// const css = ".highlighted { border: 4px solid red; box-sizing: border-box; }";
// const style = document.createElement("style");
// style.type = "text/css";
// style.appendChild(document.createTextNode(css));
// document.head.appendChild(style);
//
// document.addEventListener("keydown", function (event) {
// 	if (event.key === "Shift") {
// 		let videos = document.querySelectorAll("ytd-thumbnail");
// 		videos.forEach(function (video) {
// 			video.classList.toggle("highlighted");
// 		});
// 	}
// });

import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom";

const HighlightVideos: React.FC = () => {
	const [highlighted, setHighlighted] = useState(false);

	useEffect(() => {
		const handleKeyDown = (event: KeyboardEvent) => {
			if (event.key === "Shift") {
				setHighlighted((prev) => !prev);
			}
		};

		document.addEventListener("keydown", handleKeyDown);

		return () => {
			document.removeEventListener("keydown", handleKeyDown);
		};
	}, []);

	return (
		<div>
			<style>
				{`
          .highlighted {
            border: 4px solid red;
            box-sizing: border-box;
          }
        `}
			</style>
			<HighlightOverlay highlighted={highlighted} />
		</div>
	);
};

const HighlightOverlay: React.FC<{ highlighted: boolean }> = ({
	highlighted,
}) => {
	useEffect(() => {
		const videos = document.querySelectorAll("ytd-thumbnail");
		videos.forEach((video) => {
			if (highlighted) {
				video.classList.add("highlighted");
			} else {
				video.classList.remove("highlighted");
			}
		});
	}, [highlighted]);

	return null;
};

// Inject React app into the page
const injectApp = () => {
	const rootDiv = document.createElement("div");
	rootDiv.id = "react-root";
	document.body.appendChild(rootDiv);
	ReactDOM.render(<HighlightVideos />, rootDiv);
};

injectApp();
