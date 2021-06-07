import { themeStyles as theme } from './globalStyle';

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
            staggerChildren: 0.33 
        }
    },
}

export const loadingTextAnimation = {
    before: {
        fontFamily: `${theme.montserrat}`,
    },
    after: {
        fontFamily: [`serif`, `sans-serif`, `serif`],   
        transition : {
            times: [0.33, 0.33, 0.33]
        }
    },
}

export const switchPageAnimation = {
    before: {
        opacity: 0,
        x: '-100%',
    },
    after: {
        opacity: 1,
        x: 0,
        transition: {
            duration: 0.50,
            when: 'beforeChildren',
            staggerChildern: 0.10,
        }
    },
    exit: {
        x: '100%',
        opacity: 0,
        transition: {
            duration: 0.50
        }
    }
}
