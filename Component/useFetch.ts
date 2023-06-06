import { useEffect, useState } from "react";
import axios from "axios";

const useFetch = () => {
    const [data, setData] = useState([]);
    const [isPending, setIsPending] = useState(true);

    useEffect(() => {
        async function fetchData() {
            try {
                const response = await axios.post(
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

                if (response.data && response.data.content) {
                    setData(response.data.content);
                    setIsPending(false);
                }
            } catch (error) {
                console.error("Error fetching data:", error);
            }
        }

        fetchData();
    }, []);

    return { data , isPending};
};

export default useFetch;
