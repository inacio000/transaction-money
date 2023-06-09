import { Container } from "./styles";
import { useTransactions } from "../../hooks/useTransactions";

export function TranssitionsTable() {
    const { transactions } = useTransactions();

    return (
        <Container>
            <table>
                <thead>
                    <tr>
                        <th>Title</th>
                        <th>Price</th>
                        <th>Categories</th>
                        <th>Date</th>
                    </tr>
                </thead>

                <tbody>
                    {
                        transactions.map(transaction => (
                            <tr key={transaction.id}>
                                <td>{transaction.title}</td>
                                <td className={transaction.type}>
                                    {
                                        new Intl.NumberFormat('pt-BR', {
                                            style: 'currency',
                                            currency: 'BRL'
                                        }).format(transaction.amount)
                                    }
                                </td>
                                <td>{transaction.category}</td>
                                <td>
                                    {
                                        new Intl.DateTimeFormat('pt-BR').format(
                                            new Date(transaction.createdAt)
                                        )
                                    }
                                </td>
                            </tr>
                        )
                        )
                    }
                </tbody>
            </table>
        </Container>
    )
}