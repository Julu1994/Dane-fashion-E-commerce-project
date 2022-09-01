import { collection, onSnapshot, orderBy, query } from "firebase/firestore";
import { toast } from "react-toastify";
import { database } from "../Firebase/config";
import { orderHistoryActions } from "./Features/orderHistorySlice";

export const getOrderData = () => {
    return async function (dispatch) {
        try {
            const orderRef = collection(database, "orders");

            const q = query(orderRef, orderBy("order", "desc"));

            onSnapshot(q, (querySnapshot) => {
                const orderList = querySnapshot.docs.map((item) => ({
                    id: item.id,
                    ...item.data(),
                }));

                dispatch(orderHistoryActions.orderHistory(orderList));
                // console.log(orderList, "order List");
            });
        } catch (error) {
            toast.error(error.message);
        }
    };
};
