type Thene = {
    color: {
        primaryBG: string,
        secondaryBg: string,
        gradientPrimary: string,
        gradientSecondary: string,
        successButton: string,
        // gradientProgress: "linear-gradient(90deg, #15B9B9, #3C1DFF)",

        font: string,
    }
    mobile: string,
    tablet: string,
    animation: {
        transition: string,
    }
}

export const theme: Thene = {
    color: {
        primaryBG: "#1f1f1fca",
        secondaryBg: "#2b2a2ad2",
        gradientPrimary: "#15B9B9",
        gradientSecondary: "#3C1DFF",
        successButton: "#1a8360",
        // gradientProgress: "linear-gradient(90deg, #15B9B9, #3C1DFF)",

        font: "#FFFFFF",
    },
    mobile: "screen and (max-width: 460px)",
    tablet: "screen and (max-width: 768px)",

    animation:{
        transition: ".3s ease",
    }
}