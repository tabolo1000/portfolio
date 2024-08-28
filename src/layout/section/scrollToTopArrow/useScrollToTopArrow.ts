import { useEffect, useState } from "react"



interface useScrollToTopArrowProps {
    (): {
        hidden: boolean,
    }
}


export const useScrollToTopArrow: useScrollToTopArrowProps = () => {
    const [hidden, isHidden] = useState<boolean>(true)

    useEffect(() => {
        window.addEventListener("scroll", () => {
            if (window.scrollY < 200) {
                isHidden(false)
            }
            if (window.scrollY > 200) {
                isHidden(true)
            }
        })
    }, [window.scrollY])

    return {
        hidden,
    }
} 