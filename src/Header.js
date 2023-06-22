function Header() {
    const h1Style = {
        fontStyle: 'italic'
    };

    return (
        <header style={{
            backgroundColor: 'blue',
            color: 'white'
        }}>
            <h1 style={h1Style}>Groceries List</h1>
        </header>
    )
} 

export default Header;
