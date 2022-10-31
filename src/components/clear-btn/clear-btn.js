

const ClearBtn = (props) => {
    return(
        <button 
            className="clear-btn"
            onClick = {props.deleteItem}>
                Clear completed
        </button>
    );
}

export default ClearBtn;