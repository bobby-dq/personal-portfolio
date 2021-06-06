export const loadingPageAnimation = {
    before: {
        x: 0
    },
    after: {
        x: "-200%",
        transition: {
            duration: 0.33,
            ease: "easeOut",
            when: "afterChildren",
            staggerChildren: 0.10
        }
    }
}

export const loadingTextAnimation = {
    before: {
        opacity: 1
    },
    after: {
        opacity: 0
    }
}