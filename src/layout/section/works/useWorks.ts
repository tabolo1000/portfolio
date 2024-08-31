import {  v1 } from 'uuid';
import photoWorks from "../../../assets/images/photo/tinySize/indexWorks";
import { useState } from "react";

export enum Filter {
    react = "REACT",
    landingPage = "LANDING PAGE",
    spa = "SPA",
    all = "All"
}

const menuItems: Array<Filter> = [Filter.all, Filter.landingPage, Filter.react, Filter.spa];
const stateWorks: Array<WorkProjectType> = [
    {
        id: v1(),
        title: "Todolist",
        description: "This is a high-performance task management application developed using cutting-edge technologies, including React, Redux, React Router DOM, TypeScript, Redux Thunk, Material-UI, Storybook, and Jest.",
        linkCode: "https://github.com/tabolo1000/todolists",
        linkDemo: "https://tabolo1000.github.io/todolists/",
        photo: photoWorks.todolists,
        filter: Filter.react,
    },
    {
        id: v1(),
        title: "Social network",
        description: "This is a specialized social platform designed specifically for the developer community, utilizing technologies such as React, Redux, React Router, Redux Thunk, and Ant Design.",
        linkCode: "https://github.com/tabolo1000/samurai-way-main",
        linkDemo: "https://tabolo1000.github.io/samurai-way-main/",
        photo: photoWorks.socialNetwork,
        filter: Filter.react,
    },
    {
        id: v1(),
        title: "Counter",
        description: "Create a simple counter application in React that uses the browser's Local Storage to persist its state. This allows the counter's value to be retained even after the page is reloaded.",
        linkCode: "https://github.com/tabolo1000/counter/",
        linkDemo: "https://tabolo1000.github.io/counter/",
        photo: photoWorks.counter,
        filter: Filter.spa,
    },
];






export const useWorks = () => {
    const [work] = useState<Array<WorkProjectType>>(stateWorks)
    const [filter, setFilter] = useState<Filter>(Filter.all)



    const changeFilter = (filter: Filter) => {
        setFilter(filter);
    }

    let actulaListWork = work;
    switch (filter) {
        case Filter.landingPage: {
            actulaListWork = work.filter(el => el.filter === Filter.landingPage);
            break;
        };
        case Filter.react: {
            actulaListWork = work.filter(el => el.filter === Filter.react);
            break;
        };
        case Filter.spa: {
            actulaListWork = work.filter(el => el.filter === Filter.spa)
            break
        };
        default: break;
    }

    return {
        actulaListWork,
        filter,
        changeFilter,
        menuItems,
    }
}


export type WorkProjectType = {
    id: string;
    title: string;
    description: string;
    linkCode: string;
    linkDemo: string;
    photo: string;
    filter: Filter
};
