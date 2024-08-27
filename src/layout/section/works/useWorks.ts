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
        title: "train",
        description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim. Lorem ipsum dolor sit amet, consectetur adipisicing elit  ut labore et dolore magna aliqua Ut enim",
        linkCode: "https://github.com/tabolo1000/todolists",
        linkDemo: "https://tabolo1000.github.io/todolists/",
        photo: photoWorks.todolists,
        filter: Filter.react,
    },
    {
        title: "phone",
        description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim. Lorem ipsum dolor sit amet, consectetur adipisicing elit  ut labore et dolore magna aliqua Ut enim",
        linkCode: "/phoneCode",
        linkDemo: "/trainDeno",
        photo: photoWorks.phone,
        filter: Filter.react,
    },
    {
        title: "laptop",
        description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim. Lorem ipsum dolor sit amet, consectetur adipisicing elit  ut labore et dolore magna aliqua Ut enim",
        linkCode: "/laptopCode",
        linkDemo: "/trainDeno",
        photo: photoWorks.laptop,
        filter: Filter.react,
    },
    {
        title: "micro",
        description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim. Lorem ipsum dolor sit amet, consectetur adipisicing elit  ut labore et dolore magna aliqua Ut enim",
        linkCode: "/microCode",
        linkDemo: "/trainDeno",
        photo: photoWorks.micro,
        filter: Filter.react,
    },
];






export const useWorks = () => {
    const [work,] = useState<Array<WorkProjectType>>(stateWorks)
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
    title: string;
    description: string;
    linkCode: string;
    linkDemo: string;
    photo: string;
    filter: Filter
};
