import { useEffect } from "react";
import ProductList from "./ProductList";
import LoadingComponenet from "../../app/layout/LoadingComponent";
import { useAppDispatch, useAppSelector } from "../../app/store/configureStore";
import { fetchProductsAsync, productsSelectors } from "./catalogSlice";

export default function Catalog() {
    const products = useAppSelector(productsSelectors.selectAll);
    const { productsLoaded, status } = useAppSelector(state => state.catalog);
    const dispatch = useAppDispatch();

 useEffect(() => {
     if (!productsLoaded) dispatch(fetchProductsAsync());
 }, [productsLoaded, dispatch]);

    if (status.includes("pending")) return <LoadingComponenet message="The products are loading..."/>

    return (
        <>
        <ProductList products={products} />
    </>
    )
}