import { useUser } from "@clerk/clerk-react";
import FinancialRecordForm from "./FinancialRecordForm";
import FinancialRecordList from "./FinancialRecordList";

const Dashboard = () => {
    const { user } = useUser();

    return (
        <div>
            <div>
                <h1>Hello {user?.username}!</h1>
                <FinancialRecordForm />
                <FinancialRecordList />
            </div>
        </div>
    );
};

export default Dashboard;
