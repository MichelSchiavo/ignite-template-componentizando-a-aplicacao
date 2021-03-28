interface HeaderProps {
    title: string
}

export function Header(prop: HeaderProps) {
    return (
        <header>
            <span className="category">Categoria:<span> {prop.title}</span></span>
        </header>
    )
}