export const loadingPageAnimation = {
    before: {
        opacity: 1,
        x: 0
    },
    after: {
        x: "0",
        transition: {
            duration: 0.33,
            ease: "easeOut",
            when: "afterChildren",
            staggerChildren: 1  
        }
    },
}

export const loadingTextAnimation = {
    before: {
        scale: 0,
    },
    after: {
        scale: 1,
        transition: {
            duration: 1
        },      
        transitionEnd: {
            scale: 0,
            duration: 1,
        }
    },
}