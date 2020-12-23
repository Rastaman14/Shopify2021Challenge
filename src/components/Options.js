import React from 'react'

export default function Options() {
    return (
        <div className="d-flex flex-row m-2">
            <div className="form-check m-2">
                <input className="form-check-input" type="radio" name="Poster" id="poster-id" value=""/>
                <label className="form-check-label" for="Poster">
                    Show Poster
                </label>
            </div>
            <div className="form-check m-2">
                <input className="form-check-input" type="radio" name="Plot" id="plot-id" value="" />
                <label className="form-check-label" for="exampleRadios2">
                    Show Plot
                </label>
            </div>
            <div className="form-check m-2">
                <input className="form-check-input" type="radio" name="Rating" id="rating-id" value=""/>
                <label className="form-check-label" for="Rating">
                    Showing Rating
            </label>
            </div>
        </div>
    )
}
