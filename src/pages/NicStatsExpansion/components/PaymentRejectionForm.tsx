import React from 'react'
import { Input } from '../../../components'
import Button from '../../../components/Button'

interface Props {

}

const PaymentRejectionForm = (props: Props) => {
    return (
        <div className="flex flex-col">
            <div className="bg-red-200 text-red-700 p-5">
                <span>Payment Rejection</span>
            </div>
            <div className="flex flex-col p-5">
                <Input label="Reason" type="textarea" />
            </div>
            <div className="p-2 flex justify-end">
                <Button title="Cancel" />
                <Button title="Decline" color="red" />
            </div>
        </div>
    )
}

export default PaymentRejectionForm
