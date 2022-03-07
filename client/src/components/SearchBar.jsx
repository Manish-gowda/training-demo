import { Button, Form } from 'react-bootstrap';

function SearchBar({
    setSearchText,
    onClickRefresh
}) {
    const onChangeSearchText = (event) => {
        setSearchText(event.target.value)
    }
    const onKeyPressSearchText = (event) => {
        if(event.charCode === 13){
            onClickRefresh()
        }
    }
    return (
        <div className="d-flex" justify-content-between>
                <Form.Control className="me-auto" placeholder="Search for the Movies"
                    onChange={onChangeSearchText} onKeyPress={onKeyPressSearchText} />
                <Button variant="success"
                    onClick={onClickRefresh}>Search</Button>
                <Button variant="warning"
                    onClick={onClickRefresh}>Reload</Button>
        </div>
    )
}
export default SearchBar;