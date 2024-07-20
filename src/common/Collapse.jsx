import { faAngleDown, faAngleUp } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";

export default function Collapse({ title, children, className, borderBottom, light=false }) {
    const [showContent, setShowContent] = useState(false)
    return (
        <>
            <button className={`${className} flex items-center justify-between ${borderBottom && showContent ? 'border-b-0' : borderBottom}`} onClick={() => setShowContent(!showContent)}>
                {title}
                {
                    !showContent ?
                        <FontAwesomeIcon icon={faAngleDown} className={`${light ? ' text-[white]' : 'text-secondary-color'}`} /> :
                        <FontAwesomeIcon icon={faAngleUp} className={`${light ? ' text-[white]' : 'text-secondary-color'}`} />
                }
            </button>
            <div className={`${showContent ? 'block' : 'hidden '} ${borderBottom ? borderBottom : ""}`}>
                {children}
            </div>
        </>

    );
}