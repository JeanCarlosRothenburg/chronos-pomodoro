import { Container } from "../../components/Container";
import { CountDown } from "../../components/CountDown";
import { TaskInclude } from "../../components/TaskInclude";
import { Main } from "../../templates/Main/Main";

export function Home() {
    return (
        <Main>
            <Container>
                <CountDown />
            </Container>
            <Container>
                <TaskInclude />
            </Container>
        </Main>
    )
}