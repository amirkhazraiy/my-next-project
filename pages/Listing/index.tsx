import MainListing from "../../Component/mainListing/MainListing";
import {GetServerSideProps} from "next";
import axios from "axios";

export interface ListingData {
    [key: string]: unknown
}


interface Props {
    data: ListingData
}

const Listing = (props: Props) => {
    console.log("-------> props", props)
    return (
        <>
            <MainListing data={props.data}/>
        </>

    );
};

export default Listing;

export const getServerSideProps: GetServerSideProps = async () => {
    // The first time I made a request in the form of Client Side Rendering,
    // and then because I made a request in the form of ssr, there was no need for skeleton
    const res = await axios.post(
        "https://server.kilid.com/listing_api/v1.0/listing/search?page=0&sort=DATE_DESC&lang=fa",
        {
            action: "listingSearch",
            content: {
                listingTypeId: "1",
                location: [272905],
                similarLocation: null,
                attributeFilters: {},
            },
            attributeFilters: {},
            fromLegacyService: true,
            geographicPolygon: null,
            listingTypeId: 1,
            location: [272905],
            similarLocation: null,
        }
    );
    const data: ListingData = await res.data;

    return {props: {data}};
}
