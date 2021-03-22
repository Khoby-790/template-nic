import React from 'react'
import ClipLoader from "react-spinners/GridLoader";

interface Props {

}

const Loader = (props: Props) => {
    return (
        <div className="h-full flex items-center justify-center">
            <ClipLoader color={"#3DA5D9"} margin={12} loading={true} size={50} />
        </div>
    )
}

export default Loader
