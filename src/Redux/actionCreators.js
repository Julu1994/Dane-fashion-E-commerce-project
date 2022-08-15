import { collection, onSnapshot, orderBy, query } from "firebase/firestore";
import { toast } from "react-toastify";
import { database } from "../Firebase/config";
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
                console.log(productsList, "this is the test string");

                dispatch(productsActions.productsData(productsList));
            });
        } catch (error) {
            toast.error(error.message);
        }
    };
};
