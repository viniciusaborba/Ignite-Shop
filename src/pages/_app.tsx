import { globalStyles } from "../styles/global";
import { AppProps } from "next/app";

import Image from 'next/image'

import logo from '../assets/logo.svg'
import { Container, Header } from "../styles/pages/app";

globalStyles()

export default function App({Component, pageProps}: AppProps) {
    return(
        <Container>
            <Header>
                <Image src={logo} alt="logo"/>
            </Header>

            <Component {...pageProps}/>;
        </Container> 
    )
}

