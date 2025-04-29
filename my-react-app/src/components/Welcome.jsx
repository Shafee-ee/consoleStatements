import PropTypes from 'prop-types';

function Welcome({ name, age }) {
    return <h1>Welcome {name}, You are {age} years old</h1>
}

Welcome.propTypes = {
    name: PropTypes.string.isRequired,
    age: PropTypes.number
}
export default Welcome