var React = require('react');

function About(props) {
  var techologies = ['React', 'React Router', 'Flux', 'Node'];
  return (
    <div className="container my-5">
      <h4>This application uses these technologies:</h4>
      <ul>
        {
          techologies.map(function(v, i, arr) {
            return <li key={i}>{v}</li>
          })
        }
      </ul>
    </div>
  )
}

module.exports = About;