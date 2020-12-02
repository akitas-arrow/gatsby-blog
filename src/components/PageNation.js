import React from 'react'
import { Link } from 'gatsby'

function PageNation({previousPagePath, nextPagePath}) {
    return (
        <div>
            <Link to={previousPagePath}>Previous</Link>
            <Link to={nextPagePath}>Next</Link>
        </div>
    )
}

export default PageNation
