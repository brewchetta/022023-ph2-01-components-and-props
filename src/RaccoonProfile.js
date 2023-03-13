function RaccoonProfile({ name, favFood = "trash" }) {

    // const name = props.name
    // const favFood = props.favFood

    // const { name, favFood } = props
    
    return (
        <div>
            <h2>Name: {name}</h2>
            <p>Favorite Food: {favFood}</p>
        </div>
    )
}

export default RaccoonProfile
