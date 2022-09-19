import Home from "../Components/Pages/Home";
import DefaultLayout from "../Components/Layout/DefaultLayout/DefaultLayout";

const publicRouter = [{ path: "/", component: Home, layout: DefaultLayout }];
const privateRouter = [];

export { publicRouter, privateRouter };
