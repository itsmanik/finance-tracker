import { useState } from "react";
import { useUser } from "@clerk/clerk-react";

const FinancialRecordForm = () => {
    const [description, setDescription] = useState("");
    const [amount, setAmount] = useState("");
    const [category, setCategory] = useState("");
    const [paymentMethod, setPaymentMethod] = useState("");
    const { user } = useUser();

    const handleSubmit = (e) => {
        e.preventDefault();
        const record = {
            userId: user?.id,
            date: new Date(),
            description: description,
            amount: amount,
            category: category,
            paymentMethod: paymentMethod,
        };

        setDescription("");
        setAmount("");
        setCategory("");
        setPaymentMethod("");
    };

    return (
        <div className="bg-gray-400">
            <form onSubmit={handleSubmit}>
                <div>
                    <label>Description</label>
                    <input type="text" required value={description} onChange={(e) => setDescription(e.target.value)}/>
                </div>
                <div>
                    <label>Amount</label>
                    <input type="number" required value={amount} onChange={(e) => setAmount(e.target.value)} />
                </div>
                <div>
                    <label>Category</label>
                    <select required value={category} onChange={(e) => setCategory(e.target.value)}>
                        <option value="">Select a category</option>
                        <option value="Food">Food</option>
                        <option value="Poison">Poison</option>
                        <option value="Rent">Rent</option>
                    </select>
                </div>
                <div>
                    <label>Payment method</label>
                    <select required value={paymentMethod} onChange={(e) => setPaymentMethod(e.target.value)}>
                        <option value="">Select payment options</option>
                        <option value="cash">Cash</option>
                        <option value="gpay">G-pay</option>
                        <option value="credit card">Credit card</option>
                    </select>
                </div>
                <button type="submit" className="border bg-gray-950 text-white">
                    Add record
                </button>
            </form>
        </div>
    );
};

export default FinancialRecordForm;
