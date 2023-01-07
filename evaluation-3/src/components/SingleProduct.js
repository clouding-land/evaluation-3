import React,{useEffect} from 'react';
import axios from "axios";
import {useSelector,useDispatch} from "react-redux";
import ProductsComp from './ProductsComp';
import { setProducts } from '../redux/actions/productActions';

const SingleProduct=()=>{
    const products = useSelector((state)=>state);
    const dispatch = useDispatch();
    
    const fetchProducts=async()=>{
        const response = await axios.get("https://fakestoreapi.com/products")
        .catch((err)=>{
            console.log("Err",err);
        });
        dispatch(setProducts(response.data));
    };
    useEffect(()=>{
        fetchProducts();
    },[]);
    console.log("Products:",products);
    return(
        <div>
            <ProductsComp />
        </div>
    );
};
export default SingleProduct;