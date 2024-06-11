function ListGroup() {
    const items = ["e", "i", "g"]
    return (
        <>
            <h1>List</h1>
            <ul className="list-group">
                {items.map((item) => (
                    <li key={item} onClick={(event) => console.log(event)}>{item}</li>))}
            </ul>
        </>
    );
}
export default ListGroup