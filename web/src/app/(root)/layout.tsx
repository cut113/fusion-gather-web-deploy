import Container from "@/component/layout/Container"

export default async function Layout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <Container>
            <div>header</div>
            {children}
            <div>footer</div>
        </Container>
    )
}
