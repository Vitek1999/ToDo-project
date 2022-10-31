import ListItem from '../list-item/list-item'


const List = ({data, onToggleCheck}) => {

    const elements = data.map(item=>{
        const {id, ...itemProps} = item;
        return(
            <ListItem 
            key={id} 
            {...itemProps}
            onToggleCheck={() => onToggleCheck(id)}/>
        )
    })
    return(
        <ul>
            {elements}
        </ul>
    )
}

export default List;