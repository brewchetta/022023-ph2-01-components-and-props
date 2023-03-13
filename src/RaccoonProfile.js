function RaccoonProfile({ name, favFood = "pizza", hometown="NYC" }) {

    // console.log( props )

    // const name = props.name
    // const favFood = props.favFood

    // const { name, favFood } = props
    
    return (
        <div>
            <p>Name: {name}</p>
            <p>Favorite Food: {favFood}</p>
        </div>
    )
}


export default RaccoonProfile
