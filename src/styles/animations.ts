import { themeStyles as theme } from './globalStyle';

export const loadingPageAnimation = {
    before: {
        opacity: 1,
        x: 0,
        scale: 1,
    },
    after: {
        opacity: 0,
        scale: 5,
        x: "-500%",
        transition: {
            duration: 2,
            ease: "easeOut",
            when: "afterChildren",
            staggerChildren: 0.5,
            delay: 1
        }
    },
}

export const loadingDivAnimation = {
    before: {
        backgroundColor: theme.darkGray,
    },
    after: {
        backgroundColor: theme.dirtyWhite,
        transition: {
            duration: 0.33
        }
    },
}

export const switchPageAnimation = {
    before: {
        opacity: 0,
        x: '50%',
    },
    after: {
        opacity: 1,
        x: "0%",
        transition: {
            duration: 0.50,
            when: 'beforeChildren',
            staggerChildern: 0.10,
        }
    },
    exit: {
        x: '-50%',
        opacity: 0,
        transition: {
            duration: 0.50
        }
    }
}

export const loadComponentAnimation = {
    before: {
        opacity: 0,
        y: "10%",
    },
    after: {
        opacity: 1, 
        y: "0%",
        transition: {
            duration: 0.33,
            when: 'beforeChildren',
            staggerChildren: 0.4,
        }
    }
}

export const hoveredLineAnimation = {
    before: {
        x: "-100%"
    },
    after: {
        x: "0%",
        transition: {
            duration: 0.33,
        }
    }
}

export const inViewLineAnimation = {
    before: {
        x: "-100%"
    },
    after: {
        x: "0%",
        transition: {
            duration: 0.33,
            delay: 0.5
        }
    }
}

export const divWrapperAnimation = {
    before: {
        opacity: 1,
    },
    after: {
        opacity: 1,
        transition: {
            duration: 1,
            when: "afterChildren",
            staggerChildren: 0.1
        }
    }
}

export const heroTextAnimation = {
    before: {
        y: "100%",
        opacity: 0,
    },
    after: {
        opacity: 1,
        y: "0%",
        transition: {
            duration: 0.1
        }
    }
}
