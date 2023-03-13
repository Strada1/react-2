function Header({ onValueChange, value }) {
    function handleChange(e) {
        onValueChange(e.target.value);
    }

    return (
        <input
            onChange={handleChange}
            value={value}
            type="text"
            className="inputAddTask"
            placeholder="Добавить важные делa"
        />
    );
}

export default Header;
