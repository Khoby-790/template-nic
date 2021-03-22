import React from 'react'
import ClipLoader from "react-spinners/ClipLoader";

interface Props {

}

const Loader = (props: Props) => {
    return (
        <div className="h-full flex items-center justify-center">
            <ClipLoader color={"#2364AA"} loading={true} size={150} />
        </div>
    )
}

export default Loader
