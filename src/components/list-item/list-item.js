

const ListItem = (props) => {

    const {text, onToggleCheck, checked} = props;
    let className = 'list-item';

    if (checked) {
        className += ' checked-item';
    }


    return(
        <li className={className}>
            <input type="checkbox" checked={checked} onChange={onToggleCheck} />
            <span>{text}</span>
        </li>
    );

}

export default ListItem;