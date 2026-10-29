const Persons = ({personsToShow}) => (
    <ul style={{listStyleType: 'none', padding: '0'}}>
        {personsToShow.map((person) => (
            <li key={person.name}>{person.name} {person.number}</li>
        ))}
    </ul>
)

export default Persons