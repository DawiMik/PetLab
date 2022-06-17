import React, {useState, useEffect} from "react";

const fakeData = {
    fundacjom: {
        desc: "fundacja",
        items: [
            {
                title: "tyt",
                subtitle: "sub",
                other: "other"
            },
            {
                title: "tyt",
                subtitle: "sub",
                other: "other"
            },
            {
                title: "tyt",
                subtitle: "sub",
                other: "other"
            },
            {
                title: "tyt",
                subtitle: "sub",
                other: "other"
            },
            {
                title: "tyt",
                subtitle: "sub",
                other: "other"
            },
        ]
    },
    organizacjom: {
        desc: "org",
        items: [
            {
                title: "ty1t",
                subtitle: "sub",
                other: "other"
            },
            {
                title: "tyt",
                subtitle: "sub",
                other: "other"
            },
            {
                title: "trewreyt",
                subtitle: "sub",
                other: "other"
            },
            {
                title: "tyt",
                subtitle: "sub",
                other: "other"
            },
            {
                title: "tyt",
                subtitle: "sub",
                other: "other"
            },
        ]
    },
    inne: {
        desc: "inne",
        items: [
            {
                title: "tyt2222222",
                subtitle: "sub",
                other: "other"
            },
            {
                title: "ty22222t",
                subtitle: "sub",
                other: "other"
            },
            {
                title: "tyt",
                subtitle: "sub",
                other: "other"
            },
            {
                title: "tyt",
                subtitle: "sub",
                other: "other"
            },
            {
                title: "tyt",
                subtitle: "sub",
                other: "other"
            },
        ]
    }
}


export default () => {
    const [fundations,setFundation] = useState(fakeData);
    const [current, setCurrent] = useState("fundacjom")

    const changeFundation = (fun) => {
        setCurrent(fun)
    }

    return (
        <div>
            <h1>Komu pomagamy</h1>
            {
                Object.keys(fundations).map(name => (
                    <button onClick={() => changeFundation(name)}>{name}</button>
                ))
            }
            <h2>{fundations[current].desc}</h2>
            {fundations[current].items.map((el, i) => (
                <li key={i}>{el.title} {el.subtitle}</li>
            ))}
        </div>
    )
}