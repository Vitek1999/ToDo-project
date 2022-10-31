

const Filter = (props) => {

    const buttonsData = [
        {name: 'all', label: 'All'},
        {name: 'active', label: 'Active'},
        {name: 'completed', label: 'Completed'},
    ];
    const buttons = buttonsData.map(({name, label}) => {
        const active = props.filter === name;
        const clazz = active ? 'btn-active' : '';

        return(
            <button
                className={`btn ${clazz}`}
                type='button'
                key = {name}
                onClick={() => props.onFilterSelect(name)}>
                {label}
            </button>
            
        )

    })

    
    return(
        <div className="filters">
            {buttons}
        </div>
    );
}

export default Filter;