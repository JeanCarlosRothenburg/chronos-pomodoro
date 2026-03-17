import { Container } from "../../components/Container";
import { Footer } from "../../components/Footer";
import { Header } from "../../components/Header";
import { Menu } from "../../components/Menu";

type MainProps = {
    children?: React.ReactNode
}

export function Main({children}: MainProps) {
    return (
        <>
            <Container>
                <Header />
            </Container>

            <Container>
                <Menu />
            </Container>

            { children }

            <Container>
                <Footer />
            </Container> 
        </>
    )
}