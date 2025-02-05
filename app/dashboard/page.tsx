import { redirect } from "next/navigation";
import { auth } from "../utils/auth"
import { requireUser } from "../utils/hooks";

async function Dashboard() {
    const sesssion = await requireUser();

    return (
        <div>Dashboard page</div>
    )
}

export default Dashboard