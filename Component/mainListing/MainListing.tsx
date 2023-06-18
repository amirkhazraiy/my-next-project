
import momentJalali from "../../momentJalali";
import {HiLocationMarker, HiOutlineBookmark} from "react-icons/hi";
import {ListingData} from "../../pages/Listing";

interface Props {
    data: ListingData
}

const MainListing = (props : Props) => {
    console.log('props: ',props)
    return (

        <div className="md:w-full md:w-72">
            {props.data.content.map((item) => (
                <div
                    className="flex flex-col h-80 mb-5 p-2 border border-gray-200 drop-shadow-md hover:drop-shadow-xl md:flex-row  hover:bg-gray-50 hover:shadow-xl w-full md:w-full md:max-w-xl"
                    key={item.identifier}>
                    <div>
                        <img  className="md:w-56 ml-3" src={item.media.imageUrls[0]}/>
                        <p className="text-xs mt-6 font-normal font-bold text-right text-gray-600 dark:text-gray-400 w-60">
                            {momentJalali(new Date(item.searchDate)).fromNow()}
                        </p>
                    </div>
                    <div className="flex flex-col justify-between my-3 mr-2 w-full max-w-xl">
                        <h5 className="text-gray-900 text-xs">{item.title}</h5>
                        <p className="text-red-800">قیمت: {item.pricing.price} تومان </p>
                        <div className="text-gray-500 flex flex-row items-center">
                            <HiLocationMarker
                                fill="none"
                                viewBox="0 0 24 24"
                                strokeWidth={1.5}
                                stroke="currentColor"
                                className="w-5 h-5 text-gray-500"
                            />

                            <span className="mr-2">{item.location.locationName}</span>
                        </div>
                        <div className="mb-5">
                            <span
                                className="bg-gray-100 text-gray-800 text-xs font-medium mr-2 px-5 py-1 rounded-full"> {item.attributes.landuseType}</span>
                            <span
                                className="bg-gray-100 text-gray-800 text-xs font-medium mr-2 px-5 py-1 rounded-full">  متر{item.attributes.floorArea}</span>
                            <span
                                className="bg-gray-100 text-gray-800 text-xs font-medium mr-2 px-5 py-1 rounded-full">خواب{item.attributes.numOfBeds}</span>

                        </div>
                        <hr className="h-px bg-gray-200 border-1 dark:bg-gray-700"/>
                        <div className="flex flex-row justify-between mt-2">
                            <button type="button"
                                    className="focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-base px-5">09378676733
                            </button>
                            <div className="flex flex-row ">
                                <button
                                    type="button"
                                    className="text-blue-700 border border-blue-700 hover:bg-blue-700 hover:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm p-2.5 text-center inline-flex items-center mr-2 ">
                                    <svg
                                        width="18"
                                        height="20"
                                        viewBox="0 0 18 20"
                                        fill="none"
                                        className="w-10 h-10 p-2 text-gray-900"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path
                                            d="M6.15833 11.2587L11.85 14.5753M11.8417 5.42533L6.15833 8.74199M16.5 4.16699C16.5 5.5477 15.3807 6.66699 14 6.66699C12.6193 6.66699 11.5 5.5477 11.5 4.16699C11.5 2.78628 12.6193 1.66699 14 1.66699C15.3807 1.66699 16.5 2.78628 16.5 4.16699ZM6.5 10.0003C6.5 11.381 5.38071 12.5003 4 12.5003C2.61929 12.5003 1.5 11.381 1.5 10.0003C1.5 8.61961 2.61929 7.50033 4 7.50033C5.38071 7.50033 6.5 8.61961 6.5 10.0003ZM16.5 15.8337C16.5 17.2144 15.3807 18.3337 14 18.3337C12.6193 18.3337 11.5 17.2144 11.5 15.8337C11.5 14.4529 12.6193 13.3337 14 13.3337C15.3807 13.3337 16.5 14.4529 16.5 15.8337Z"
                                            stroke="#475467"
                                            strokeWidth="1.66667"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                        />
                                    </svg>

                                    <span className="sr-only">share</span>
                                </button>

                                <button type="button"
                                        className="text-blue-700 border border-blue-700 hover:bg-blue-700 hover:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm p-2.5 text-center inline-flex items-center mr-2 ">
                                    <HiOutlineBookmark
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        strokeWidth={1.5}
                                        stroke="currentColor"
                                        className="w-10 h-10 p-2 text-gray-900"
                                    />
                                    <span className="sr-only">Icon description</span>
                                </button>


                            </div>
                        </div>


                    </div>

                </div>


            ))}
        </div>
    )
}
export default MainListing
