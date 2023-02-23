import React from "react";
import { useState } from "react";
import { ReactTinyLink } from "react-tiny-link";

function Test() {
    const [text, setText] = useState("");
    const [links, setLinks] = useState([]);

    const onChange = (e) => {
        console.log(e.target.value);
        setText(e.target.value);

        const urlRegex = /(https?:\/\/[^ ]*)/g;
        const extractedLinks = e.target.value.match(urlRegex);
        setLinks(extractedLinks || []);
    };

    const textParts = [];
    let lastIndex = 0;
    links.forEach((link, index) => {
        const matchIndex = text.indexOf(link, lastIndex);
        if (matchIndex !== -1) {
            textParts.push(text.slice(lastIndex, matchIndex));
            textParts.push(
                <a href={link} key={index}>
                    {link}
                </a>
            );
            lastIndex = matchIndex + link.length;
        }
    });
    textParts.push(text.slice(lastIndex));

    return (
        <div className="App">
            <h1>React Tiny Link Example</h1>
            <h3>링크 미리보기</h3>
            <textarea cols={50} rows={10} onChange={onChange}></textarea>
            <p>예시 1</p>
            <p>문자열 : {textParts}</p>


        </div>
    );

}

export default Test;
