import { Summary } from "../Summary";
import { TranssitionsTable } from "../TranssitionsTable";
import { Container } from "./styles";

export function Dashboard() {
    return (
        <Container>
            <Summary />
            <TranssitionsTable />
        </Container>
    )
}