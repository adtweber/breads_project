const React = require('react')
const Default = require('./layouts/default')
const breads = require('../controllers/breads_controller')

function Index ({breads}) {
    return (
        <Default>
            <h2>Index Page</h2>
            <p>I have {breads[0].name} bread!</p>
            <ul>
            {
                breads.map((breads, index)=> {
                    return (
                        <li key={index}>
                            <a href={`/bread/${index}`}>
                                {breads.name}
                            </a>
                        </li>
                    )
                })
            }
            </ul> 
        </Default>
    )
}

module.exports = Index
