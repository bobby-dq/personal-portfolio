// Packages
import { FunctionComponent, SyntheticEvent, useState } from 'react';
import styled from 'styled-components';
import emailjs from 'emailjs-com';
import { INavItem } from '../data/navbarData';

// Components
import { PageHeader } from './PageHeader';
import { PageIndicator } from './PageIndicator';

// Styles
import { themeStyles as theme } from '../styles/globalStyle';

interface IChapterThree {
    activeNavItem: INavItem
}

export const ChapterThree: FunctionComponent<IChapterThree> = (p) => {

    const [sent, setSent] = useState(false);

    function sendEmail(e: SyntheticEvent) {
        e.preventDefault();
        emailjs.sendForm('service_g7jafdo', 'template_7qs4pyp', (e.target as HTMLFormElement), 'user_dNlgxkSRMslJAvAJKneoV')
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });
            setSent(true);
            (e.target as HTMLFormElement).reset();
    }

    function resetForms(e: SyntheticEvent) {
        
    }

    return (
        <StyledChapterThree>
            <PageIndicator activeNavItem={p.activeNavItem} />
            <div className="content-wrapper">
                <PageHeader title={p.activeNavItem.title}/>
                <div className="message">
                    <p>What’s next? If you would like to know more or if you know
                    something we can create together, please feel free to reach
                    out to me!</p>
                </div>
                <div className="form-wrapper">
                    <form onSubmit={(e) => sendEmail(e)}>
                        <div className="form name-form">
                            <label htmlFor="name">Name:</label>
                            <input type="text" name="name" required></input>
                        </div>
                        <div className="form email-form">
                            <label htmlFor="email">Email:</label>
                            <input type="email" name="email" required></input>
                        </div>
                        <div className="form message-form">
                            <label htmlFor="message">Message:</label>
                            <textarea style={{resize: 'none'}} rows={20} name="message" required></textarea>
                        </div>
                        <div className="form submit">
                            <input  type={`${sent ? '' : 'submit'}`} value={`${sent ? 'Thank you!' : 'Send Message'}`}  required/>
                            {sent ? <p onClick={(e) => setSent(!sent)}>Click here to send another message.</p> : ''}
                        </div>
                    </form>
                </div>
            </div>
        </StyledChapterThree>
    )

}

const StyledChapterThree = styled.div`
    min-height: 100vh;
    font-family: ${theme.montserrat};
    font-size: ${theme.text};
    display: flex;

    .content-wrapper {
        flex: 1 1 66.67%;
    }

    .message {
        margin-top: 2rem;
    }

    .form-wrapper {
        margin-top: 2rem;
    }

    .form  {
        display: flex;
        flex-direction: column;
        margin-bottom: 2rem;
        label {
            margin-bottom: 0.5rem;
            font-family: ${theme.playfair};
        }

        input, textarea {
            font-size: ${theme.text};
            padding: 1rem;
            font-family: ${theme.montserrat};
        }
    }

    .submit {
        font-family: ${theme.playfair};

        input {
            font-family: ${theme.playfair};
            font-weight: 400;
            text-align: center;
            background: ${theme.darkGray};
            color: ${theme.dirtyWhite};
            border: solid 5px ${theme.dirtyWhite};
            cursor: pointer;
            transition: all 0.33s ease;

            &:hover {
                border: solid 5px rgba(255, 0, 0, 1);
                color: rgba(255, 0, 0, 1);
            }
        }

        p {
            margin-top: 1rem;
            cursor: pointer;
            transition: all 0.33s ease;
            &:hover {
                color: rgba(255, 0, 0, 1);

            }
        }
    }

    @media (max-width: 650px) {
        flex-direction: column;
    }
`;





