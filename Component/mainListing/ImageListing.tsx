import useFetch from "../useFetch";


const ImageListing = () => {
    const {data} = useFetch()
    return (
        <div>
            {data.map((item) => (
                <div key={item.identifier}>
                </div>
            ))}
        </div>
    )
}
export default ImageListing
