const LocationInfoBox = ({ info }) => {
    return (
    <div className="location-info">
        <h2>Wildfire Info</h2>
        <ul>
            <li>ID #: <strong>{info.id}</strong></li>
            <li>Location: <strong>{info.title}</strong></li>
        </ul>
    </div>
    )
}

export default LocationInfoBox;