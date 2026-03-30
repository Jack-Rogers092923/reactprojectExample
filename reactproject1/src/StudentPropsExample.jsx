function Student(props) {
    return (
        <div>
            <h1>Student Component</h1>
            <p>This is the Student component.</p>
            <h2>name:{props.name}</h2>
            <h2>major:{props.major}</h2>
            <h2>grade:{props.grade}</h2>
        </div>
    );
}

export default Student;