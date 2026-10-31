const Persons = ({personsToShow}) => (
    <ul style={{listStyleType: 'none', padding: '0'}}>
        {personsToShow.map((person) => (
            <li key={person.id}>{person.name} {person.number}</li>
        ))}
    </ul>
)

export default Persons