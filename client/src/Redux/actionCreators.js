import { collection, onSnapshot, orderBy, query } from "firebase/firestore";
import { toast } from "react-toastify";
import { database } from "../Auth/config";
import { productsActions } from "./Features/productsSlice";

export const getProductsData = () => {
    return async function (dispatch) {
        try {
            const productsRef = collection(database, "shopProducts");

            const q = query(productsRef, orderBy("name", "desc"));

            onSnapshot(q, (querySnapshot) => {
                const productsList = querySnapshot.docs.map((item) => ({
                    id: item.id,
                    ...item.data(),
                }));

                dispatch(productsActions.productsData(productsList));
            });
        } catch (error) {
            toast.error(error.message);
        }
    };
};
