import spinner from "./Fire.gif"

const Loader = () => {
    return (
        <div className="loader">
            <img src={spinner} alt="Loading" />
            <h1>Fetching Wildfire Data</h1>
        </div>
    )
}

export default Loader